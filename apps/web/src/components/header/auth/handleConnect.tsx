'use client';

import React, { useEffect, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { User, useUser } from '@/hooks/useUser';
import { getMessage } from '@/utils/auth/getMessage';
import { handleLogout } from '@/utils/auth/logout';
import {
  UnifiedWalletButton,
  useUnifiedWalletContext,
  useWallet,
} from '@/utils/wallet';
import { utils } from '@coral-xyz/anchor';

import { createMessage } from '@cubik/auth';
import { AuthVerifyReturn } from '@cubik/common-types';
import { Spinner, VerifyModal } from '@cubik/ui';

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

  const [isLoadingVerify, setIsLoadingVerify] = useState<boolean>(false);

  const handleVerify = async () => {
    setIsLoadingVerify(true);
    if (modalStatus === 'EXISTING_USER') {
      const nonce = Math.random().toString(36).substring(2, 15);
      const hash = await getMessage(nonce);
      if (!hash) {
        throw new Error('Hash is undefined');
      }
      const msg = createMessage(hash);
      const sigBuffer = await signMessage!(msg!);
      const sig = utils.bytes.bs58.encode(sigBuffer);
      const verifyRes = await fetch('/api/auth/verify', {
        method: 'POST',
        body: JSON.stringify({
          signature: sig,
          publicKey: publicKey,
        }),
        headers: {
          ['x-cubik-nonce']: nonce,
          ['Content-Type']: 'application/json',
        },
        cache: 'no-cache',
      });

      const verifyResponse = (await verifyRes.json()) as AuthVerifyReturn;
      if (verifyResponse.data) {
        const user = verifyResponse.user;

        if (!user) {
          disconnect();
          return onClose();
        }

        if (user) {
          setUser({
            id: user.id,
            mainWallet: user.mainWallet,
            profilePicture: user.profilePicture,
            username: user.username,
          });
        }
      } else {
        disconnect();
        onClose();
      }
      setIsLoadingVerify(false);
    } else {
      const nonce = Math.random().toString(36).substring(2, 15);
      const hash = await getMessage(nonce);
      if (!hash) {
        throw new Error('Message is undefined');
      }
      const msg = createMessage(hash);
      const sigBuffer = await signMessage!(msg!);
      const sig = utils.bytes.bs58.encode(sigBuffer);
      localStorage.setItem('wallet_sig', sig);
      localStorage.setItem('wallet_nonce', nonce);

      router.push('/create/profile');
      onClose();
    }
  };

  if (!connected && !publicKey && !user) {
    return <UnifiedWalletButton />;
  }
  if (connected && publicKey && !user && isLoading) {
    return (
      <>
        <VerifyModal
          address={publicKey.toBase58()}
          handleVerify={handleVerify}
          isLoading={isLoadingVerify}
          onClose={() => setIsLoadingVerify(false)}
          open={isOpen}
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
