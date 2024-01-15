import { tokenPrice } from 'utils/price';

import { getValidToken } from '@cubik/common/tokens/getValidTokenList';

interface TokenPrice {
  id: string;
  mintSymbol: string;
  vsToken: string;
  vsTokenSymbol: string;
  price: number;
}
export const syncPrice = async (): Promise<(TokenPrice | null)[]> => {
  try {
    const tokenList = getValidToken();
    const priceList: Promise<TokenPrice | null>[] = [];

    tokenList.forEach(async (token) => {
      const price = tokenPrice(token.address);
      priceList.push(price);
    });
    const res = await Promise.all(priceList);
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
};
