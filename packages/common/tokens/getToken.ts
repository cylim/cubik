import { TokenList } from './index';

export const getToken = (address: string) => {
  return TokenList.find((e) => e.address === address);
};
