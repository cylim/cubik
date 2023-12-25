import React, { useEffect } from 'react';

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

import { VerifyWallet } from '../authentication';
import { UserCreate } from '../userCreate';
import { useCubikWallet } from './CubikContext';
import { CubikWalletModal } from './listWallet';

type ModalState = 'wallet-connect' | 'verify' | 'user-create';
interface Props {
  onClose: () => void;
}
export const UserModal = ({ onClose }: Props) => {
  const [modalState, setModalState] = React.useState<ModalState>('user-create');
  const { connected, publicKey, disconnect } = useCubikWallet();
  useEffect(() => {
    const handleWalletConnect = async () => {
      if (publicKey && connected) {
        setModalState('verify');
      }
    };
    handleWalletConnect();
  }, [publicKey, connected]);
  return (
    <>
      {modalState === 'wallet-connect' && (
        <>
          <ModalHeader onClose={onClose} heading="Connect Wallet" size="md" />
          <CubikWalletModal onClose={onClose} setShowHeader={() => {}} />
        </>
      )}
      {modalState === 'verify' && (
        <VerifyWallet
          address={publicKey?.toBase58() || ''}
          handleVerify={() => {}}
          isLoading={false}
          onClose={() => {
            disconnect();
            setModalState('wallet-connect');
          }}
        />
      )}
      {modalState === 'user-create' && <UserCreate />}
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
