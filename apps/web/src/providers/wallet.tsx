'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useUser } from '@/hooks/useUser';

const CubikWalletProvider = dynamic(
  () => import('@cubik/wallet').then((e) => e.CubikWalletProvider),
  {
    ssr: false,
  },
);

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
  const { setUser, user } = useUser();
  return (
    <CubikWalletProvider
      type={{
        type: 'user',
        setUser,
        user,
      }}
    >
      {children}
    </CubikWalletProvider>
  );
};
