'use client';

import React, { useState } from 'react';
import { env } from '@/env.mjs';
import { usePrice } from '@/hooks/usePrice';
import { WalletProvider } from '@/providers/wallet';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import { getValidTokenPrice } from '@cubik/common/solana';
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from '@cubik/ui';

interface Props {
  children: React.JSX.Element;
}

export const Provider = ({ children }: Props) => {
  const [client] = useState(() => new QueryClient());

  return (
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <PriceProvider>
          <WalletProvider>{children}</WalletProvider>
        </PriceProvider>
      </QueryClientProvider>
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
