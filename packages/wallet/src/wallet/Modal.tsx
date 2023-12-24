import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  Modal,
  ModalHeader,
} from '@cubik/ui';
import { useMediaQuery } from '@cubik/ui/hooks';
import { cn } from '@cubik/ui/lib/utils';

// import UnifiedWalletModal from '@cubik/wallet-connect/components/Modal/modal';

type ModalState = 'wallet-connect' | 'verify' | 'user-create';
interface Props {
  onClose: () => void;
}
export const UserModal = ({ onClose }: Props) => {
  const [modalState, setModalState] =
    React.useState<ModalState>('wallet-connect');
  return (
    <>
      {modalState === 'wallet-connect' && (
        <ModalHeader onClose={onClose} heading="Connect Wallet" size="sm" />
      )}
    </>
  );
};

const WalletModal = ({ showModal, setShowModal }: any) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  // const [showHeader, setShowHeader] = useState(true);

  return isSmallDevice ? (
    <Drawer open={showModal} onOpenChange={setShowModal}>
      <DrawerPortal>
        <DrawerOverlay className={cn(!isSmallDevice ? 'hidden' : '')} />
        <DrawerContent className={cn(!isSmallDevice ? 'hidden' : 'h-max')}>
          <DrawerBody>
            <UserModal onClose={() => setShowModal(false)} />
          </DrawerBody>
          {/* <DrawerFooter></DrawerFooter> */}
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  ) : (
    <Modal dialogSize="sm" open={showModal} onClose={() => setShowModal(false)}>
      <UserModal onClose={() => setShowModal(false)} />
    </Modal>
  );
};

export default WalletModal;
