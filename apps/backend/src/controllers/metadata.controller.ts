/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Request, Response } from 'express';
import { MetadataUploadRequest } from 'types/metadata';
import { uploadToIPFS } from '@cubik/helper-scripts/utils/uploadToIPFS';
import { envConfig } from 'config';
import { MetadataUserValidator, MetadataProjectValidator, MetadataEventValidator } from '@cubik/common';

export const getMetadata = async (req: Request, res: Response) => {
  // /:type/:pda
  const { type } = req.params;

  const { pda } = req.params;

  if (!pda || !type) {
    return res.status(400).json({
      error: 'Missing required fields',
    });
  }

  // @todo --> need to properly figure this out with the db

  return res.status(200).json();
};

export const uploadMetadata = async (req: Request, res: Response) => {
  const { pda, type, contract_function, metadata } =
    req.body as MetadataUploadRequest;

  if (!pda || !type || !metadata || !contract_function) {
    return res.status(400).json({
      error: 'Missing required fields in upload metadata request',
    });
  };

  let validated;

  switch (type) {
    case 'user':
      validated =  await MetadataUserValidator.safeParseAsync(metadata);
      break;
    case 'project':
      validated =  await MetadataProjectValidator.safeParseAsync(metadata);
      break;
    case 'event':
      validated =  await MetadataEventValidator.safeParseAsync(metadata);
      break;
    default:
      return res.status(400).json({
        error: 'Invalid type in upload metadata request',
      });
  }


  if (!validated.success) {
    return res.status(400).json({
      error: 'Invalid metadata in upload metadata request',
    });
  };

  const data = await uploadToIPFS(
    envConfig.infura_api_key,
    envConfig.infura_api_key_secret,
    pda,
    validated.data,
  );

  // @todo --> push to db
  /*
  prisma.metadata.create({
    data: {
      id: pda,
      type,
      contract_function,
      metadata: {
        latest: data.Hash,
        history: [data.Hash],
      },
    },
  });
  */

  // @todo --> handle edge cases with errors

  return res.status(200).json({
    message: 'Metadata uploaded successfully',
    data
  });
};

// @todo --> handle update instructions