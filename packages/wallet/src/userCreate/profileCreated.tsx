/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
// import Confetti from 'react-confetti';
import { UseFormReturn } from 'react-hook-form';

import { Avatar, Button, Icon, IconName, Text } from '@cubik/ui';
import { cn } from '@cubik/ui/lib/utils';

import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}
const ProfileCards = {
  sponsor: {
    bg: 'var(--color-surface-info-transparent)',
    border: 'var(--color-border-info-base)',
    color: 'var(--color-fg-info-base)',
    icon: 'bank',
    title: 'Sponsor a Event',
  },
  explore: {
    bg: 'var(--color-surface-alert-transparent)',
    border: 'var(--color-border-alert-base)',
    color: 'var(--color-fg-alert-base)',
    icon: 'compass',
    title: 'Explore Projects',
  },
  trustScore: {
    bg: 'var(--color-surface-positive-transparent)',
    border: 'var(--color-border-positive-base)',
    color: 'var(--color-fg-positive-base)',
    icon: 'userSecurity',
    title: 'Calculate Trust Score',
  },
  createProject: {
    bg: 'var(--color-surface-innovative-transparent)',
    border: 'var(--color-border-innovative-base)',
    color: 'var(--color-fg-innovative-base)',
    icon: 'folderAdd',
    title: 'Create new Project',
  },
};
const Card = ({ type }: { type: keyof typeof ProfileCards }) => {
  const { bg, border, color, icon, title } = ProfileCards[type];
  return (
    <>
      {/* @ts-ignore
      <Confetti
        className="w-full h-52"
        width={200}
        height={200}
        tweenDuration={100}
      /> */}
      <div
        style={{
          background: bg,
          border: '1px solid',
          borderColor: border,
          color: color,
          height: '100px',
          width: '187px',
        }}
        className={cn(
          'flex justify-between items-start flex-col rounded-lg p-4',
          border,
        )}
      >
        <div
          style={{
            alignItems: 'start',
            stroke: color,
          }}
          className="flex justify-center items-center"
        >
          <Icon name={icon as IconName} />
        </div>
        <Text className={cn('l2', 'text-[var(--color-fg-innovative-base)]')}>
          {title}
        </Text>
      </div>
    </>
  );
};
export const ProfileCreated = ({ userForm }: Props) => {
  return (
    <>
      <div
        style={{
          padding: '32px',
        }}
        className="flex justify-center items-center flex-col gap-5"
      >
        <Avatar
          src={userForm.watch('avatar')}
          variant={'circle'}
          size={'xl'}
          alt={userForm.watch('username')}
        />
        <div className="flex justify-center items-center flex-col">
          <Text className="h5-light" color={'primary'}>
            What would you like to do ?
          </Text>
          <Text className="b4-light text-center" color={'secondary'}>
            Your profile has been created successfully and you are ready to go.
          </Text>
        </div>
        <div className="flex gap-3 justify-center items-center w-full">
          {userForm.watch('userType') === 'ProjectOwner' && (
            <>
              <Card type="createProject" />
              <Card type="explore" />
            </>
          )}
          {userForm.watch('userType') === 'Contributor' && (
            <>
              <Card type="explore" />
              <Card type="trustScore" />
            </>
          )}
          {userForm.watch('userType') === 'Sponsor' && (
            <>
              <Card type="sponsor" />
              <Card type="explore" />
            </>
          )}
        </div>
        <Button variant={'link'} size={'xl'}>
          Decide Later
        </Button>
      </div>
    </>
  );
};
