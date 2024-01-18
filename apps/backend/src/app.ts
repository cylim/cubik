import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import morganBody from 'morgan-body';
import helmet from 'helmet';

import Controller from './interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';

import logger from './services/logger';
import { scheduleJob } from 'node-schedule';
import { syncCommunity } from 'services/community-sync/syncCommunity';
import { envConfig } from 'config';

class App {
  public app: express.Application;

  constructor(controllers: readonly Controller[]) {
    this.app = express();

    // Make this first to avoid logging
    this.app.use('/checks', (_, response) => response.send());

    this.initializeStandardMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen(): void {
    this.app.listen(envConfig.port || 8080, () => {
      if (process.env.CRON_ENABLED === '1') {
        logger.log(
          'info',
          `Adding Sync Community Cron Job, cron interval ${process.env.CRON_INTERVAL}`,
        );
        scheduleJob(process.env.CRON_INTERVAL!, syncCommunity);
      }

      // await syncCommunity();
      logger.info(`App listening on the port ${process.env.PORT}`);
    });
  }

  public getServer(): express.Application {
    return this.app;
  }

  private initializeStandardMiddlewares() {
    this.app.set('trust proxy', true);

    this.app.use(
      cors({
        origin: (origin, callback) => {
          // allow requests with no origin
          // (like mobile apps or curl requests)
          if (!origin) {
            return callback(null, true);
          }

          if (!origin.match(/(cubik.so|localhost)/)) {
            console.log('corss');

            const msg = `The CORS policy for this site does not allow access from the specified origin.`;
            return callback(new Error(msg), false);
          }

          return callback(null, true);
        },
        credentials: true,
      })
    );

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(morgan('combined'));
    this.app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );
    morganBody(this.app, {
      noColors: true,
      logResponseBody: false,
    });
  }

  private initializeControllers(controllers: readonly Controller[]) {
    // All the generic containers as supplied by app
    controllers.forEach((controller) => {
      this.app.use('/api/v1', controller.router);
    });

    // Error Handling
    this.app.use(errorMiddleware);
  }
}

export default App;
