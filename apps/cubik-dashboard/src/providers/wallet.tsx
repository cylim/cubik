import React from 'react';
import dynamic from 'next/dynamic';

const CubikWalletProvider = dynamic(
  () => import('@cubik/wallet').then((e) => e.CubikWalletProvider),
  {
    ssr: false,
  },
);

export const WalletProvider = ({ children }: { children: any }) => {
  return <CubikWalletProvider>{children}</CubikWalletProvider>;
};
