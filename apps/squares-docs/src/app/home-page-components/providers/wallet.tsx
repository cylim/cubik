'use client';

export const MWA_NOT_FOUND_ERROR = 'MWA_NOT_FOUND_ERROR';

export const metadata = {
  name: 'UnifiedWallet',
  description: 'UnifiedWallet',
  url: 'https://jup.ag',
  iconUrls: ['https://jup.ag/favicon.ico'],
  additionalInfo: '',
  walletConnectProjectId: '4a4e231c4004ef7b77076a87094fba61',
};

export const WalletProvider = ({ children }: { children: any }) => {
  return children;
};
