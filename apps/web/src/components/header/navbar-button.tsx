'use client';

import React from 'react';

import { useCubikWallet } from '@cubik/wallet';

import { WalletConnect } from './handleConnect';

const NavbarButton = () => {
  const { wallet, connected } = useCubikWallet();

  return (
    // <>{connected ? <AuthenticatedUserNavMenu /> : <UnifiedWalletButton />}</>
    <WalletConnect />
  );
};

export default NavbarButton;
