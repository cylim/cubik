'use client';

import dynamic from 'next/dynamic';

const CubikWalletProvider = dynamic(
  () => import('@cubik/wallet').then((e) => e.CubikWalletProvider),
  {
    ssr: false,
  },
);
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
