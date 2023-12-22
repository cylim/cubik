import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn } from '../../../lib/utils';
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
        className="pb-2 min-w-[220px] shadow-xl border border-[var(--menu-list-item-border)] bg-[var(--menu-list-surface)] rounded-xl will-change-[opacity,transform] flex flex-col gap-2"
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
  onClick?: () => void;
  isLoading?: boolean;
}

const MenuItem = ({
  children,
  text,
  leftIcon,
  onClick,
  isLoading,
}: MenuItemProps) => {
  const itemProps: {
    onClick?: () => void;
    className: string;
    onSelect?: (event: Event) => void; // Define onSelect property
  } = {
    onClick: isLoading ? () => {} : onClick,
    className: cn(
      isLoading ? 'cursor-not-allowed' : 'cursor-pointer',
      children
        ? ''
        : 'hover:bg-[var(--menu-list-item-surface-hovered)] hover:rounded-lg hover:text-[var(--menu-list-item-fg-hovered)] hover:stroke-[var(--menu-list-item-hovered)]',
      'relative p-2 mx-2 text-[var(--menu-list-item-fg-default)] stroke-[var(--menu-list-item-icon)] focus-visible:outline-none',
    ),
  };
  if (children) {
    itemProps.onSelect = (e) => e.preventDefault();
  }
  return (
    <DropdownMenu.Item {...itemProps}>
      <div className="flex justify-between">
        <div className="flex gap-[10px] items-center ">
          {leftIcon && (
            <Icon name={leftIcon} stroke="inherit" height={20} width={20} />
          )}
          <Text className="l2" color={'inherit'}>
            {text}
          </Text>
          {isLoading && (
            <Icon
              name={'spinner'}
              stroke="inherit"
              height={18}
              width={18}
              className={cn('animate-spin')}
            />
          )}
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
  leftIcon?: keyof typeof iconLibrary;
}

const SubMenuButton = ({ children, leftIcon }: SubMenuButtonProps) => {
  return (
    <DropdownMenu.SubTrigger className="relative cursor-pointer hover:bg-[var(--menu-list-item-surface-hovered)] text-[var(--menu-list-item-fg-default)] hover:text-[var(--menu-list-item-fg-hovered)] hover:rounded-lg hover:stroke-[var(--menu-list-item-hovered)] stroke-[var(--menu-list-item-icon)] focus-visible:outline-none p-2 py-2">
      <div className="flex justify-between items-center ">
        <div className="flex gap-[10px] items-center ">
          {leftIcon && (
            <Icon name={leftIcon} stroke="inherit" height={20} width={20} />
          )}
          <Text className="l2 ">{children}</Text>
        </div>

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
        className="min-w-[220px] border border-[var(--menu-list-item-border)] bg-[var(--menu-list-surface)] rounded-xl will-change-[opacity,transform] p-2"
        sideOffset={20}
      >
        {children}
      </DropdownMenu.SubContent>
    </DropdownMenu.Portal>
  );
};

const MenuDivider = () => {
  return (
    <DropdownMenu.Separator className="border border-[var(--color-border-primary-subdued)] -mx-2 my-2" />
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
