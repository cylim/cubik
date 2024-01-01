'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { AccessStore } from '@/hooks/store/scope';
import { useUser } from '@/hooks/store/user';

const CubikWalletProvider = dynamic(
  () => import('@cubik/wallet').then((e) => e.CubikWalletProvider),
  {
    ssr: false,
  },
);

export const WalletProvider = ({ children }: { children: any }) => {
  const { setAccessScope } = AccessStore();
  const { setUser, user } = useUser();

  return (
    <CubikWalletProvider
      type={{
        type: 'admin',
        setAccessScope,
        setUser,
        user,
      }}
    >
      {children}
    </CubikWalletProvider>
  );
};
