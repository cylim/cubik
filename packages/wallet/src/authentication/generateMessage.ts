'use server';

import { utils } from '@coral-xyz/anchor';

export const generateMessage = async (nonce: string) => {
  const hash = nonce + process.env.SECRET?.slice(0, 10);
  const final = utils.sha256.hash(hash);
  return final;
};
