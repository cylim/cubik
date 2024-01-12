import { env } from '@/env.mjs';
import { web3 } from '@coral-xyz/anchor';

import { getConnection } from '@cubik/common/solana';

export const SQUADS_PROGRAM_ID = new web3.PublicKey(
  'SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf',
);

function toUtfBytes(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}
export const SEED_PREFIX = toUtfBytes('multisig');
export const SEED_MULTISIG = toUtfBytes('multisig');

export const connection = getConnection('confirmed');
