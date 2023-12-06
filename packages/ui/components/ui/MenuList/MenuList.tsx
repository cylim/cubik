import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface MenuListProps {
  children: React.ReactNode;
}

const MenuList = ({ children }: MenuListProps) => {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>;
};

export { MenuList };
