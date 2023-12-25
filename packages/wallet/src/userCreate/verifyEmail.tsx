import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}
export const VerifyEmail = ({}: Props) => {
  return (
    <>
      <div
        className="flex flex-col gap-8"
        style={{
          padding: '32px',
        }}
      >
        <div className="flex gap-3 flex-col">
          <Text className="h4" color={'primary'}>
            Almost there
          </Text>
          <Text className="b3-light text-[var(--color-fg-primary-subdued)]">
            Verify your email with Cubik and never miss any updates from us on
            your favourite projects.
          </Text>
        </div>
        <div>{/*  Enter Email */}</div>
        <div>{/* Receive Update  */}</div>
        <div className="flex gap-3 flex-col">
          <Button
            variant={'primary'}
            size={'md'}
            className="w-full"
            // rightIconName="arrow"
          >
            Confirm Email
          </Button>
          <Button variant={'link'} size={'md'} className="w-full">
            Skip for now
          </Button>
        </div>
      </div>
    </>
  );
};
