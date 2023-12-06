'use client';

import React from 'react';

import { UnifiedWalletButton, useWallet } from '@cubik/wallet-connect';

import { WalletConnect } from './auth/handleConnect';
import AuthenticatedUserNavMenu from './nav-menu';

const NavbarButton = () => {
  const { wallet, connected } = useWallet();

  return (
    // <>{connected ? <AuthenticatedUserNavMenu /> : <UnifiedWalletButton />}</>
    <WalletConnect />
  );
};

export default NavbarButton;
