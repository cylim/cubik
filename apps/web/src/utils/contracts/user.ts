import { PROGRAM_ID } from '@/utils/contracts/constant';
import * as anchor from '@coral-xyz/anchor';
import { createUser } from '@cubik-so/sdk';

export const getUserPDA = (
  wallet: anchor.web3.PublicKey,
): anchor.web3.PublicKey => {
  return anchor.web3.PublicKey.createProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('user'), wallet.toBuffer()],
    PROGRAM_ID,
  );
};
