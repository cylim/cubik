'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import { handleLogout } from '@/utils/auth/logout';
import {
  UnifiedWalletButton,
  useUnifiedWalletContext,
  useWallet,
} from '@/utils/wallet';

import { Button, Spinner } from '@cubik/ui';

// import UserNavbarMenuButton from '../cta/user-navbar-menu';

import { VerifyModal } from './verifyModal';

export const WalletConnect = () => {
  const { connected, publicKey, disconnect, signMessage } = useWallet();
  const { showModal, setShowModal } = useUnifiedWalletContext();
  const [modalStatus, setModalStatus] = useState<'NEW_USER' | 'EXISTING_USER'>(
    'NEW_USER',
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { setUser, user } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const connect = async () => {
      if (connected && publicKey && !user) {
        try {
          setIsLoading(true);
          const res = await fetch('/api/auth/check', {
            method: 'POST',
            body: JSON.stringify({
              wallet: publicKey.toBase58(),
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            cache: 'no-cache',
          });
          const checkResponse = await res.json();

          if (checkResponse.data?.type === 'USER_FOUND') {
            // ********* Create token with verify message *********
            setModalStatus('EXISTING_USER');
            onOpen();
            return;
          }
          if (
            checkResponse.data?.type === 'AUTHENTICATED_USER' &&
            checkResponse.data.user
          ) {
            // ********* Set User *********
            const user = checkResponse.data.user;

            if (user) {
              setUser({
                id: user.id,
                mainWallet: user.mainWallet,
                profilePicture: user.profilePicture,
                username: user.username,
              });
              setIsLoading(false);
            } else {
              disconnect();
              await handleLogout();
              throw new Error('Failed to decode token');
            }
            return;
          }

          if (
            checkResponse.data?.type === 'NEW_WALLET' ||
            checkResponse.data?.type === 'EXISTING_WALLET'
          ) {
            // ********* Take sign message &&  Create User flow ************
            setModalStatus('NEW_USER');
            onOpen();
            return;
          }

          throw new Error('Failed to connect');
        } catch (error) {
          console.log(error);
          return setIsLoading(false);
        }
      }
    };
    connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  if (!connected && !publicKey && !user) {
    return <UnifiedWalletButton />;
  }
  if (connected && publicKey && !user && isLoading) {
    return (
      <>
        <VerifyModal
          setUser={setUser}
          router={router}
          signMessage={signMessage}
          disconnect={disconnect}
          isOpen={isOpen}
          onClose={onClose}
          status={modalStatus}
          publicKey={publicKey.toBase58()}
        />
        <Spinner
          onClick={() => {
            onClose();
            disconnect();
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
