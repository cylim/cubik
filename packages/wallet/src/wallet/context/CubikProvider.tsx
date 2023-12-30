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
import { useWallet, WalletContextState } from '@solana/wallet-adapter-react';
import { toast } from 'sonner';

import { UserAuth } from '@cubik/common-types';
import { AccessScope, AdminUser } from '@cubik/common-types/src/admin';
import { handleAccessOnServer } from '@cubik/common/helper';

import { autoLoadAdmin } from '../../helpers/autoLoadAdmin';
import { autoLoadUser } from '../../helpers/autoLoadUser';
import { DashboardUserWallet } from '../../modals/wrapper/DashboardWalletConnectModalWrapper';
import { WebWalletConnectModal } from '../../modals/wrapper/WebWalletConnectModalWrapper';
import { ModalUIProvider } from '../context/WalletUIContext';
import { useFormattedWallet } from '../hooks/useFormattedWallet';
import { useHandleConnect } from '../hooks/useHandleConnect';
import { HARDCODED_WALLET_STANDARDS } from '../misc/HardCodedWallet';
import SolanaWalletConnectionProvider, {
  ICubikWalletConfig,
} from '../misc/index';
import { WalletAdapterWithMutableSupportedTransactionVersions } from '../misc/supportedTxVersion';
import {
  CubikWalletContext,
  CubikWalletValueContext,
  useCubikWallet,
  useCubikWalletContext,
} from './CubikContext';
import { CubikWalletValueProvider } from './CubikWalletValueProvider';

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
      setUser: (user: AdminUser) => void;
      user: AdminUser | null;
    }
  | {
      type: 'user';
      setUser: (user: UserAuth | null) => void;
      user: UserAuth | null;
      // user: any;
    };

const CubikWalletContextProvider = ({
  config,
  children,
  type,
}: {
  config: ICubikWalletConfig;
  type: WalletAppType;
} & PropsWithChildren) => {
  const [showModal, setShowModal] = useState(false);
  const { wallet, publicKey, select, connect, connected } = useCubikWallet();
  const [nonAutoConnectAttempt, setNonAutoConnectAttempt] = useState(false);

  const handleConnectClick = useHandleConnect({
    autoConnect: config.autoConnect,
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (type.type !== 'admin' || type.user) {
        console.log(publicKey?.toBase58());
        return;
      }

      const user = await autoLoadAdmin();
      if (!user) {
        return;
      }
      if (user.accessScope.length === 0) {
        toast.info('You do not have access to any event');
      } else {
        type.setAccessScope(user.accessScope[0]);
        handleAccessOnServer(user.accessScope[0].event_id);
      }
      type.setUser(user);
      toast.success('Successfully logged in');
    };
    fetchUser();
  }, [connected]);

  useEffect(() => {
    const fetchUser = async () => {
      if (type.type !== 'user' || type.user) {
        console.log(publicKey?.toBase58());
        return;
      }

      const user = await autoLoadUser();
      if (!user) {
        return null;
      }
      type.setUser(user);
      toast.success('Successfully logged in');
    };
    fetchUser();
  }, [connected]);

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
      <ModalUIProvider>
        {type.type === 'admin' && (
          <DashboardUserWallet
            setShowModal={setShowModal}
            setAccessScope={type.setAccessScope}
            setUser={type.setUser}
            showModal={showModal}
          />
        )}
        {type.type === 'user' && (
          <WebWalletConnectModal
            setShowModal={setShowModal}
            setUser={type.setUser}
            showModal={showModal}
          />
        )}
        {children}
      </ModalUIProvider>
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
  const [wallets] = useFormattedWallet();

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
      <SolanaWalletConnectionProvider
        wallets={wallets}
        config={params.config as any}
      >
        <CubikWalletValueProvider>
          <CubikWalletContextProvider type={type} config={params.config as any}>
            {children}
          </CubikWalletContextProvider>
        </CubikWalletValueProvider>
      </SolanaWalletConnectionProvider>
    </>
  );
};

export { CubikWalletProvider, useCubikWallet, useCubikWalletContext };
