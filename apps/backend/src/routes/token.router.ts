import {
  tokenPriceController,
  tokenPriceMultiple,
} from 'controllers/token.controller';
import { Router } from 'express';

const TokenRouter = Router();

TokenRouter.get('/all', tokenPriceMultiple);
TokenRouter.get('/:token', tokenPriceController);

export { TokenRouter };
