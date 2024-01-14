import { TokenList } from './index';

export const getValidToken = () => {
  return TokenList.filter((e) => e.isTokenInUse === true);
};
