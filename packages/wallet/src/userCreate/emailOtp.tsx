'use client';

/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import PinInput from 'react-pin-input';
import { toast } from 'sonner';

import dayjs from '@cubik/dayjs';
import { Button, Icon, Text } from '@cubik/ui';

import { checkOTP } from '../helpers/checkOTP';
import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}
export const EmailOtp = ({ userForm, setUserCreateState }: Props) => {
  const countdownDuration = 2 * 60 * 1000; // 2 minutes
  const [remainingTime, setRemainingTime] = useState(countdownDuration);

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(interval); // Clear interval when countdown reaches zero
          return 0;
        }
        console.log('newTime', newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  const onComplete = async (value: string) => {
    try {
      const res = await checkOTP(value, userForm.watch('email'));
      if (res) {
        setUserCreateState('signTx');
        return true;
      }
      return false;
    } catch (e) {
      const error = e as Error;
      toast.error(error.message);
      return false;
    }
  };

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
            <Icon className="w-6 h-6" name="arrowLeft" />
          </div>
          <Text color={'primary'} className="h4">
            Enter Code
          </Text>
          <Text color={'secondary'} className="b3-light">
            Please enter the 6 digit code we sent to {userForm.watch('email')}
          </Text>
        </div>
        <PinInput
          length={6}
          initialValue=""
          secretDelay={100}
          secret
          type="numeric"
          inputMode="number"
          inputStyle={{
            borderColor: 'var(--form-input-border-default)',
            backgroundColor: 'var(--input-surface-default)',
            color: 'var(--color-fg-primary)',
            border: '1px solid',
            borderRadius: '8px',
          }}
          inputFocusStyle={{
            borderColor: 'var(--form-input-border-focused)',
            backgroundColor: 'var(--input-surface-focused)',
            color: 'var(--color-fg-primary)',
            border: '1px solid',
          }}
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            pointerEvents: 'auto',
          }}
          onComplete={(value) => {
            toast.promise(
              async () => {
                const res = await onComplete(value);
                if (!res) {
                  throw new Error('Code verification failed');
                }
              },
              {
                loading: 'Verifying code...',
                success: 'Code verified',
                error: 'Code verification failed',
              },
            );
          }}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
        <div className="flex justify-between items-center">
          <Button size={'sm'} variant={'outline'} rightIconName="announcement">
            Paste Code
          </Button>
          <Text color={'secondary'} className="l3">
            Resend Code in {dayjs.duration(remainingTime).format('mm:ss')}
          </Text>
        </div>
      </div>
    </>
  );
};
