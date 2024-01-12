import React from 'react';

import { Button } from '@cubik/ui';

import {
  MODAL_STATUS,
  useCubikWallet,
  useCubikWalletContext,
  useUserModalUIContext,
} from '../wallet';

export const Migration = () => {
  const { modalState, setModalState } = useUserModalUIContext();
  const { disconnect } = useCubikWallet();
  const { setIsWalletError, setSelectedAdapter } = useCubikWalletContext();
  return (
    <div className="p-6 md:p-8 md:py-12 flex flex-col items-center justify-center gap-6 md:gap-8">
      <div className="flex items-center justify-center pt-[20rem]">
        {/* <div className={`mx-auto w-fit rounded-full ${icon.bg} p-4`}></div> */}
        <div className="flex justify-center items-center flex-col">
          <Button>Migrated Profile</Button>
          <Button
            onClick={() => {
              disconnect();
              setIsWalletError(null);
              setSelectedAdapter(null);
              setModalState(MODAL_STATUS.WALLET_CONNECT);
            }}
            size="md"
            variant="tertiary"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};
