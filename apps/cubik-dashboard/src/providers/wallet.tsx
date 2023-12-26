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
  const { showModal, setShowModal } = useCubikWalletContext();
  const { setAccessScope } = AccessStore();
  const { setUser } = useUser();
  console.log('wallet provider', showModal);

  return (
    <CubikWalletProvider>
      <VerifyUserWallet
        setUser={setUser}
        setAccessScope={setAccessScope}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {children}
    </CubikWalletProvider>
  );
};
