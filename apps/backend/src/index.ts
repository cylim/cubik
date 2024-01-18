import ImageController from 'controllers/images.controller';
import { config } from 'dotenv';
import logger from './services/logger';
import App from 'app';
import SquadsController from 'controllers/squads.controller';
import TokenController from 'controllers/token.controller';
import UserNftController from 'controllers/usernft.controller';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const main = async () => {
  config();
  const app = new App([
    new ImageController(),
    new SquadsController(),
    new TokenController(),
    new UserNftController(),
  ]);
  app.listen();

};

main()
  .then(() => {
    logger.info('App started ' + new Date().toISOString());
  })
  .catch((err) => {
    logger.error('App failed ' + new Date().toISOString());
    logger.error(err.stack);
  });
