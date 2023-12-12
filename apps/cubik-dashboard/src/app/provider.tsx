'use client';

import React, { useMemo, useState } from 'react';
import { WalletProvider } from '@/providers/wallet';
import { web3 } from '@coral-xyz/anchor';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

require('@solana/wallet-adapter-react-ui/styles.css');
interface Props {
  children: React.JSX.Element;
}
export const Provider = ({ children }: Props) => {
  const [client] = useState(() => new QueryClient());

  return (
    <>
      <WalletProvider>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </WalletProvider>
    </>
  );
};
