/* eslint-disable @typescript-eslint/ban-ts-comment */
import { web3 } from '@coral-xyz/anchor';
// @ts-ignore
import { walletAddressToDotSol } from '@portal-payments/solana-wallet-names';

import { getConnection } from './connection';

/**
 * @name getSNSFromAddress
 * @description
 * get sns from address
 * @param address: solana address
 * @return sns: string
 * @example
 * const sns = await getSNSFromAddress('address');
 * @example
 * const sns = await getSNSFromAddress('address', 'https://api.mainnet-beta.solana.com');
 */
export const getSNSFromAddress = async (
  address: string,
): Promise<string | null> => {
  const domain = await walletAddressToDotSol(
    getConnection('confirmed', 'mainnet-beta'),
    new web3.PublicKey(address),
  );
  console.log('domain', domain.walletName);
  return domain.walletName || null;
};
