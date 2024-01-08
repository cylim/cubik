import { useMediaQuery } from '@uidotdev/usehooks';
import { toast } from 'sonner';

import { UserAuth } from '@cubik/common-types';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  Modal,
} from '@cubik/ui';
import { cn } from '@cubik/ui/lib/utils';

import {
  MODAL_STATUS,
  useCubikWallet,
  useCubikWalletContext,
  useUserModalUIContext,
} from '../../wallet';
import { WebWalletConnectScreen } from '../screens/WebWalletConnectScreen';

//
export const WebWalletConnectModal = ({
  showModal,
  setShowModal,
  setUser,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  setUser: (user: UserAuth) => void;
}) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const { disconnect, connected } = useCubikWallet();
  const { setSelectedAdapter, setIsWalletError } = useCubikWalletContext();
  const { setModalState } = useUserModalUIContext();
  const onClose = () => {
    disconnect();
    setSelectedAdapter(null);
    setIsWalletError(null);
    setShowModal(false);
  };
  return isSmallDevice ? (
    <Drawer
      open={showModal}
      onOpenChange={(e) => {
        if (e === true) {
          setShowModal(e);
        } else {
          setIsWalletError(null);
          onClose();
          setModalState(MODAL_STATUS.WALLET_CONNECT);
          setSelectedAdapter(null);
          setShowModal(false);
        }
      }}
    >
      <DrawerPortal>
        <DrawerOverlay className={cn(!isSmallDevice ? 'hidden' : '')} />
        <DrawerContent className={cn(!isSmallDevice ? 'hidden' : 'h-max')}>
          <DrawerBody>
            <WebWalletConnectScreen setUser={setUser} onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  ) : (
    <Modal
      dialogSize="sm"
      open={showModal}
      onClose={() => {
        if (!connected) {
          toast.error('Wallet connection error, please try again');
        }
        onClose();
      }}
    >
      <WebWalletConnectScreen setUser={setUser} onClose={onClose} />
    </Modal>
  );
};
