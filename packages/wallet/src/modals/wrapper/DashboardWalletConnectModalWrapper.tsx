import { useMediaQuery } from '@uidotdev/usehooks';

import { UserAuth } from '@cubik/common-types';
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

import { useCubikWallet } from '../../wallet';
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
    <Modal dialogSize="sm" open={showModal} onClose={onClose}>
      <DashboardWalletConnectScreen
        setAccessScope={setAccessScope}
        setUser={setUser}
        onClose={onClose}
      />
    </Modal>
  );
};
