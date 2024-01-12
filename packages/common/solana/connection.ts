import { web3 } from '@coral-xyz/anchor';

export const getRPC = (): string => {
  return process.env.NEXT_PUBLIC_SOLANA_NETWORK === 'devnet'
    ? process.env.NEXT_PUBLIC_RPC_DEVNET_URL || 'https://api.devnet.solana.com'
    : process.env.NEXT_PUBLIC_RPC_MAINNET_URL ||
        'https://api.mainnet-beta.solana.com';
};

export const getConnection = (
  commitment: web3.Commitment | web3.ConnectionConfig | undefined,
) => {
  return new web3.Connection(getRPC(), commitment || 'confirmed');
};
