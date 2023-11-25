'use client';

import React, { useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { User } from '@/hooks/useUser';
import { getMessage } from '@/utils/auth/getMessage';
import { utils } from '@coral-xyz/anchor';

import { createMessage } from '@cubik/auth';
import { AuthVerifyReturn } from '@cubik/common-types';

interface Props {
  publicKey?: string;
  disconnect: () => void;
  isOpen: boolean;
  onClose: () => void;
  status: 'NEW_USER' | 'EXISTING_USER';
  signMessage: ((message: Uint8Array) => Promise<Uint8Array>) | undefined;
  router: AppRouterInstance;
  setUser: (userData: User | null) => void;
}
export const VerifyModal = ({
  disconnect,
  isOpen,
  onClose,
  publicKey,
  signMessage,
  status,
  router,
  setUser,
}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleVerify = async () => {
    setIsLoading(true);
    if (status === 'EXISTING_USER') {
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
      setIsLoading(false);
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
  return <></>;
};
