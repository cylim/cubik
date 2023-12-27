'use client';

import { CubikWalletProvider } from '@cubik/wallet';

export const metadata = {
  name: 'UnifiedWallet',
  description: 'UnifiedWallet',
  url: 'https://jup.ag',
  iconUrls: ['https://jup.ag/favicon.ico'],
  additionalInfo: '',
  walletConnectProjectId: '4a4e231c4004ef7b77076a87094fba61',
};

export const WalletProvider = ({ children }: { children: any }) => {
  return (
    <CubikWalletProvider
      type={{
        type: 'admin',
        setUser: () => {},
        setAccessScope: () => {},
        user: null,
      }}
    >
      {children}
    </CubikWalletProvider>
  );
};
