'use client';

import React, { useState } from 'react';
import { env } from '@/env.mjs';
import { usePrice } from '@/hooks/store/usePrice';
import { WalletProvider } from '@/providers/wallet';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { getValidTokenPrice } from '@cubik/common/solana';
import { ThemeProvider } from '@cubik/ui';

// require('@solana/wallet-adapter-react-ui/styles.css');

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
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </WalletProvider>
    </ThemeProvider>
  );
};

const PriceProvider = ({ children }: Props) => {
  const { setPrices } = usePrice();
  useQuery({
    queryKey: ['price'],
    refetchInterval: 100000 * 5,
    queryFn: async () => {
      const price = await getValidTokenPrice(env.NEXT_PUBLIC_BACKEND);
      setPrices(price);
    },
  });
  return children;
};
