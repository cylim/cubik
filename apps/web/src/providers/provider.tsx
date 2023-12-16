'use client';

import React, { ReactNode, useState } from 'react';
import { WalletProvider } from '@/providers/wallet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from '@cubik/ui';

interface Props {
  children: ReactNode;
}
export const Provider = ({ children }: Props) => {
  const client = new QueryClient();
  return (
    <ThemeProvider>
      <WalletProvider>
        <QueryClientProvider client={client}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </WalletProvider>
    </ThemeProvider>
  );
};
