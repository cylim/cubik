import { tokenCache, toMilliseconds } from 'utils/cache';
import { tokenPrice } from 'utils/price';

import { getValidToken } from '@cubik/common/tokens/getValidTokenList';

import logger from '../logger';

export interface TokenPrice {
  id: string;
  mintSymbol: string;
  vsToken: string;
  vsTokenSymbol: string;
  price: number;
}
export const syncPrice = async (): Promise<(TokenPrice | null)[]> => {
  try {
    const cached = tokenCache.get('pricelist');
    if (cached) {
      logger.debug('cache hit');
      return cached;
    }
    if (!cached) {
      logger.debug('cache miss');
      const tokenList = getValidToken();
      const priceList: Promise<TokenPrice | null>[] = [];

      tokenList.forEach(async (token) => {
        const price = tokenPrice(token.address);
        priceList.push(price);
      });
      const tokenPriceList = await Promise.all(priceList);
      tokenCache.set('pricelist', tokenPriceList, toMilliseconds(0, 5, 0));
      return tokenPriceList;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
