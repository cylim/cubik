'use client';

import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Adapter, WalletReadyState } from '@solana/wallet-adapter-base';
import {
  useWallet,
  Wallet,
  WalletContextState,
} from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { usePrevious } from 'react-use';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
} from '@cubik/ui';
import { cn } from '@cubik/ui/lib/utils';

import { Modal, ModalHeader } from '../../ui/components/ui/Modal';
//import ModalDialog from '../components/ModalDialog';
import UnifiedWalletModal from '../components/UnifiedWalletModal';
import { useMediaQuery } from '../hooks/helperHooks';
import { shortenAddress } from '../misc/utils';
import {
  UnifiedWalletContext,
  UnifiedWalletValueContext,
  useUnifiedWallet,
  useUnifiedWalletContext,
} from './UnifiedWalletContext';
import WalletConnectionProvider, {
  IUnifiedWalletConfig,
} from './WalletConnectionProvider';

export type IWalletProps = Omit<
  WalletContextState,
  | 'autoConnect'
  | 'disconnecting'
  | 'sendTransaction'
  | 'signTransaction'
  | 'signAllTransactions'
  | 'signMessage'
>;

const UnifiedWalletValueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const defaultWalletContext = useWallet();

  const value = useMemo(() => {
    return {
      ...defaultWalletContext,
      connect: async () => {
        try {
          return await defaultWalletContext.connect();
        } catch (error) {
          // when wallet is not installed
        }
      },
    };
  }, [defaultWalletContext]);

  return (
    <UnifiedWalletValueContext.Provider value={value}>
      {children}
    </UnifiedWalletValueContext.Provider>
  );
};

const UnifiedWalletContextProvider = ({
  config,
  children,
}: {
  config: IUnifiedWalletConfig;
} & PropsWithChildren) => {
  const { publicKey, wallet, select, connect } = useUnifiedWallet();
  const previousPublicKey = usePrevious<PublicKey | null>(publicKey);
  const previousWallet = usePrevious<Wallet | null>(wallet);
  // console.log('wallet from unified wallet context provider ', wallet);
  // Weird quirks for autoConnect to require select and connect
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const [nonAutoConnectAttempt, setNonAutoConnectAttempt] = useState(false);
  useEffect(() => {
    if (nonAutoConnectAttempt && !config.autoConnect && wallet?.adapter.name) {
      try {
        connect();
      } catch (error) {
        // when wallet is not installed
      }
      setNonAutoConnectAttempt(false);
    }
  }, [nonAutoConnectAttempt, wallet?.adapter.name]);

  const [showModal, setShowModal] = useState(false);

  const handleConnectClick = useCallback(
    async (
      event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>,
      adapter: Adapter,
    ) => {
      event.preventDefault();

      try {
        setShowModal(false);

        // Connecting
        config.notificationCallback?.onConnecting({
          publicKey: '',
          shortAddress: '',
          walletName: adapter.name,
          metadata: {
            name: adapter.name,
            url: adapter.url,
            icon: adapter.icon,
            supportedTransactionVersions: adapter.supportedTransactionVersions,
          },
        });

        // Might throw WalletReadyState.WalletNotReady
        select(adapter.name);

        // Weird quirks for autoConnect to require select and connect
        if (!config.autoConnect) {
          setNonAutoConnectAttempt(true);
        }

        if (adapter.readyState === WalletReadyState.NotDetected) {
          throw WalletReadyState.NotDetected;
        }
      } catch (error) {
        console.log(error);

        // Not Installed
        config.notificationCallback?.onNotInstalled({
          publicKey: '',
          shortAddress: '',
          walletName: adapter.name,
          metadata: {
            name: adapter.name,
            url: adapter.url,
            icon: adapter.icon,
            supportedTransactionVersions: adapter.supportedTransactionVersions,
          },
        });
      }
    },
    [select, connect, wallet?.adapter.name],
  );

  useEffect(() => {
    // Disconnected
    if (previousWallet && !wallet) {
      config.notificationCallback?.onDisconnect({
        publicKey: previousPublicKey?.toString() || '',
        shortAddress: shortenAddress(previousPublicKey?.toString() || ''),
        walletName: previousWallet?.adapter.name || '',
        metadata: {
          name: previousWallet?.adapter.name,
          url: previousWallet?.adapter.url,
          icon: previousWallet?.adapter.icon,
          supportedTransactionVersions:
            previousWallet?.adapter.supportedTransactionVersions,
        },
      });
      return;
    }

    // Connected
    if (publicKey && wallet) {
      config.notificationCallback?.onConnect({
        publicKey: publicKey.toString(),
        shortAddress: shortenAddress(publicKey.toString()),
        walletName: wallet.adapter.name,
        metadata: {
          name: wallet.adapter.name,
          url: wallet.adapter.url,
          icon: wallet.adapter.icon,
          supportedTransactionVersions:
            wallet.adapter.supportedTransactionVersions,
        },
      });
      return;
    }
  }, [wallet, publicKey, previousWallet]);

  return (
    <UnifiedWalletContext.Provider
      value={{
        walletPrecedence: config.walletPrecedence || [],
        handleConnectClick,
        showModal,
        setShowModal,
        walletlistExplanation: config.walletlistExplanation,
      }}
    >
      {isSmallDevice ? (
        <Drawer open={showModal} onOpenChange={setShowModal}>
          <DrawerOverlay className={cn(!isSmallDevice ? 'hidden' : '')} />
          <DrawerPortal>
            <DrawerContent className={cn(!isSmallDevice ? 'hidden' : 'h-max')}>
              <ModalHeader
                RingSVG={
                  <svg
                    width="112"
                    height="112"
                    viewBox="0 0 112 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.01"
                      x="0.5"
                      y="0.5"
                      width="111"
                      height="111"
                      rx="55.5"
                      stroke="white"
                    />
                    <rect
                      opacity="0.05"
                      x="7.5"
                      y="7.5"
                      width="97"
                      height="97"
                      rx="48.5"
                      stroke="white"
                    />
                    <rect
                      opacity="0.1"
                      x="17.5"
                      y="17.5"
                      width="77"
                      height="77"
                      rx="38.5"
                      stroke="white"
                    />
                    <rect
                      opacity="0.2"
                      x="25.5"
                      y="25.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="white"
                    />
                    <rect
                      opacity="0.6"
                      x="35.5"
                      y="35.5"
                      width="41"
                      height="41"
                      rx="20.5"
                      stroke="white"
                    />
                    <path
                      d="M46 58.5V55C46 52.1997 46 50.7996 46.545 49.73C47.0243 48.7892 47.7892 48.0243 48.73 47.545C49.7996 47 51.1997 47 54 47H57.5C58.8978 47 59.5967 47 60.1481 47.2284C60.8831 47.5328 61.4672 48.1169 61.7716 48.8519C61.979 49.3525 61.9981 49.9747 61.9998 51.1313M46 58.5C46 59.8297 46 60.9946 46.3806 61.9134C46.8881 63.1386 47.8614 64.1119 49.0866 64.6194C49.783 64.9079 50.6208 64.9778 52 64.9947M46 58.5C46 56.1703 46 55.0054 46.3806 54.0866C46.8881 52.8614 47.8614 51.8881 49.0866 51.3806C50.0054 51 51.1703 51 53.5 51H58.5C60.1339 51 61.1949 51 61.9998 51.1313M58 56H61M61.9998 51.1313C62.3426 51.1872 62.639 51.2669 62.9134 51.3806C64.1386 51.8881 65.1119 52.8614 65.6194 54.0866C65.9079 54.783 65.9777 55.6208 65.9946 57M62.9648 60H63.0022C64.6579 60 66 61.3431 66 63C66 64.6569 64.6579 66 63.0022 66H62.9648M59.0352 60H58.9978C57.3421 60 56 61.3431 56 63C56 64.6569 57.3421 66 58.9978 66H59.0352M59.9971 63H61.9956"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                heading={'Connect Wallet'}
                headingSize={'sm'}
                onClose={() => setShowModal(false)}
              />
              <DrawerBody>
                <UnifiedWalletModal onClose={() => setShowModal(false)} />
              </DrawerBody>
              {/* <DrawerFooter></DrawerFooter> */}
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
      ) : (
        <Modal
          dialogSize="md"
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          <ModalHeader
            RingSVG={
              <svg
                width="112"
                height="112"
                viewBox="0 0 112 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.01"
                  x="0.5"
                  y="0.5"
                  width="111"
                  height="111"
                  rx="55.5"
                  stroke="white"
                />
                <rect
                  opacity="0.05"
                  x="7.5"
                  y="7.5"
                  width="97"
                  height="97"
                  rx="48.5"
                  stroke="white"
                />
                <rect
                  opacity="0.1"
                  x="17.5"
                  y="17.5"
                  width="77"
                  height="77"
                  rx="38.5"
                  stroke="white"
                />
                <rect
                  opacity="0.2"
                  x="25.5"
                  y="25.5"
                  width="61"
                  height="61"
                  rx="30.5"
                  stroke="white"
                />
                <rect
                  opacity="0.6"
                  x="35.5"
                  y="35.5"
                  width="41"
                  height="41"
                  rx="20.5"
                  stroke="white"
                />
                <path
                  d="M46 58.5V55C46 52.1997 46 50.7996 46.545 49.73C47.0243 48.7892 47.7892 48.0243 48.73 47.545C49.7996 47 51.1997 47 54 47H57.5C58.8978 47 59.5967 47 60.1481 47.2284C60.8831 47.5328 61.4672 48.1169 61.7716 48.8519C61.979 49.3525 61.9981 49.9747 61.9998 51.1313M46 58.5C46 59.8297 46 60.9946 46.3806 61.9134C46.8881 63.1386 47.8614 64.1119 49.0866 64.6194C49.783 64.9079 50.6208 64.9778 52 64.9947M46 58.5C46 56.1703 46 55.0054 46.3806 54.0866C46.8881 52.8614 47.8614 51.8881 49.0866 51.3806C50.0054 51 51.1703 51 53.5 51H58.5C60.1339 51 61.1949 51 61.9998 51.1313M58 56H61M61.9998 51.1313C62.3426 51.1872 62.639 51.2669 62.9134 51.3806C64.1386 51.8881 65.1119 52.8614 65.6194 54.0866C65.9079 54.783 65.9777 55.6208 65.9946 57M62.9648 60H63.0022C64.6579 60 66 61.3431 66 63C66 64.6569 64.6579 66 63.0022 66H62.9648M59.0352 60H58.9978C57.3421 60 56 61.3431 56 63C56 64.6569 57.3421 66 58.9978 66H59.0352M59.9971 63H61.9956"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            heading={'Connect Wallet'}
            headingSize={'sm'}
            onClose={() => setShowModal(false)}
          />
          <UnifiedWalletModal onClose={() => setShowModal(false)} />
        </Modal>
      )}
      {children}
    </UnifiedWalletContext.Provider>
  );
};

const UnifiedWalletProvider = ({
  wallets,
  config,
  children,
}: {
  wallets: Adapter[];
  config: IUnifiedWalletConfig;
  children: React.ReactNode;
}) => {
  return (
    <>
      <WalletConnectionProvider wallets={wallets} config={config}>
        <UnifiedWalletValueProvider>
          <UnifiedWalletContextProvider config={config}>
            {children}
          </UnifiedWalletContextProvider>
        </UnifiedWalletValueProvider>
      </WalletConnectionProvider>
    </>
  );
};

export { UnifiedWalletProvider, useUnifiedWallet, useUnifiedWalletContext };
