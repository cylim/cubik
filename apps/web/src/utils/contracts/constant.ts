import { env } from '@/env.mjs';
import { web3 } from '@coral-xyz/anchor';

export const PROGRAM_ID = new web3.PublicKey(
  '3s9zZaosL6hJFeDToXDoPN4sQgyVwLEdqzaztZXj1Nnk',
);
export const SQUADS_PROGRAM_ID = new web3.PublicKey(
  'SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf',
);

function toUtfBytes(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}
export const SEED_PREFIX = toUtfBytes('multisig');
export const SEED_MULTISIG = toUtfBytes('multisig');

export const connection = new web3.Connection(
  env.NEXT_PUBLIC_RPC_DEVNET_URL,
  'confirmed',
);
