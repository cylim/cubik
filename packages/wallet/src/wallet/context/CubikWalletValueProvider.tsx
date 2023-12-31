import { useMemo } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

import { CubikWalletValueContext } from './CubikContext';

export const CubikWalletValueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const defaultWalletContext = useWallet();

  const value = useMemo(() => {
    return {
      ...defaultWalletContext,
      connect: async () => {
        try {
          return await defaultWalletContext.connect();
        } catch (error) {
          // when wallet is not installed
        }
      },
    };
  }, [defaultWalletContext]);

  return (
    <CubikWalletValueContext.Provider value={value}>
      {children}
    </CubikWalletValueContext.Provider>
  );
};
