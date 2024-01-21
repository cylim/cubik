/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';

import '../globals.css';

import { Wallet, web3 } from '@coral-xyz/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import {
  generateDefaultUserName,
  generateUserBackupImage,
} from '@cubik/common';
import { ProfileNftType } from '@cubik/common-types';
import { UserType } from '@cubik/database';

import { connection, cubikInstance } from '../authentication/contract';
import { submitUser } from '../helpers/submitUser';
import { useCubikWallet } from '../wallet';
import { CreateUsername } from './createUsername';
import { EmailOtp } from './emailOtp';
import { ProfileCreated } from './profileCreated';
import { SignTx } from './signTx';
import { VerifyEmail } from './verifyEmail';

export type UserCreateSteps =
  | 'create-username'
  | 'verify-email'
  | 'email-otp'
  | 'signTx'
  | 'profile-created';

export type UserCreateForm = {
  username: string;
  email: string;
  avatar: string;
  nft: ProfileNftType | undefined;
  userType: UserType;
  isReceiveEmails: boolean;
};
export const UserCreate = () => {
  const [userCreateState, setUserCreateState] =
    React.useState<UserCreateSteps>('create-username');
  const anchorWallet = useAnchorWallet();
  const csdk = cubikInstance(anchorWallet as Wallet);
  const { publicKey, connected, disconnect } = useCubikWallet();
  const [createUserError, setCreateUserError] = useState<Error | null>(null);
  const [createUserLoading, setCreateUserLoading] = useState<boolean>(false);

  const userInfoForm = useForm<UserCreateForm>({
    defaultValues: {
      avatar: generateUserBackupImage(),
      email: '',
      username: generateDefaultUserName(publicKey),
      userType: UserType.Contributor,
      isReceiveEmails: true,
      nft: undefined,
    },
  });

  const onSubmit = async () => {
    try {
      setCreateUserLoading(true);
      const [userPDA] = csdk.user.getPDA(
        anchorWallet?.publicKey as web3.PublicKey,
      );
      const ix = await csdk.user.create(
        {
          username: userInfoForm.watch('username'),
        },
        {
          authority: publicKey as web3.PublicKey,
          userAccount: userPDA,
          systemProgram: web3.SystemProgram.programId,
        },
      );
      const tx = new web3.Transaction().add(ix);
      const { blockhash } = await connection.getLatestBlockhash();
      tx.recentBlockhash = blockhash;
      tx.feePayer = publicKey as web3.PublicKey;
      const signTx = await anchorWallet?.signTransaction(tx);
      if (!signTx) return;
      const serialized_transaction = signTx.serialize();
      const sig = await connection.sendRawTransaction(serialized_transaction, {
        preflightCommitment: 'confirmed',
      });

      const submitUserRes = await submitUser({
        email: userInfoForm.watch('email'),
        username: userInfoForm.watch('username'),
        profilePicture: userInfoForm.watch('avatar'),
        type: userInfoForm.watch('userType'),
        isReceivingUpdate: userInfoForm.watch('isReceiveEmails'),
        sig: sig,
        profileNft: undefined,
      });
      if (!submitUserRes.status) {
        throw new Error(submitUserRes.error || 'Error submitting user');
      }
      toast.success('User created successfully');
      setUserCreateState('profile-created');
    } catch (e) {
      const error = e as Error;
      console.log(error);
      setCreateUserError(error);
    } finally {
      setCreateUserLoading(false);
    }
  };

  if (userCreateState === 'verify-email') {
    return (
      <VerifyEmail
        userForm={userInfoForm}
        setUserCreateState={setUserCreateState}
        userCreateState={userCreateState}
      />
    );
  }
  if (userCreateState === 'email-otp') {
    return (
      <EmailOtp
        userForm={userInfoForm}
        setUserCreateState={setUserCreateState}
        userCreateState={userCreateState}
      />
    );
  }
  if (userCreateState === 'signTx') {
    return (
      <SignTx
        error={createUserError}
        onRetry={onSubmit}
        isLoading={createUserLoading}
      />
    );
  }
  if (userCreateState === 'profile-created') {
    return (
      <ProfileCreated
        userForm={userInfoForm}
        setUserCreateState={setUserCreateState}
        userCreateState={userCreateState}
      />
    );
  }

  return (
    <>
      <CreateUsername
        userForm={userInfoForm}
        setUserCreateState={setUserCreateState}
        userCreateState={userCreateState}
      />
    </>
  );
};
