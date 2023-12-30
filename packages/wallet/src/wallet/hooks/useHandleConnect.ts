import { useCallback, useEffect, useState } from 'react';
import { Adapter, WalletReadyState } from '@solana/wallet-adapter-base';
import { toast } from 'sonner';

import { useCubikWallet } from '../context/CubikContext';

interface Props {
  autoConnect?: boolean;
}
export const useHandleConnect = ({ autoConnect }: Props) => {
  const { wallet, publicKey, select, connect, connected } = useCubikWallet();
  const [nonAutoConnectAttempt, setNonAutoConnectAttempt] = useState(false);
  useEffect(() => {
    if (nonAutoConnectAttempt && !autoConnect && wallet?.adapter.name) {
      try {
        connect();
      } catch (error) {
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

        // Weird quirks for autoConnect to require select and connect
        if (!autoConnect) {
          setNonAutoConnectAttempt(true);
        }

        if (adapter.readyState === WalletReadyState.NotDetected) {
          throw WalletReadyState.NotDetected;
        }
        toast.success('Wallet connected');
      } catch (error) {
        console.log(error);

        toast.error('Wallet not installed');
      }
    },
    [select, connect, wallet?.adapter.name],
  );

  return handleConnectClick;
};
