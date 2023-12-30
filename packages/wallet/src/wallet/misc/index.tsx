import React, { FC, PropsWithChildren, useMemo } from 'react';
import {
  Adapter,
  SupportedTransactionVersions,
  WalletError,
  WalletName,
} from '@solana/wallet-adapter-base';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { Cluster } from '@solana/web3.js';

import { IHardcodedWalletStandardAdapter } from './HardcodedWalletStandardAdapter';

const noop = (error: WalletError, adapter?: Adapter) => {
  console.log({ error, adapter });
};

export interface IWalletNotification {
  publicKey: string;
  shortAddress: string;
  walletName: string;
  metadata: {
    name: string;
    url: string;
    icon: string;
    supportedTransactionVersions?: SupportedTransactionVersions;
  };
}

export interface ICubikWalletConfig {
  autoConnect: boolean;
  metadata: ICubikWalletMetadata;
  env: Cluster;
  walletPrecedence?: WalletName[];
  hardcodedWallets?: IHardcodedWalletStandardAdapter[];
  notificationCallback?: {
    onConnect: (props: IWalletNotification) => void;
    onConnecting: (props: IWalletNotification) => void;
    onDisconnect: (props: IWalletNotification) => void;
    onNotInstalled: (props: IWalletNotification) => void;
    // TODO: Support wallet account change
    // onChangeAccount: (props: IWalletNotification) => void,
  };
  walletlistExplanation?: {
    href: string;
  };
}

export interface ICubikWalletMetadata {
  name: string;
  url: string;
  description: string;
  iconUrls: string[]; // full uri, first icon will be used as main icon (png, jpg, svg)
  additionalInfo?: string;
}

const SolanaWalletConnectionProvider: FC<
  PropsWithChildren & {
    wallets: Adapter[];
    config: ICubikWalletConfig;
    setIsWalletError: React.Dispatch<React.SetStateAction<WalletError | null>>;
  }
> = ({ wallets: passedWallets, config, children, setIsWalletError }) => {
  const wallets = useMemo(() => {
    return [...passedWallets];
  }, []);

  return (
    //  WalletProvider is responsible for handling wallet connections and events (connect, disconnect, error)
    <WalletProvider
      wallets={wallets}
      autoConnect={config.autoConnect}
      onError={(err, adapter) => {
        setIsWalletError(err);
        noop(err, adapter);
      }}
    >
      {children}
    </WalletProvider>
  );
};

export default SolanaWalletConnectionProvider;
