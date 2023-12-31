import { useCallback, useEffect, useState } from 'react';
import { Adapter, WalletReadyState } from '@solana/wallet-adapter-base';
import { Wallet } from '@solana/wallet-adapter-react';
import { toast } from 'sonner';

import { useCubikWallet } from '../context/CubikContext';

interface Props {
  autoConnect?: boolean;
  setSelectWallet: React.Dispatch<React.SetStateAction<Wallet | null>>;
}
export const useHandleConnect = ({ autoConnect, setSelectWallet }: Props) => {
  const { wallet, select, connect } = useCubikWallet();
  const [nonAutoConnectAttempt, setNonAutoConnectAttempt] = useState(false);
  useEffect(() => {
    if (nonAutoConnectAttempt && !autoConnect && wallet?.adapter.name) {
      try {
        connect();
      } catch (error) {
        console.log(error, '-handleConnect-');
        // setIsError(error);
        // when wallet is not installed
      }
      setNonAutoConnectAttempt(false);
    }
  }, [nonAutoConnectAttempt, wallet?.adapter.name]);

  const handleConnectClick = useCallback(
    async (
      event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>,
      adapter: Adapter,
    ) => {
      event.preventDefault();

      try {
        // Might throw WalletReadyState.WalletNotReady
        select(adapter.name);
        setSelectWallet({
          adapter,
          readyState: adapter.readyState,
        });
        // Weird quirks for autoConnect to require select and connect
        if (!autoConnect) {
          setNonAutoConnectAttempt(true);
        }

        if (adapter.readyState === WalletReadyState.NotDetected) {
          throw WalletReadyState.NotDetected;
        }
      } catch (e) {
        const error = e as Error;
        console.log(error, '-sss-');
        // setIsError({
        //   error,
        //   message: error.message,
        //   name: error.name,
        //   stack: error.stack,
        // });
        alert('Wallet not installed');
        toast.error('Wallet not installed');
      }
    },
    [select, connect, wallet?.adapter.name],
  );

  return handleConnectClick;
};
