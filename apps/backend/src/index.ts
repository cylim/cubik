import App from 'app';
import ImageController from 'controllers/images.controller';
import SquadsController from 'controllers/squads.controller';
import TokenController from 'controllers/token.controller';
import UserNftController from 'controllers/usernft.controller';
import { config } from 'dotenv';

import logger from './services/logger';

const main = async (): Promise<void> => {
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
