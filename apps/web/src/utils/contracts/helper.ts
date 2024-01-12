import { env } from '@/env.mjs';
import * as anchor from '@coral-xyz/anchor';

export const isaValidPDA = async (
  pda: anchor.web3.PublicKey,
  connection: anchor.web3.Connection,
): Promise<anchor.web3.AccountInfo<Buffer> | null> => {
  return await connection.getAccountInfo(pda);
};
