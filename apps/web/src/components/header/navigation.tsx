import React from 'react';

import { Navbar } from '@cubik/ui';
import { UnifiedWalletButton } from '@cubik/wallet-connect';

const TopNavbar = () => {
  return (
    <div className="sticky top-0 z-[1] w-screen">
      <Navbar>
        <UnifiedWalletButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
