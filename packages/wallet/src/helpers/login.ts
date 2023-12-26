'use server';

import { cookies } from 'next/headers';
import { utils, web3 } from '@coral-xyz/anchor';

import { createToken, verifyMessage } from '@cubik/auth';
import { AuthPayload } from '@cubik/common-types';
import { prisma } from '@cubik/database';

import { DEFAULT_COOKIE_OPTIONS } from '../constants';

export const LoginUser = async (pubKey: string, sig: string, nonce: string) => {
  const hash = nonce + process.env.SECRET?.slice(0, 10);
  const check = utils.sha256.hash(hash);

  const result = verifyMessage(sig, new web3.PublicKey(pubKey), check);
  if (!result) {
    throw new Error('Signature is not valid');
  }
  const user = await prisma.user.findFirst({
    where: {
      mainWallet: pubKey,
    },
  });
  if (!user) {
    throw new Error('User not found');
  }
  const payload: AuthPayload = {
    ip: '',
    mainWallet: pubKey,
    id: user.id,
    profilePicture: user.profilePicture as string,
    username: user.username as string,
    profileNft: user.profileNft as any,
  };
  const session = await createToken(payload);
  cookies().set('authToken', session as string, DEFAULT_COOKIE_OPTIONS);
  return payload;
};
