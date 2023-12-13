'use client';

import React from 'react';

import { Button, EmptyState, SubHead } from '@cubik/ui';
import { useUnifiedWalletContext } from '@cubik/wallet-connect';

export const ConnectWalletSection = () => {
  const { setShowModal, showModal } = useUnifiedWalletContext();
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-[32px] pt-12">
      <SubHead heading="Grants Rounds" className="!h5" />
      <div className="rounded-lg border border-[var(--empty-state-border-secondary)] bg-[var(--empty-state-surface-primary)]">
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
      </div>
    </div>
  );
};
