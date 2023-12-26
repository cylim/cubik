'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { AccessStore } from '@/hooks/store/scope';
import { useUser } from '@/hooks/store/user';

import { useCubikWalletContext, VerifyUserWallet } from '@cubik/wallet';

const CubikWalletProvider = dynamic(
  () => import('@cubik/wallet').then((e) => e.CubikWalletProvider),
  {
    ssr: false,
  },
);

export const WalletProvider = ({ children }: { children: any }) => {
  const { setAccessScope } = AccessStore();
  const { setUser } = useUser();

  return (
    <CubikWalletProvider
      type={{
        type: 'admin',
        setAccessScope,
        setUser,
      }}
    >
      {children}
    </CubikWalletProvider>
  );
};
