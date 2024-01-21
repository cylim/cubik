import React from 'react';

import { Explorer, explorerLink, ExplorerLinkType } from '@cubik/common/solana';

import { MenuItem, SubMenuList } from './../MenuList';

interface Props {
  address: string;
  type: ExplorerLinkType;
}
export const ViewOnExplorer = ({ address, type }: Props) => {
  const createLink = (explorerType: Explorer) => {
    return explorerLink(explorerType, type, address);
  };
  return (
    <SubMenuList>
      <MenuItem
        onClick={() => {
          window.open(createLink(Explorer.SolanaExplorer), '_blank');
        }}
        text="Solana Explorer"
        leftIcon="solanaExplorer"
      />
      <MenuItem
        text="Solana FM"
        onClick={() => {
          window.open(createLink(Explorer.SolanaFM), '_blank');
        }}
        leftIcon="solanaFM"
      />
      <MenuItem
        text="Solscan"
        onClick={() => {
          window.open(createLink(Explorer.Solscan), '_blank');
        }}
        leftIcon="solscan"
      />
      <MenuItem
        text="xRay"
        onClick={() => {
          window.open(createLink(Explorer.XRAY), '_blank');
        }}
        leftIcon="xRay"
      />
    </SubMenuList>
  );
};
