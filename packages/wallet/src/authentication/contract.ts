import { Wallet, web3 } from '@coral-xyz/anchor';
import { CubikSDK } from '@cubik-so/sdk';

import { PROGRAM_ID } from '@cubik/common/constants';

export const connection = new web3.Connection(
  process.env.NEXT_PUBLIC_RPC_DEVNET_URL as string,
  'confirmed',
);
export const cubikInstance = (wallet: Wallet) => {
  return new CubikSDK(wallet, new web3.PublicKey(PROGRAM_ID), connection, {
    commitment: 'confirmed',
  });
};
