'use server';

import { ProfileNftType } from '@cubik/common-types';
import { PROGRAM_ID } from '@cubik/common/constants';
import { prisma, UserType } from '@cubik/database';
import { logApi } from '@cubik/logger/src';

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
    const parseTx = await connection.getParsedTransaction(args.sig, {
      commitment: 'confirmed',
    });

    const parseProgramId = parseTx?.transaction.message.instructions
      .reverse()[0]
      .programId.toBase58();

    logApi({
      message: 'submitUser',
      body: {
        parseProgramId: parseProgramId,
        PROGRAM_ID: PROGRAM_ID,
        args: args,
      },
      level: 'info',
      source: 'submitUser',
    });

    console.log(parseProgramId, PROGRAM_ID, parseProgramId === PROGRAM_ID);

    if (parseProgramId !== PROGRAM_ID) {
      throw new Error('Invalid Transaction');
    }

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
    logApi({
      message: 'Error SubmitUser ',
      body: {
        args: args,
      },
      level: 'error',
      source: 'Error submitUser',
    });
    return {
      status: false,
      error: error.message,
    };
  }
};
