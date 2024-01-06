import React from 'react';

import { Icon, Text } from '@cubik/ui';

interface Props {
  onClose: () => void;
}
const walletHeader = ({ onClose }: Props) => {
  return (
    <div className="hidden md:flex justify-between items-center h-[44px] md:h-[48px] px-[16px] md:px-[24px]">
      <Text color={'primary'} className="text-[var(--avatar-label-title)] h6">
        Connect Wallet
      </Text>
      <button className="pointer-events-auto" onClick={onClose}>
        <Icon
          name="cross"
          width={20}
          color="var(--modal-header-cancel-icon)"
          height={20}
        />
      </button>
    </div>
  );
};

export default walletHeader;
