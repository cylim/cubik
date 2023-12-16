'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { WalletProvider } from '@/providers/wallet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCookies } from 'next-client-cookies';

import { ThemeProvider } from '@cubik/ui';

require('@solana/wallet-adapter-react-ui/styles.css');

interface Props {
  children: React.JSX.Element;
}

export const Provider = ({ children }: Props) => {
  const [client] = useState(() => new QueryClient());
  const cookies = useCookies();
  const router = useRouter();

  // useEffect(() => {
  //   router.refresh();
  // }, [cookies.get('authToken'), router]);

  return (
    <ThemeProvider>
      <WalletProvider>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </WalletProvider>
    </ThemeProvider>
  );
};
