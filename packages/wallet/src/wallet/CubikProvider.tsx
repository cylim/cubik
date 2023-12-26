'use client';

import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Adapter,
  BaseSignerWalletAdapter,
  WalletAdapterNetwork,
  WalletName,
  WalletReadyState,
} from '@solana/wallet-adapter-base';
import {
  useWallet,
  Wallet,
  WalletContextState,
} from '@solana/wallet-adapter-react';
import * as AllWalletAdapters from '@solana/wallet-adapter-wallets';
import { PublicKey } from '@solana/web3.js';
import { usePrevious } from 'react-use';
import { toast } from 'sonner';

import { AccessScope } from '@cubik/common-types/src/admin';

import { CreateUserWallet, VerifyUserWallet } from '../modals';
import {
  CubikWalletContext,
  CubikWalletValueContext,
  useCubikWallet,
  useCubikWalletContext,
} from './CubikContext';
import { HARDCODED_WALLET_STANDARDS } from './HardCodedWallet';
import { WalletAdapterWithMutableSupportedTransactionVersions } from './supportedTxVersion';
import WalletConnectionProvider, {
  ICubikWalletConfig,
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

type WalletAppType =
  | {
      type: 'admin';
      setAccessScope: (accessScope: AccessScope | null) => void;
      setUser: (user: any) => void;
    }
  | {
      type: 'user';
      setUser: (user: any) => void;
    };

const CubikWalletValueProvider = ({
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
    <CubikWalletValueContext.Provider value={value}>
      {children}
    </CubikWalletValueContext.Provider>
  );
};
export function shortenAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

export const metadata = {
  name: 'UnifiedWallet',
  description: 'UnifiedWallet',
  url: 'https://jup.ag',
  iconUrls: ['https://jup.ag/favicon.ico'],
  additionalInfo: '',
  walletConnectProjectId: '4a4e231c4004ef7b77076a87094fba61',
};
const CubikWalletContextProvider = ({
  config,
  children,
  type,
}: {
  config: ICubikWalletConfig;
  type: WalletAppType;
} & PropsWithChildren) => {
  const { publicKey, wallet, select, connect } = useCubikWallet();
  const previousPublicKey = usePrevious<PublicKey | null>(publicKey);
  const previousWallet = usePrevious<Wallet | null>(wallet);
  // console.log('wallet from unified wallet context provider ', wallet);
  // Weird quirks for autoConnect to require select and connect
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
        // setShowModal(false);

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
        // alert('Wallet Connected');
      } catch (error) {
        console.log(error);

        toast.error('Wallet not installed');
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
    <CubikWalletContext.Provider
      value={{
        walletPrecedence: config.walletPrecedence || [],
        handleConnectClick,
        showModal,
        setShowModal,
        walletlistExplanation: config.walletlistExplanation,
      }}
    >
      {type.type === 'admin' && (
        <VerifyUserWallet
          setShowModal={setShowModal}
          setAccessScope={type.setAccessScope}
          setUser={type.setUser}
          showModal={showModal}
        />
      )}
      {type.type === 'user' && (
        <CreateUserWallet
          setShowModal={setShowModal}
          setUser={type.setUser}
          showModal={showModal}
        />
      )}
      {children}
    </CubikWalletContext.Provider>
  );
};

const CubikWalletProvider = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: WalletAppType;
}) => {
  const wallets = useMemo(() => {
    if (typeof window === 'undefined') {
      return [];
    }

    const { WalletConnectWalletAdapter, ...allwalletAdapters } =
      AllWalletAdapters;

    const walletAdapters = Object.keys(allwalletAdapters)
      .filter((key) => key.includes('Adapter'))
      .map((key) => (allwalletAdapters as any)[key])
      .map((WalletAdapter: any) => new WalletAdapter()); // Intentional any, TS were being annoying

    const walletConnectWalletAdapter: WalletAdapterWithMutableSupportedTransactionVersions<BaseSignerWalletAdapter> | null =
      (() => {
        const adapter: WalletAdapterWithMutableSupportedTransactionVersions<BaseSignerWalletAdapter> =
          new WalletConnectWalletAdapter({
            network: WalletAdapterNetwork.Mainnet,
            options: {
              relayUrl: 'wss://relay.walletconnect.com',
              projectId: metadata.walletConnectProjectId,
              metadata: {
                name: metadata.name,
                description: metadata.description,
                url: metadata.url,
                icons: metadata.iconUrls,
              },
            },
          });

        return adapter;
      })();

    return [...walletAdapters, walletConnectWalletAdapter].filter(
      (item) => item && item.name && item.icon,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metadata]);

  const params = useMemo(
    () => ({
      wallets: wallets,
      config: {
        autoConnect: false,
        env: 'mainnet-beta',
        metadata: {
          name: 'Cubik Wallet',
          description: 'Cubik Wallet',
        },
        notificationCallback: undefined,
        walletPrecedence: [
          'OKX Wallet' as WalletName,
          'WalletConnect' as WalletName,
        ],
        hardcodedWallets: HARDCODED_WALLET_STANDARDS,
        walletlistExplanation: {
          href: '',
        },
      },
    }),
    [wallets],
  );
  return (
    <>
      <WalletConnectionProvider wallets={wallets} config={params.config as any}>
        <CubikWalletValueProvider>
          <CubikWalletContextProvider type={type} config={params.config as any}>
            {children}
          </CubikWalletContextProvider>
        </CubikWalletValueProvider>
      </WalletConnectionProvider>
    </>
  );
};

export { CubikWalletProvider, useCubikWallet, useCubikWalletContext };
