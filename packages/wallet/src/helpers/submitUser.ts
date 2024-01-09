'use server';

import { ProfileNftType } from '@cubik/common-types';
import { UserType } from '@cubik/database';

import { connection } from '../authentication/contract';

interface SubmitUserArgs {
  username: string;
  isReceivingUpdate: boolean;
  sig: string;
  profilePicture: string;
  profileNft: ProfileNftType | undefined;
  type: UserType;
  email: string;
}
export const submitUser = async (args: SubmitUserArgs) => {
  try {
    await connection.getParsedTransaction(args.sig, {
      commitment: 'confirmed',
    });

    // const parseProgramId =
    //   parseTx?.transaction.message.instructions.reverse()[0];

    // console.log(
    //   parseProgramId?.programId === new web3.PublicKey(PROGRAM_ID),
    //   '---',
    // );
    // if (parseProgramId !== PROGRAM_ID) {
    //   throw new Error('Invalid Transaction');
    // }

    await prisma.user.create({
      data: {
        mainWallet: args.username,
        tx: args.sig,
        profilePicture: args.profilePicture,
        profileNft: args.profileNft,
        username: args.username,
        isEmailConfirmed: true,
        isReceivingUpdate: args.isReceivingUpdate,
        type: args.type,
        email: args.email,
        isMigrated: true,
        isActive: true,
        isArchive: false,
      },
    });

    return {
      status: true,
      error: null,
    };
  } catch (e) {
    const error = e as Error;
    return {
      status: false,
      error: error.message,
    };
  }
};
