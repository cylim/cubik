import React from 'react';

import { UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
}
export const CreateUsername = ({}: Props) => {
  return <div>CreateUsername</div>;
};
