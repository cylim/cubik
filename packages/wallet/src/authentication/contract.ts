import { Wallet, web3 } from '@coral-xyz/anchor';
import { CubikSDK } from '@cubik-so/sdk';

import { PROGRAM_ID } from '@cubik/common/constants';
import { getConnection } from '@cubik/common/solana';

export const connection = getConnection('confirmed');
export const cubikInstance = (wallet: Wallet) => {
  return new CubikSDK(wallet, new web3.PublicKey(PROGRAM_ID), connection, {
    commitment: 'confirmed',
  });
};
