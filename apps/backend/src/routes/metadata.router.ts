/* eslint-disable @typescript-eslint/no-misused-promises */

import { getMetadata, uploadMetadata } from 'controllers/metadata.controller';
import { Router } from 'express';

export const metadataRouter = Router();

// @todo --> need to add the rate limiter auth middleware
metadataRouter.post('/upload', uploadMetadata);
metadataRouter.get('/:type/:pda', getMetadata);
