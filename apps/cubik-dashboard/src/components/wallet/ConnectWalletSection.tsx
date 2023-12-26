'use client';

import React from 'react';

import { Button, EmptyState, SubHead } from '@cubik/ui';
import { useCubikWalletContext } from '@cubik/wallet';

export const ConnectWalletSection = () => {
  const { setShowModal, showModal } = useCubikWalletContext();
  return (
    <EmptyState
      title={'Connect Wallet to Get In'}
      description={
        'To access this dashboard connect your wallet and verify your status.'
      }
      icon={'lock'}
      border
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
