'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { utils } from '@coral-xyz/anchor';
import { toast } from 'sonner';

import { createMessage } from '@cubik/auth';
import { UserAuth } from '@cubik/common-types';
import { handleRevalidation } from '@cubik/common/helper';
import { logApi } from '@cubik/logger/src/';
import { Icon, Text } from '@cubik/ui';

import { VerifyWallet } from '../../authentication';
import { generateSession } from '../../authentication/generateSession';
import { LoginUser } from '../../helpers/login';
import { UserCreate } from '../../userCreate';
import {
  useCubikWallet,
  useCubikWalletContext,
  useUserModalUIContext,
} from '../../wallet';
import { CubikWalletModal } from '../../wallet/WalletList/listWallet';

interface Props {
  onClose: () => void;
  setUser: (user: UserAuth) => void;
}
export const WebWalletConnectScreen = ({ onClose, setUser }: Props) => {
  const { modalState, setModalState, isWalletLoading, setIsWalletLoading } =
    useUserModalUIContext();

  const { setShowModal, setSelectedAdapter, setIsWalletError } =
    useCubikWalletContext();
  const pathname = usePathname();
  const { connected, connecting, publicKey, select, disconnect, signMessage } =
    useCubikWallet();
  useEffect(() => {
    const handleWalletConnect = async () => {
      if (publicKey && connected) {
        setModalState('wallet-verify');
      } else if (connecting) {
        setModalState('connecting');
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
        setModalState('wallet-connect');
        setShowModal(false);
        setSelectedAdapter(null);
        setIsWalletError(null);
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
      setIsWalletLoading(false);
    }
  };

  switch (modalState) {
    case 'wallet-connect':
      return (
        <>
          <div className="hidden md:flex justify-between items-center h-[44px] md:h-[48px] px-[16px] md:px-[24px]">
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
      );

    case 'wallet-verify':
      return (
        <VerifyWallet
          address={publicKey?.toBase58() || ''}
          handleVerify={handleVerifyWallet}
          isLoading={isWalletLoading}
          onClose={() => {
            disconnect();
            select(null);
            setSelectedAdapter(null);
            setIsWalletError(null);
            setModalState('wallet-connect');
          }}
        />
      );

    case 'user-create':
      return <UserCreate />;

    default:
      return (
        <Text className="h3" color="primary">
          wallet state not defined
        </Text>
      );
  }
};
