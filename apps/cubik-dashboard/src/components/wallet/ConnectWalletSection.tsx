'use client';

import React from 'react';

import { Button, EmptyState, SubHead } from '@cubik/ui';
import { useUnifiedWalletContext } from '@cubik/wallet-connect';

export const ConnectWalletSection = () => {
  const { setShowModal, showModal } = useUnifiedWalletContext();
  return (
    <EmptyState
      title={'Connect Wallet to Get In'}
      description={
        'To access this dashboard connect your wallet and verify your status.'
      }
      icon={'lock'}
    >
      <Button
        onClick={() => setShowModal(true)}
        isLoading={showModal}
        className="w-full md:w-fit"
        variant="outline"
      >
        Connect Wallet
      </Button>
    </EmptyState>
  );
};
