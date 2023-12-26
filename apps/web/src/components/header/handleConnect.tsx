'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import { handleLogout } from '@/utils/auth/logout';

import { Button, Spinner } from '@cubik/ui';
import { useCubikWallet, useCubikWalletContext } from '@cubik/wallet';

export const WalletConnect = () => {
  const { connected, publicKey, disconnect, signMessage } = useCubikWallet();
  const { showModal, setShowModal } = useCubikWalletContext();

  const { setUser, user } = useUser();

  if (!connected && !publicKey && !user) {
    return <Button onClick={() => setShowModal(true)}>Connect Wallet</Button>;
  }
  if (connected && publicKey && !user) {
    return (
      <>
        <Spinner
          onClick={() => {
            disconnect();
            setShowModal(false);
          }}
        />
      </>
    );
  }

  return (
    <>
      <div
        onClick={async () => {
          setUser(null);
          await disconnect();
          await handleLogout();
        }}
        className="cursor-pointer text-white"
      >
        {user?.username}
      </div>
      {/* <UserNavbarMenuButton /> */}
    </>
  );
};
