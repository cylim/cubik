import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}
export const EmailOtp = ({}: Props) => {
  return <div>EmailOtp</div>;
};
