import React from 'react';

import { useWallet } from '@cubik/wallet-connect';

const AuthenticatedUserNavMenu = () => {
  const { publicKey } = useWallet();

  return <div>AuthenticatedUserNavMenu</div>;
};

export default AuthenticatedUserNavMenu;
