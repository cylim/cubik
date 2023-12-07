import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { Text } from '../text/text';

interface MenuProps {
  children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>;
};

interface MenuButtonProps {
  children: React.ReactNode;
}

const MenuButton = ({ children }: MenuButtonProps) => {
  return <DropdownMenu.Trigger>{children}</DropdownMenu.Trigger>;
};

interface MenuListProps {
  children: React.ReactNode;
  align?: 'end' | 'start' | 'center';
}

const MenuList = ({ children, align = 'end' }: MenuListProps) => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className="min-w-[220px] border border-[var(--menu_list-border)] bg-[var(--menu_list-surface)] rounded-xl will-change-[opacity,transform] p-2"
        sideOffset={10}
        align={align}
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
};

interface MenuItemProps {
  children?: React.ReactNode;
  text: string;
  leftIcon?: keyof typeof iconLibrary;
}

const MenuItem = ({ children, text, leftIcon }: MenuItemProps) => {
  return (
    <DropdownMenu.Item className="relative cursor-pointer p-2 hover:bg-[var(--menu_list_item-surface-hovered)] hover:text-[var(--menu_list_item-fg-hovered)] hover:stroke-[var(--menu_list_item-fg-hovered)] stroke-[var(--menu_list_item-surface-default)] focus-visible:outline-none">
      <div className="flex justify-between">
        <div className="flex gap-2">
          {leftIcon && (
            <Icon name={leftIcon} stroke="inherit" height={20} width={20} />
          )}
          <Text className="l2" color={'inherit'}>
            {text}
          </Text>
        </div>
        {children}
      </div>
    </DropdownMenu.Item>
  );
};

interface SubMenuProps {
  children: React.ReactNode;
}

const SubMenu = ({ children }: SubMenuProps) => {
  return <DropdownMenu.Sub>{children}</DropdownMenu.Sub>;
};

interface SubMenuButtonProps {
  children: React.ReactNode;
}

const SubMenuButton = ({ children }: SubMenuButtonProps) => {
  return (
    <DropdownMenu.SubTrigger className="relative cursor-pointer hover:bg-[var(--menu_list_item-surface-hovered)] hover:text-[var(--menu_list_item-fg-hovered)] hover:stroke-[var(--menu_list_item-fg-hovered)] stroke-[var(--menu_list_item-surface-default)] focus-visible:outline-none">
      <div className="flex justify-between items-center ">
        <Text className="l2 p-2">{children}</Text>
        <Icon name="chevronRight" height={20} width={20} stroke="inherit" />
      </div>
    </DropdownMenu.SubTrigger>
  );
};

interface SubMenuListProps {
  children: React.ReactNode;
}

const SubMenuList = ({ children }: SubMenuListProps) => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent
        className="min-w-[220px] border border-[var(--menu_list-border)] bg-[var(--menu_list-surface)] rounded-xl will-change-[opacity,transform] p-2"
        sideOffset={20}
      >
        {children}
      </DropdownMenu.SubContent>
    </DropdownMenu.Portal>
  );
};

const MenuDivider = () => {
  return (
    <DropdownMenu.Separator className="border border-[var(--menu_list-border)] -mx-2 my-2" />
  );
};

interface SubMenuListProps {
  children: React.ReactNode;
}

export {
  MenuList,
  MenuButton,
  Menu,
  MenuItem,
  SubMenu,
  SubMenuButton,
  SubMenuList,
  MenuDivider,
};
