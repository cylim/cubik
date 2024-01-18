import axios from 'axios';
import type { TokenPriceResponse } from 'types';
import pThrottle from 'p-throttle';
import logger from '../services/logger';

const throttle = pThrottle({
  limit: 2,
  interval: 1000
});

const throttledRequest = throttle(async token => {
  logger.debug('throttledRequest', [
    token
  ])
  const response = await axios.get<TokenPriceResponse>(
    `https://price.jup.ag/v4/price?ids=${token}`,
  );
  return response.data.data[token];
});

export const tokenPrice = async (token: string) => {
  try {
    return await throttledRequest(token);
  } catch (error) {
    console.error(error);
    return null;
  }
};
