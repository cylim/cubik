// src/context/UserModalContext.tsx
import React, { createContext, useContext, useState } from 'react';

type ModalState =
  | 'wallet-connect'
  | 'wallet-verify'
  | 'user-create'
  | 'connecting'
  | 'error-connecting'
  | null;

interface ModalUIContext {
  modalState: ModalState;
  setModalState: (state: ModalState) => void;
  isWalletLoading: boolean;
  setIsWalletLoading: (loading: boolean) => void;
}

export const userModalUIContext = createContext<ModalUIContext | null>(null);

export const useUserModalUIContext = () => {
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
  const [modalState, setModalState] = useState<ModalState>('wallet-connect');
  const [isWalletLoading, setIsWalletLoading] = useState<boolean>(false);

  return (
    <userModalUIContext.Provider
      value={{ modalState, setModalState, isWalletLoading, setIsWalletLoading }}
    >
      {children}
    </userModalUIContext.Provider>
  );
};
