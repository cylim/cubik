import React from 'react';
import { Wallet } from '@solana/wallet-adapter-react';

import WalletConnectStatus from './walletModalConnecting';

interface Props {
  connectingWallet: Wallet;
}
export const WalletConnecting = ({ connectingWallet }: Props) => {
  return (
    <WalletConnectStatus
      icon={connectingWallet.adapter.icon}
      name={connectingWallet.adapter.name}
      status={'connecting'}
    />
  );
};
