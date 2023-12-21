'use client';

import { getDomainsResult } from '@bonfida/sns-react';
import { web3 } from '@coral-xyz/anchor';

/**
 * @name getSNSFromAddress
 * @description
 * get sns from address
 * @param address: solana address
 * @param  rpc: rpc url
 * @return sns: string
 * @example
 * const sns = await getSNSFromAddress('address');
 * @example
 * const sns = await getSNSFromAddress('address', 'https://api.mainnet-beta.solana.com');
 */

export const getSNSFromAddress = async (address: string, rpc?: string) => {
  const connection = new web3.Connection(
    rpc || 'https://api.mainnet-beta.solana.com',
  );

  const domain = await getDomainsResult(connection, [address]);
  return domain[0];
};
