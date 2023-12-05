import React, { useMemo } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

import { Avatar } from '@cubik/ui';

import { useAccounts } from '../contexts/accounts';
import { WRAPPED_SOL_MINT } from '../misc/constants';

export const CurrentUserBadge: React.FC<{
  onClick?: () => void;
  className?: string;
}> = ({ onClick, className }) => {
  const { wallet, publicKey } = useWallet();
  const { accounts } = useAccounts();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const solBalance = useMemo(() => {
    if (accounts[WRAPPED_SOL_MINT.toString()]) {
      return accounts[WRAPPED_SOL_MINT.toString()].balance;
    }
    return 0;
  }, [publicKey, accounts]);

  if (!wallet || !publicKey) {
    return null;
  }

  return (
    <div
      onClick={onClick}
      className={`${className} flex justify-center items-center border border-red-500`}
    >
      <Avatar
        variant={'circle'}
        src={wallet?.adapter?.icon}
        size={'md'}
        alt={'wallet logo'}
      />
    </div>
  );
};
