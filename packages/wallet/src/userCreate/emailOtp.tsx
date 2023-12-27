import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Button, Icon, Text } from '@cubik/ui';

import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}
export const EmailOtp = ({ userForm, setUserCreateState }: Props) => {
  return (
    <>
      <div
        className="flex flex-col gap-8 pointer-events-auto"
        style={{
          padding: '32px',
        }}
      >
        <div className="flex flex-col gap-3">
          <div
            onClick={() => setUserCreateState('verify-email')}
            className="stroke-[var(--modal-header-cancel-icon)] cursor-pointer"
          >
            <Icon name="arrowLeft" />
          </div>
          <Text color={'primary'} className="h4">
            Enter Code
          </Text>
          <Text color={'secondary'} className="b3-light">
            Please enter the 6 digit code we sent to {userForm.watch('email')}
          </Text>
        </div>
        <div className="flex justify-between items-center">
          <Button size={'sm'} variant={'outline'} rightIconName="announcement">
            Paste Code
          </Button>
          <Text color={'secondary'} className="l3">
            Resend Code in 56s
          </Text>
        </div>
      </div>
    </>
  );
};
