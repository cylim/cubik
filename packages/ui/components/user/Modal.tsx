import React, { useState } from 'react';

import UnifiedWalletModal from '@cubik/wallet-connect/components/Modal/modal';

import { Modal, ModalHeader } from '../ui/Modal';

interface Props {
  open: boolean;
  onClose: () => void;
}
type ModalState = 'wallet-connect' | 'verify' | 'user-create';
export const UserModal = ({ onClose, open }: Props) => {
  const [modalState, setModalState] = useState<ModalState>('wallet-connect');
  return (
    <Modal dialogSize="md" onClose={onClose} open={open}>
      <ModalHeader onClose={onClose} heading="s" size="md" />
      <UnifiedWalletModal />
    </Modal>
  );
};
