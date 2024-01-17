/*
 * The Type is comes from jupiter token API
 */

export type Token = {
  address: string;
  chainId: number;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
  tags: string[];
  isTokenInUse?: boolean;
  extensions?: {
    coingeckoId: string;
  };
};
