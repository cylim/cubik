/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Request, Response } from 'express';

import { MetadataType, metaPrisma } from '@cubik/database';

export const getMetadata = async (req: Request, res: Response) => {
  // /:type/:pda
  const { type } = req.params;

  const { pda } = req.params;

  if (!pda || !type) {
    return res.status(400).json({
      error: 'Missing required fields',
    });
  }

  const metadata = await metaPrisma.metadata.findUnique({
    where: {
      id: pda,
      type: type === 'user' ? MetadataType.User : MetadataType.Project,
    },
  });

  return res.status(200).json({
    metadata,
  });
};

export const uploadMetadata = async (req: Request, res: Response) => {
  const { pda, type, metadata } = req.body;

  if (!pda || !type || !metadata) {
    return res.status(400).json({
      error: 'Missing required fields',
    });
  }

  await metaPrisma.metadata.create({
    data: {
      id: pda,
      type,
      metadata,
    },
  });

  return res.status(200).json({
    message: 'Metadata uploaded successfully',
  });
};
