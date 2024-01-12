// src/context/UserModalContext.tsx
import React, { createContext, useContext, useState } from 'react';

export enum MODAL_STATUS {
  WALLET_CONNECT = 'wallet-connect',
  WALLET_VERIFY = 'wallet-verify',
  USER_CREATE = 'user-create',
  CONNECTING = 'connecting',
  ERROR_CONNECTING = 'error-connecting',
  USER_MIGRATION = 'user-migration',
}

type ModalState = MODAL_STATUS | null;

interface ModalUIContext {
  modalState: ModalState;
  setModalState: (state: ModalState) => void;
  isWalletLoading: boolean;
  setIsWalletLoading: (loading: boolean) => void;
}

export const userModalUIContext = createContext<ModalUIContext | null>(null);

export const useUserModalUIContext = () => {
  console.log('-------use wallet modal ui context is called-------');
  const context = useContext(userModalUIContext);
  if (!context) {
    throw new Error(
      'useUserModalUIContext must be used within a ModalUIProvider',
    );
  }
  return context;
};

export const ModalUIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modalState, setModalState] = useState<ModalState>(
    MODAL_STATUS.WALLET_CONNECT,
  );
  const [isWalletLoading, setIsWalletLoading] = useState<boolean>(false);

  return (
    <userModalUIContext.Provider
      value={{ modalState, setModalState, isWalletLoading, setIsWalletLoading }}
    >
      {children}
    </userModalUIContext.Provider>
  );
};
