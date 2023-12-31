'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext } from 'react';
import type {
  Adapter,
  SendTransactionOptions,
  WalletError,
  WalletName,
} from '@solana/wallet-adapter-base';
import type { Wallet, WalletContextState } from '@solana/wallet-adapter-react';
import type {
  Connection,
  Transaction,
  VersionedTransaction,
} from '@solana/web3.js';

import { ICubikWalletConfig } from '../misc/index';

export const MWA_NOT_FOUND_ERROR = 'MWA_NOT_FOUND_ERROR';
export type IUnifiedTheme = 'light' | 'dark' | 'jupiter';

export interface ICubikWalletContext {
  walletPrecedence: ICubikWalletConfig['walletPrecedence'];
  handleConnectClick: (
    event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>,
    wallet: Adapter,
  ) => Promise<void>;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  walletlistExplanation: ICubikWalletConfig['walletlistExplanation'];
  error: WalletError | null;
  setSelectedAdapter: React.Dispatch<React.SetStateAction<Wallet | null>>;
  selectedAdapter: Wallet | null;
  setIsWalletError: React.Dispatch<React.SetStateAction<WalletError | null>>;
}

export const CubikWalletContext = createContext<ICubikWalletContext>({
  walletPrecedence: [],
  handleConnectClick: async (
    event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>,
    wallet: Adapter,
  ) => {},
  showModal: false,
  setShowModal: (showModal: boolean) => {},
  walletlistExplanation: undefined,
  error: null,
  setIsWalletError: () => {},
  selectedAdapter: null,
  setSelectedAdapter: () => {},
});

// Internal context for handling wallet state
export const useCubikWalletContext = (): ICubikWalletContext => {
  return useContext(CubikWalletContext);
};

// Copied from @solana/wallet-adapter-react
function constructMissingProviderErrorMessage(
  action: string,
  valueName: string,
) {
  return (
    'You have tried to ' +
    ` ${action} "${valueName}"` +
    ' on a WalletContext without providing one.' +
    ' Make sure to render a WalletProvider' +
    ' as an ancestor of the component that uses ' +
    'WalletContext'
  );
}

export const CUBIK_WALLET_VALUE_DEFAULT_CONTEXT = {
  autoConnect: false,
  connecting: false,
  connected: false,
  disconnecting: false,
  select(_name: WalletName | null) {
    console.error(constructMissingProviderErrorMessage('get', 'select'));
  },
  connect() {
    return Promise.reject(
      console.error(constructMissingProviderErrorMessage('get', 'connect')),
    );
  },
  disconnect() {
    return Promise.reject(
      console.error(constructMissingProviderErrorMessage('get', 'disconnect')),
    );
  },
  sendTransaction(
    _transaction: VersionedTransaction | Transaction,
    _connection: Connection,
    _options?: SendTransactionOptions,
  ) {
    return Promise.reject(
      console.error(
        constructMissingProviderErrorMessage('get', 'sendTransaction'),
      ),
    );
  },
  signTransaction(_transaction: Transaction) {
    return Promise.reject(
      console.error(
        constructMissingProviderErrorMessage('get', 'signTransaction'),
      ),
    );
  },
  signAllTransactions(_transaction: Transaction[]) {
    return Promise.reject(
      console.error(
        constructMissingProviderErrorMessage('get', 'signAllTransactions'),
      ),
    );
  },
  signMessage(_message: Uint8Array) {
    return Promise.reject(
      console.error(constructMissingProviderErrorMessage('get', 'signMessage')),
    );
  },
} as WalletContextState;

// Internal context for handling wallet functions
export const CubikWalletValueContext = createContext<WalletContextState>(
  CUBIK_WALLET_VALUE_DEFAULT_CONTEXT,
);
export const useCubikWallet = (): WalletContextState => {
  return useContext(CubikWalletValueContext);
};
