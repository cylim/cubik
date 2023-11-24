import { BorshCoder, web3 } from '@coral-xyz/anchor';
import { IDL } from 'src/types/cubik_contract_v2';

const coder = new BorshCoder(IDL);

export const instructionsParser = (instructions: any[]) => {
  const parsedData: any[] = [];
  for (const instruction of instructions) {
    const ixData = coder.instruction.decode(instruction.data, 'base58');

    if (!ixData) {
      continue;
    }

    const accountMetas = instruction.accounts.map((account: any) => {
      return {
        pubkey: new web3.PublicKey(account),
      };
    });
    const accountsData = coder.instruction.format(ixData, accountMetas) as any;
    if (!accountsData) {
      continue;
    }

    parsedData.push({
      ixData,
      accountsData,
    });
  }
  return parsedData;
};
