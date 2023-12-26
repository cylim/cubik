import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}
export const CreateUsername = ({}: Props) => {
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
            Welcome to Cubik
          </Text>
          <Text className="b3-light text-[var(--color-fg-primary-subdued)]">
            Complete your profile. You can always edit this info later in the
            settings of your app
          </Text>
        </div>
        <div>{/*  choose name */}</div>
        <div>{/* type */}</div>
        <div className="flex gap-3 flex-col">
          <Button
            variant={'primary'}
            size={'md'}
            className="w-full"
            rightIconName="arrowRight"
          >
            Lets go
          </Button>
          <Button variant={'link'} size={'md'} className="w-full">
            Skip for now
          </Button>
        </div>
      </div>
    </>
  );
};
