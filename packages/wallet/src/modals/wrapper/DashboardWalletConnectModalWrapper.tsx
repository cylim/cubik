import { useMediaQuery } from '@uidotdev/usehooks';

import { AccessScope } from '@cubik/common-types/src/admin';
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
import { DashboardWalletConnectScreen } from '../screens/DashboardWalletConnectScreen';

export const DashboardUserWallet = ({
  showModal,
  setShowModal,
  setAccessScope,
  setUser,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  setAccessScope: (accessScope: AccessScope | null) => void;
  setUser: (user: any) => void;
}) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const { disconnect } = useCubikWallet();
  const { setModalState } = useUserModalUIContext();
  const { setSelectedAdapter, setIsWalletError } = useCubikWalletContext();
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
            <DashboardWalletConnectScreen
              setAccessScope={setAccessScope}
              setUser={setUser}
              onClose={onClose}
            />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  ) : (
    <Modal dialogSize="xl" open={showModal} onClose={onClose}>
      <DashboardWalletConnectScreen
        setAccessScope={setAccessScope}
        setUser={setUser}
        onClose={onClose}
      />
    </Modal>
  );
};
