import { useMediaQuery } from '@uidotdev/usehooks';

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

import { useCubikWallet, useCubikWalletContext } from '../../wallet';
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
  const { disconnect } = useCubikWallet();
  const { setSelectedAdapter, setIsWalletError } = useCubikWalletContext();

  const onClose = () => {
    disconnect();
    setSelectedAdapter(null);
    setIsWalletError(null);
    setShowModal(false);
  };
  return isSmallDevice ? (
    <Drawer open={showModal} onOpenChange={setShowModal}>
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
    <Modal dialogSize="sm" open={showModal} onClose={onClose}>
      <WebWalletConnectScreen setUser={setUser} onClose={onClose} />
    </Modal>
  );
};
