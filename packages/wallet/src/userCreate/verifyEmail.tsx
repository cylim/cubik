import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import { logApi } from '@cubik/logger/src/axiom';
import {
  Button,
  Checkbox,
  HelperText,
  InputField,
  InputFieldContainer,
  InputLabel,
  Text,
} from '@cubik/ui';

import { sendEmail } from '../helpers/sendEmail';
import { useCubikWallet } from '../wallet';
import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}
export const VerifyEmail = ({ setUserCreateState, userForm }: Props) => {
  const { publicKey } = useCubikWallet();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSendEmail = async () => {
    try {
      setIsLoading(true);
      const email = userForm.getValues('email');
      const username = userForm.getValues('username');
      const res = await sendEmail(email, username, publicKey?.toBase58() || '');
      if (res) {
        setUserCreateState('email-otp');
      }
      return 'Success';
    } catch (e) {
      const error = e as Error;
      toast.error(error.message);
      logApi({
        message: error.message,
        body: error,
        source: 'VerifyEmail.tsx',
        level: 'error',
      });
    } finally {
      setIsLoading(false);
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
            <InputLabel id="email" isRequired={true}>
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
            onClick={onSendEmail}
            isLoading={isLoading}
          >
            Confirm Email
          </Button>
          <Button
            onClick={() => setUserCreateState('signTx')}
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
