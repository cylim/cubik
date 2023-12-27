'use client';

/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

import {
  Avatar,
  Button,
  Checkbox,
  InputField,
  InputFieldContainer,
  InputLabel,
  Text,
} from '@cubik/ui';

import { searchUsername } from '../helpers/searchUsername';
import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}
export const CreateUsername = ({ userForm, setUserCreateState }: Props) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  useEffect(() => {
    const search = async () => {
      if (userForm.watch('username').length < 3) {
        return;
      }
      const res = await searchUsername(userForm.watch('username'));
      setIsAvailable(res.usernameAvailable);
    };
    search();
  }, [userForm.watch('username')]);
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
        <div className="pointer-events-auto flex justify-start place-items-end gap-4 w-full">
          <div className="h-full flex justify-center items-center">
            <Avatar
              variant={'circle'}
              size={'lg'}
              src={userForm.watch('avatar')}
              alt={userForm.watch('username')}
              iconName="user"
            />
          </div>
          <div className="w-full">
            <InputLabel id="username" isRequired>
              Choose a name
            </InputLabel>
            <InputFieldContainer isError={!isAvailable} variant="sm">
              <InputField
                onChange={(e) => {
                  userForm.setValue('username', e.currentTarget.value);
                }}
              />
            </InputFieldContainer>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <Text color={'primary'} className="l1-light">
            You are a
          </Text>
          <div className="flex justify-start pointer-events-auto items-center md:flex-row">
            <div className="flex justify-center items-center">
              <Checkbox
                checked={userForm.watch('userType') === 'Contributor'}
                defaultChecked
                onCheckedChange={(e) => {
                  if (e === true) userForm.setValue('userType', 'Contributor');
                }}
              />
              <Text color={'primary'} className="l2-light">
                Contributor
              </Text>
            </div>
            <div className="flex justify-center items-center">
              <Checkbox
                checked={userForm.watch('userType') === 'ProjectOwner'}
                onCheckedChange={(e) => {
                  if (e === true) userForm.setValue('userType', 'ProjectOwner');
                }}
              />
              <Text color={'primary'} className="l2-light">
                Project Creator
              </Text>
            </div>
            <div className="flex justify-center items-center">
              <Checkbox
                onCheckedChange={(e) => {
                  if (e === true) userForm.setValue('userType', 'Sponsor');
                }}
                checked={userForm.watch('userType') === 'Sponsor'}
              />
              <Text color={'primary'} className="l2-light">
                Event Sponsor
              </Text>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <Button
            variant={'primary'}
            size={'md'}
            className="w-full"
            rightIconName="arrowRight"
          >
            Lets go
          </Button>
          <Button
            onClick={() => setUserCreateState('verify-email')}
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
