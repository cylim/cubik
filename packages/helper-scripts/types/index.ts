import { web3 } from '@coral-xyz/anchor';

export interface CloudflareResponseType {
  result: {
    id: string;
    filename: string;
    metadata: {
      key: string;
    };
    uploaded: Date;
    requireSignedURLs: boolean;
    variants: string[];
  };
  success: boolean;
  errors: any[];
  messages: any[];
}

export type PdaReturnType = [pda: web3.PublicKey, bump: number];
