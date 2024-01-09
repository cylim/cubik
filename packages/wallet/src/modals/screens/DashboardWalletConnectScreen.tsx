'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { utils } from '@coral-xyz/anchor';
import { toast } from 'sonner';

import { createMessage } from '@cubik/auth';
import { AccessScope } from '@cubik/common-types/src/admin';
import { handleAccessOnServer, handleRevalidation } from '@cubik/common/helper';
import { logApi } from '@cubik/logger/src/';
import { ModalHeader } from '@cubik/ui';

import { VerifyWallet } from '../../authentication';
import { generateSession } from '../../authentication/generateSession';
import { loginAdmin } from '../../helpers/loginAdmin';
import { MODAL_STATUS, useUserModalUIContext } from '../../wallet';
import {
  useCubikWallet,
  useCubikWalletContext,
} from '../../wallet/context/CubikContext';
import { CubikWalletModal } from '../../wallet/WalletList/listWallet';

interface Props {
  onClose: () => void;
  setAccessScope: (accessScope: AccessScope | null) => void;
  setUser: (user: any) => void;
}
export const DashboardWalletConnectScreen = ({
  onClose,
  setAccessScope,
  setUser,
}: Props) => {
  const { modalState, setModalState, isWalletLoading, setIsWalletLoading } =
    useUserModalUIContext();

  const pathname = usePathname();
  const { connected, publicKey, disconnect, signMessage, select } =
    useCubikWallet();
  const { setShowModal, setIsWalletError, setSelectedAdapter } =
    useCubikWalletContext();

  useEffect(() => {
    const handleWalletConnect = async () => {
      if (publicKey && connected) {
        setModalState(MODAL_STATUS.WALLET_VERIFY);
      }
    };
    handleWalletConnect();
  }, [publicKey, connected]);

  const handleVerifyWallet = async () => {
    try {
      setIsWalletLoading(true);
      if (!signMessage || !publicKey) {
        throw new Error('Sign message is undefined');
      }
      const nonce = Math.random().toString(36).substring(2, 15);
      const message = await generateSession(nonce);
      const msg = createMessage(message);
      if (!msg) {
        throw new Error('Message is undefined');
      }
      const sigBuffer = await signMessage(msg);
      const signature = utils.bytes.bs58.encode(sigBuffer);
      const user = await loginAdmin(publicKey.toBase58(), signature, nonce);
      if (user.accessScope.length === 0) {
        toast.info('You do not have access to any event');
      } else {
        setAccessScope(user.accessScope[0]);
        handleAccessOnServer(user.accessScope[0].event_id);
      }
      setUser(user);
      setModalState(MODAL_STATUS.WALLET_CONNECT);
      setShowModal(false);
      setSelectedAdapter(null);
      setIsWalletError(null);
      handleRevalidation(pathname || '/');
      toast.success('Successfully logged in');
    } catch (e) {
      const error = e as Error;
      toast.error(error.message);
      logApi({
        message: error.message,
        source: 'UserModal',
        level: 'error',
        error,
        statusCode: 500,
      });
    } finally {
      setIsWalletLoading(false);
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
      {modalState === 'wallet-verify' && (
        <VerifyWallet
          handleVerify={handleVerifyWallet}
          isLoading={isWalletLoading}
          onClose={() => {
            disconnect();
            select(null);
            setSelectedAdapter(null);
            setIsWalletError(null);
            setModalState(MODAL_STATUS.WALLET_CONNECT);
          }}
        />
      )}
    </>
  );
};
