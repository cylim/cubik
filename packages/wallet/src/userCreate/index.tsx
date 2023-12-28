/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';

import '../globals.css';

import { useForm } from 'react-hook-form';

import {
  generateDefaultUserName,
  generateUserBackupImage,
} from '@cubik/common';
import { UserType } from '@cubik/database';

import { useCubikWallet } from '../wallet';
import { CreateUsername } from './createUsername';
import { EmailOtp } from './emailOtp';
import { ProfileCreated } from './profileCreated';
import { VerifyEmail } from './verifyEmail';

export type UserCreateSteps =
  | 'create-username'
  | 'verify-email'
  | 'email-otp'
  | 'profile-created';

export type UserCreateForm = {
  username: string;
  email: string;
  avatar: string;
  nft?: string;
  userType: UserType;
  isReceiveEmails: boolean;
};
export const UserCreate = () => {
  const [userCreateState, setUserCreateState] =
    React.useState<UserCreateSteps>('create-username');

  const { publicKey, connected, disconnect } = useCubikWallet();
  const userInfoForm = useForm<UserCreateForm>({
    defaultValues: {
      avatar: generateUserBackupImage(),
      email: '',
      username: generateDefaultUserName(publicKey),
      userType: UserType.Contributor,
      isReceiveEmails: true,
    },
  });

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
    <CreateUsername
      userForm={userInfoForm}
      setUserCreateState={setUserCreateState}
      userCreateState={userCreateState}
    />
  );
};
