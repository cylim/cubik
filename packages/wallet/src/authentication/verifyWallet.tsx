'use client';

import React from 'react';

import { formatAddress } from '@cubik/common';
import { Alert, Avatar, Button, Tag, TagLabel, Text } from '@cubik/ui';

import { useCubikWallet } from '../wallet';

interface Props {
  onClose: () => void;
  isLoading: boolean;
  handleVerify: () => void;
  address: string;
}
export const VerifyWallet = ({
  onClose,
  isLoading,
  handleVerify,
  address,
}: Props) => {
  const { wallet } = useCubikWallet();
  return (
    <div className="p-6">
      <div
        style={{
          marginBottom: '1rem',
          display: wallet ? 'block' : 'none',
        }}
      >
        {wallet && (
          <Avatar
            size={'xl'}
            src={wallet?.adapter.icon}
            alt={wallet.adapter.name}
          />
        )}
      </div>
      <div className="flex justify-start  items-center gap-3 ">
        <Text className="h5" color={'primary'}>
          Wallet Connected
        </Text>
        <Tag border={false} color={'orange'} variant="subtle">
          <TagLabel>{formatAddress(address)}</TagLabel>
        </Tag>
      </div>
      <div className="flex flex-col justify-start gap-4 mt-4  text-base font-normal">
        <Text className="l2-light" color={'secondary'}>
          Connection successful! Please sign a one-time message to verify your
          ownership.
        </Text>
        <Text className="l2-light" color={'secondary'}>
          <ul className="list-disc px-4">
            <li>No Sol will be deducted</li>
            <li>This confirm you&apos;re the wallet owner</li>
          </ul>
        </Text>
        <Alert
          closeIcon={false}
          type={'inline'}
          variant={'info'}
          bgColor={'blue'}
          color={'blue'}
          content="Cubik uses this signature to verify the ownership of this solana address."
        />
        <div className="pointer-events-auto flex items-center justify-center gap-5">
          <Button
            className="w-full"
            size={'md'}
            onClick={onClose}
            variant={'secondary'}
          >
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            size={'md'}
            className="w-full"
            variant={'primary'}
            onClick={handleVerify}
          >
            Sign & Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
