import { useMemo } from 'react';
import {
  BaseSignerWalletAdapter,
  WalletAdapterNetwork,
} from '@solana/wallet-adapter-base';
import * as AllWalletAdapters from '@solana/wallet-adapter-wallets';

import { WalletAdapterWithMutableSupportedTransactionVersions } from '../misc/supportedTxVersion';

//
export const useFormattedWallet = () => {
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
            options: {},
          });

        return adapter;
      })();

    return [...walletAdapters, walletConnectWalletAdapter].filter(
      (item) => item && item.name && item.icon,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [wallets];
};
