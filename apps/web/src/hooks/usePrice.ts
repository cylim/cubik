import { create } from 'zustand';

import { APIPrice } from '@cubik/common/solana';

interface PriceState {
  prices: APIPrice[];
  setPrices: (prices: APIPrice[]) => void;
  getPrice: (address: string) => number;
}

export const usePrice = create<PriceState>()((set, get) => ({
  setPrices: (prices) => {
    return set({
      prices,
    });
  },
  prices: [],
  getPrice: (address) => {
    const prices = get().prices;
    const priceObj = prices.find((price) => price.id === address);
    return priceObj?.price || 0;
  },
}));
