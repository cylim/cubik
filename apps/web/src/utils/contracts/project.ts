import { PROGRAM_ID } from '@/utils/contracts/constant';
import * as anchor from '@coral-xyz/anchor';

export const getProjectPDA = (
  create_key: anchor.web3.PublicKey,
  counter: number,
): anchor.web3.PublicKey => {
  return anchor.web3.PublicKey.createProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('project'),
      create_key.toBuffer(),
      new anchor.BN(counter).toArrayLike(Buffer, 'le', 2),
    ],
    PROGRAM_ID,
  );
};
