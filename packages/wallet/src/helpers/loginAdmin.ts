'use server';

import { cookies } from 'next/headers';
import { utils, web3 } from '@coral-xyz/anchor';

import { verifyMessage } from '@cubik/auth';
import { createToken } from '@cubik/auth/src/admin';
import { AccessScope, AuthPayload } from '@cubik/common-types/src/admin';
import { DEFAULT_COOKIE_OPTIONS } from '@cubik/common/constants';

export const loginAdmin = async (
  pubKey: string,
  sig: string,
  nonce: string,
) => {
  const hash = nonce + process.env.SECRET?.slice(0, 10);
  const check = utils.sha256.hash(hash);

  const result = verifyMessage(sig, new web3.PublicKey(pubKey), check);
  if (!result) {
    throw new Error('Signature is not valid');
  }

  const user = await prisma.user.findFirst({
    where: {
      mainWallet: pubKey,
      isActive: true,
      isArchive: false,
    },
    select: {
      id: true,
      username: true,
      profilePicture: true,
      profileNft: true,
      adminAccess: {
        select: {
          eventId: true,
          event: {
            select: {
              name: true,
              type: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw new Error('User not found. Please Create a User Profile');
  }

  const accessScope: AccessScope[] = [];

  user?.adminAccess.forEach((e) =>
    accessScope.push({
      event_id: e.eventId as string,
      event_name: e.event?.name as string,
      event_type: e.event?.type || 'ROUND',
    }),
  );

  const session = await createToken({
    mainWallet: pubKey,
    id: user.id,
    profilePicture: user.profilePicture as string,
    username: user.username as string,
    profileNft: user.profileNft as any,
    accessScope: accessScope,
  });

  const userSessionPayload: AuthPayload = {
    mainWallet: pubKey,
    id: user.id,
    profilePicture: user.profilePicture as string,
    username: user.username as string,
    profileNft: user.profileNft as any,
    accessScope: accessScope,
  };

  cookies().set('authToken', session as string, DEFAULT_COOKIE_OPTIONS);

  return userSessionPayload;
};
