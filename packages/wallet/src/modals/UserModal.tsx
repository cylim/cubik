import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { utils } from '@coral-xyz/anchor';
import { toast } from 'sonner';

import { createMessage } from '@cubik/auth';
import { UserAuth } from '@cubik/common-types';
import { handleRevalidation } from '@cubik/common/helper';
import { logApi } from '@cubik/logger/src/';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  Icon,
  Modal,
  Text,
} from '@cubik/ui';
import { useMediaQuery } from '@cubik/ui/hooks';
import { cn } from '@cubik/ui/lib/utils';

import { VerifyWallet } from '../authentication';
import { generateMessage } from '../authentication/generateMessage';
import { LoginUser } from '../helpers/login';
import { UserCreate } from '../userCreate';
import { useCubikWallet, useCubikWalletContext } from '../wallet/CubikContext';
import { CubikWalletModal } from '../wallet/listWallet';

type ModalState = 'wallet-connect' | 'verify' | 'user-create';
interface Props {
  onClose: () => void;
  setUser: (user: UserAuth) => void;
}
export const UserModal = ({ onClose, setUser }: Props) => {
  const [modalState, setModalState] =
    React.useState<ModalState>('wallet-connect');
  const { setShowModal } = useCubikWalletContext();
  const pathname = usePathname();
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
      if (!user) {
        setModalState('user-create');
      } else {
        setUser({
          id: user.id,
          mainWallet: user.mainWallet,
          profilePicture: user.profilePicture,
          username: user.username,
        });
        setShowModal(false);
        handleRevalidation(pathname || '/');
        toast.success('Successfully logged in');
      }
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
          <div className="flex justify-between items-center h-[44px] md:h-[48px] px-[16px] md:px-[24px]">
            <Text
              color={'primary'}
              className="text-[var(--avatar-label-title)] h6"
            >
              Connect Wallet
            </Text>
            <button className="pointer-events-auto" onClick={onClose}>
              <Icon
                name="cross"
                width={20}
                stroke="var(--modal-header-cancel-icon)"
                height={20}
              />
            </button>
          </div>
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

export const CreateUserWallet = ({
  showModal,
  setShowModal,
  setUser,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  setUser: (user: UserAuth) => void;
}) => {
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
            <UserModal setUser={setUser} onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  ) : (
    <Modal dialogSize="sm" open={showModal} onClose={onClose}>
      <UserModal setUser={setUser} onClose={onClose} />
    </Modal>
  );
};
