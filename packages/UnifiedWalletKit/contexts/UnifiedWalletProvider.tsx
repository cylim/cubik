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

import { Modal } from '../../ui/components/ui/Modal';
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
          <DrawerPortal>
            <DrawerOverlay className={cn(!isSmallDevice ? 'hidden' : '')} />
            <DrawerContent className={cn(!isSmallDevice ? 'hidden' : 'h-max')}>
              {/* <ModalHeader
                heading={'Connect Wallet'}
                headingSize={'sm'}
                onClose={() => setShowModal(false)}
              /> */}
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
          {/* <ModalHeader
            heading={'Connect Wallet'}
            headingSize={'sm'}
            onClose={() => setShowModal(false)}
          /> */}
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
