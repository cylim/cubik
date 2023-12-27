import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import {
  Button,
  Checkbox,
  HelperText,
  InputField,
  InputFieldContainer,
  InputLabel,
  Text,
} from '@cubik/ui';

import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}
export const VerifyEmail = ({ setUserCreateState, userForm }: Props) => {
  return (
    <>
      <div
        className="flex flex-col gap-8 pointer-events-auto"
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
            your favorite projects.
          </Text>
        </div>
        <div>
          <div className="w-full">
            <InputLabel id="email" isRequired>
              Email Address
            </InputLabel>
            <InputFieldContainer
              isError={userForm.formState.errors.email ? true : false}
              variant="sm"
            >
              <InputField
                placeholder="someone@gmail.com"
                onChange={(e) => {
                  userForm.setValue('email', e.currentTarget.value);
                }}
              />
            </InputFieldContainer>
            {userForm.formState.errors.email && (
              <HelperText variant={'error'} fontSize={'md'}>
                {userForm.formState.errors.email.message}
              </HelperText>
            )}
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <Checkbox />
          <Text color={'primary'} className="l2-light">
            Receive Important updates from Cubik
          </Text>
        </div>
        <div className="flex gap-3 flex-col">
          <Button
            variant={'primary'}
            size={'md'}
            className="w-full"
            // rightIconName=""
          >
            Confirm Email
          </Button>
          <Button
            onClick={() => setUserCreateState('email-otp')}
            variant={'link'}
            size={'md'}
            className="w-full"
          >
            Skip for now
          </Button>
        </div>
      </div>
    </>
  );
};
