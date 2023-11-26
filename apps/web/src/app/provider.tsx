'use client';

import React, { ReactNode } from 'react';
import { WalletProvider } from '@/components/context/wallet';

interface Props {
  children: ReactNode;
}
export const Provider = ({ children }: Props) => {
  return <WalletProvider>{children}</WalletProvider>;
};
