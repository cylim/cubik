'use client';

import React, { useState } from 'react';
import { WalletProvider } from '@/providers/wallet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from '@cubik/ui';

require('@solana/wallet-adapter-react-ui/styles.css');

interface Props {
  children: React.JSX.Element;
}

export const Provider = ({ children }: Props) => {
  const [client] = useState(() => new QueryClient());

  return (
    <ThemeProvider>
      <WalletProvider>
        <QueryClientProvider client={client}>
          {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </WalletProvider>
    </ThemeProvider>
  );
};
