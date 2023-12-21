import React, { useState } from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  Modal,
  ModalHeader,
} from '@cubik/ui';
import { cn } from '@cubik/ui/lib/utils';

import UnifiedWalletModal from '../../components/UnifiedWalletModal';
import { useMediaQuery } from '../../hooks/helperHooks';

const WalletModal = ({ showModal, setShowModal }: any) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const [showHeader, setShowHeader] = useState(true);

  return isSmallDevice ? (
    <Drawer open={showModal} onOpenChange={setShowModal}>
      <DrawerPortal>
        <DrawerOverlay className={cn(!isSmallDevice ? 'hidden' : '')} />
        <DrawerContent className={cn(!isSmallDevice ? 'hidden' : 'h-max')}>
          <ModalHeader
            heading={showHeader ? 'Connect Wallet' : ''}
            background={showHeader}
            size={'lg'}
            onClose={() => setShowModal(false)}
          />
          <DrawerBody>
            <UnifiedWalletModal
              setShowHeader={setShowHeader}
              onClose={() => setShowModal(false)}
            />
          </DrawerBody>
          {/* <DrawerFooter></DrawerFooter> */}
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  ) : (
    <Modal dialogSize="sm" open={showModal} onClose={() => setShowModal(false)}>
      <ModalHeader
        heading={showHeader ? 'Connect Wallet' : ''}
        background={showHeader}
        size={'md'}
        onClose={() => setShowModal(false)}
      />
      <UnifiedWalletModal
        setShowHeader={setShowHeader}
        onClose={() => setShowModal(false)}
      />
    </Modal>
  );
};

export default WalletModal;
