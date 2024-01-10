import { connection, PROGRAM_ID } from '@/utils/contracts/constant';
import { Wallet } from '@coral-xyz/anchor';
import { CubikSDK } from '@cubik-so/sdk';

export const cubikInstance = (wallet: Wallet) => {
  return new CubikSDK(wallet, PROGRAM_ID, connection, {
    commitment: 'confirmed',
  });
};
