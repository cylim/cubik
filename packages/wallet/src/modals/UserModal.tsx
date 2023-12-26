import React, { useEffect, useState } from 'react';
import { utils } from '@coral-xyz/anchor';

import { createMessage } from '@cubik/auth';
import { logApi } from '@cubik/logger/src/';
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
import { generateMessage } from '../authentication/generateMessage';
import { UserCreate } from '../userCreate';
import { LoginUser } from '../userCreate/login';
import { useCubikWallet } from '../wallet/CubikContext';
import { CubikWalletModal } from '../wallet/listWallet';

type ModalState = 'wallet-connect' | 'verify' | 'user-create';
interface Props {
  onClose: () => void;
}
export const UserModal = ({ onClose }: Props) => {
  const [modalState, setModalState] =
    React.useState<ModalState>('wallet-connect');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { connected, publicKey, disconnect, signMessage } = useCubikWallet();
  useEffect(() => {
    const handleWalletConnect = async () => {
      if (publicKey && connected) {
        setModalState('verify');
      }
    };
    handleWalletConnect();
  }, [publicKey, connected]);

  const handleVerifyWallet = async () => {
    try {
      setIsLoading(true);
      if (!signMessage || !publicKey) {
        throw new Error('Sign message is undefined');
      }
      const nonce = Math.random().toString(36).substring(2, 15);
      const message = await generateMessage(nonce);
      const msg = createMessage(message);
      if (!msg) {
        throw new Error('Message is undefined');
      }
      const sigBuffer = await signMessage(msg);
      const signature = utils.bytes.bs58.encode(sigBuffer);
      const user = await LoginUser(publicKey?.toBase58(), signature, nonce);
      // toast.info(JSON.stringify(user));
    } catch (e) {
      const error = e as Error;
      // toast.error(error.message);
      logApi({
        message: error.message,
        source: 'UserModal',
        level: 'error',
        error,
        statusCode: 500,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          handleVerify={handleVerifyWallet}
          isLoading={isLoading}
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

export const CreateUserWallet = ({ showModal, setShowModal }: any) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const { disconnect } = useCubikWallet();
  const onClose = () => {
    disconnect();
    setShowModal(false);
  };
  return isSmallDevice ? (
    <Drawer open={showModal} onOpenChange={setShowModal}>
      <DrawerPortal>
        <DrawerOverlay className={cn(!isSmallDevice ? 'hidden' : '')} />
        <DrawerContent className={cn(!isSmallDevice ? 'hidden' : 'h-max')}>
          <DrawerBody>
            <UserModal onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  ) : (
    <Modal dialogSize="sm" open={showModal} onClose={onClose}>
      <UserModal onClose={onClose} />
    </Modal>
  );
};
