import React from 'react';

import { CreateUsername } from './createUsername';
import { EmailOtp } from './emailOtp';
import { ProfileCreated } from './profileCreated';
import { VerifyEmail } from './verifyEmail';

export type UserCreateSteps =
  | 'create-username'
  | 'verify-email'
  | 'email-otp'
  | 'profile-created';
export const UserCreate = () => {
  const [userCreateState, setUserCreateState] =
    React.useState<UserCreateSteps>('create-username');

  if (userCreateState === 'verify-email') {
    return (
      <VerifyEmail
        setUserCreateState={setUserCreateState}
        userCreateState={userCreateState}
      />
    );
  }
  if (userCreateState === 'email-otp') {
    return (
      <EmailOtp
        setUserCreateState={setUserCreateState}
        userCreateState={userCreateState}
      />
    );
  }
  if (userCreateState === 'profile-created') {
    return (
      <ProfileCreated
        setUserCreateState={setUserCreateState}
        userCreateState={userCreateState}
      />
    );
  }

  return (
    <CreateUsername
      setUserCreateState={setUserCreateState}
      userCreateState={userCreateState}
    />
  );
};
