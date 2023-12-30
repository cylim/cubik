import { BaseWalletAdapter } from '@solana/wallet-adapter-base';

export type WalletAdapterWithMutableSupportedTransactionVersions<T> = Omit<
  T,
  'supportedTransactionVersions'
> & {
  supportedTransactionVersions: BaseWalletAdapter['supportedTransactionVersions'];
};
