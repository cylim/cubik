/* eslint-disable @typescript-eslint/no-misused-promises */

import { getMetadata, uploadMetadata } from 'controllers/metadata.controller';
import { Router } from 'express';

export const metadataRouter = Router();

metadataRouter.post('/upload', uploadMetadata);
metadataRouter.get('/:type/:pda', getMetadata);
