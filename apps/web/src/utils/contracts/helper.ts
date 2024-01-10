import { env } from '@/env.mjs';
import * as anchor from '@coral-xyz/anchor';

export const getRPC = () => {
  return env.NEXT_PUBLIC_SOLANA_NETWORK === 'devnet'
    ? env.NEXT_PUBLIC_RPC_DEVNET_URL
    : env.NEXT_PUBLIC_RPC_MAINNET_URL;
};

export const getConnection = (): anchor.web3.Connection => {
  return new anchor.web3.Connection(getRPC(), 'confirmed');
};

export const isaValidPDA = async (
  pda: anchor.web3.PublicKey,
  connection: anchor.web3.Connection,
): Promise<anchor.web3.AccountInfo<Buffer> | null> => {
  return await connection.getAccountInfo(pda);
};
