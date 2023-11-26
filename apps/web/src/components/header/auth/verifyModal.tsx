'use client';

import React, { useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { User } from '@/hooks/useUser';
import { getMessage } from '@/utils/auth/getMessage';
import { utils } from '@coral-xyz/anchor';

import { createMessage } from '@cubik/auth';
import { AuthVerifyReturn } from '@cubik/common-types';
import { Button, Modal, ModalHeader, Spinner } from '@cubik/ui';

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
  return (
    <Modal dialogSize="md" onClose={onClose} open={isOpen}>
      <ModalHeader
        heading="Verify Wallet"
        onClose={onClose}
        RingSVG={
          <svg
            width="112"
            height="112"
            viewBox="0 0 112 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53 56.1403L55.0068 58.1449C55.9719 56.4572 57.3076 55.0107 58.9132 53.9143L59 53.855M65.25 56C65.25 54.7095 64.4559 53.5905 63.2737 52.9859C63.6888 51.7315 63.4541 50.3688 62.5427 49.4573C61.6312 48.5459 60.2685 48.3112 59.0141 48.7263C58.4185 47.5441 57.2905 46.75 56 46.75C54.7095 46.75 53.5905 47.5441 52.9949 48.7263C51.7315 48.3112 50.3688 48.5459 49.4573 49.4573C48.5459 50.3688 48.3202 51.7315 48.7354 52.9859C47.5532 53.5905 46.75 54.7095 46.75 56C46.75 57.2905 47.5532 58.4095 48.7354 59.0141C48.3202 60.2685 48.5459 61.6312 49.4573 62.5427C50.3688 63.4541 51.7315 63.6798 52.9859 63.2737C53.5905 64.4559 54.7095 65.25 56 65.25C57.2905 65.25 58.4185 64.4559 59.0141 63.2737C60.2685 63.6798 61.6312 63.4541 62.5427 62.5427C63.4541 61.6312 63.6888 60.2685 63.2737 59.0141C64.4559 58.4095 65.25 57.2905 65.25 56Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              opacity="0.01"
              x="0.5"
              y="0.5"
              width="111"
              height="111"
              rx="55.5"
              stroke="white"
            />
            <rect
              opacity="0.05"
              x="7.5"
              y="7.5"
              width="97"
              height="97"
              rx="48.5"
              stroke="white"
            />
            <rect
              opacity="0.1"
              x="17.5"
              y="17.5"
              width="77"
              height="77"
              rx="38.5"
              stroke="white"
            />
            <rect
              opacity="0.2"
              x="25.5"
              y="25.5"
              width="61"
              height="61"
              rx="30.5"
              stroke="white"
            />
            <rect
              opacity="0.6"
              x="35.5"
              y="35.5"
              width="41"
              height="41"
              rx="20.5"
              stroke="white"
            />
          </svg>
        }
        headingSize="md"
      />
      <div className="flex flex-col justify-start gap-4 p-4 text-base font-normal">
        <h1>
          Connection successful! Please sign a one-time transaction to verify
          your ownership.
        </h1>
        <ul className="list-disc px-4">
          <li>No Sol will be deducted</li>
          <li>This confirm you&apos;re the wallet owner</li>
        </ul>
        <div className="flex items-center justify-center gap-5">
          <Button
            size={'full'}
            onClick={onClose}
            variant={'secondary'}
          >
            Cancel
          </Button>
          <Button
            size={'full'}
            variant={'primary'}
            onClick={handleVerify}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Sign & Confirm'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
