import React from 'react';

import { UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
}
export const VerifyEmail = ({}: Props) => {
  return <div>VerifyEmail</div>;
};
