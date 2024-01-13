import React, { useState } from 'react';
import { useUser } from '@/hooks/store/user';
import { Button, Spinner } from '@/utils/ui';

import { AuthPayload } from '@cubik/common-types/src/admin';
import { useCubikWallet, useCubikWalletContext } from '@cubik/wallet';

import { UserInteraction } from './userInteraction';

interface AuthDecodeResponse {
  data: AuthPayload | null;
  error: null | string;
}
export const HandleConnect = () => {
  const { setShowModal } = useCubikWalletContext();
  const { publicKey, connected } = useCubikWallet();
  const { user } = useUser();

  if ((!connected && !publicKey) || !user) {
    return (
      <Button
        variant="primary"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Login
      </Button>
    );
  }
  if (connected && publicKey && !user) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return <UserInteraction />;
};
