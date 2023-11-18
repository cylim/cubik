import { InstructionAccount, TransactionAccount } from '@sqds/sdk';

export type VaultTx = {
  tx: TransactionAccount;
  ix: InstructionAccount;
};
