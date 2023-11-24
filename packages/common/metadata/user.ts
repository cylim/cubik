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
  // profileNft: z.object(),  @todo--> Update the type here
  username: z.string().min(1),
  profilePicture: z.string().min(1),
});
