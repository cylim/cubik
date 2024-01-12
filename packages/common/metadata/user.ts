import { z } from 'zod';

import { Prisma } from '@cubik/database';

export type MetadataUser = Prisma.UserGetPayload<{
  select: {
    email: true;
    profileNft: true;
    username: true;
    profilePicture: true;
  };
}>;

export const MetadataUserValidator = z.object({
  email: z.string().min(1),
  profileNft: z.object({
    name: z.string().min(1),
    owner: z.string().min(1),
    token: z.string().min(1),
    collectionName: z.string().min(1),
    collectionAddress: z.string().min(1),
  }), // updated db type
  username: z.string().min(1),
  profilePicture: z.string().min(1),
});
