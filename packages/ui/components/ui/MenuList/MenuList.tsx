import React, { ReactEventHandler } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cva, VariantProps } from 'class-variance-authority';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn } from '../../../lib/utils';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerProps,
} from '../Drawer/Drawer';
import { Text } from '../text/text';

interface MenuProps {
  children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>;
};

const DrawerMenu = ({
  open,
  children,
  onOpenChange,
  ...props
}: DrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} {...props}>
      {children}
    </Drawer>
  );
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
        className="py-2 min-w-[220px] shadow-lg border border-[var(--menu-list-item-border)] bg-[var(--menu-list-surface)] rounded-xl will-change-[opacity,transform] flex flex-col gap-2"
        sideOffset={10}
        align={align}
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
};
const DrawerMenuList = ({ children }: MenuListProps) => {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody className="py-2 pb-8 min-w-[220px] min-h-[20vh] shadow-lg rounded-xl will-change-[opacity,transform] flex flex-col gap-2">
          {children}
        </DrawerBody>
      </DrawerContent>
    </DrawerPortal>
  );
};

const MenuItemVariants = cva('relative p-2 mx-2 focus-visible:outline-none', {
  variants: {
    variant: {
      primary:
        'text-[var(--menu-list-item-fg-default)] stroke-[var(--menu-list-item-icon)] hover:bg-[var(--menu-list-item-surface-hovered)] hover:rounded-lg hover:text-[var(--menu-list-item-fg-hovered)] hover:stroke-[var(--menu-list-item-hovered)]',
      negative:
        'text-[var(--color-bg-negative-base)] stroke-[var(--color-bg-negative-base)] hover:bg-[var(--color-surface-negative-transparent)] hover:rounded-lg hover:text-[var(--color-bg-negative-base)] hover:stroke-[var(--color-bg-negative-base)]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface MenuItemProps extends VariantProps<typeof MenuItemVariants> {
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
  variant = 'primary',
}: MenuItemProps) => {
  const itemProps: {
    onClick?: () => void;
    className: string;
    onSelect?: (event: Event) => void; // Define onSelect property
  } = {
    onClick: isLoading ? () => {} : onClick,
    className: cn(
      isLoading ? 'cursor-not-allowed' : 'cursor-pointer',
      MenuItemVariants({ variant }),
      '',
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
            <Icon name={leftIcon} color="inherit" height={20} width={20} />
          )}
          <Text className="b1 md:l2-light" color={'inherit'}>
            {text}
          </Text>
          {isLoading && (
            <Icon
              name={'spinner'}
              color="inherit"
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
const DrawerMenuItem = ({
  children,
  text,
  leftIcon,
  onClick,
  isLoading,
  variant = 'primary',
}: MenuItemProps) => {
  const itemProps: {
    onClick?: () => void;
    className: string;
    onSelect?: ReactEventHandler<HTMLButtonElement> | undefined;
  } = {
    onClick: isLoading ? () => {} : onClick,
    className: cn(
      isLoading ? 'cursor-not-allowed' : 'cursor-pointer',
      children ? '' : MenuItemVariants({ variant }),
      '',
    ),
  };
  if (children) {
    itemProps.onSelect = (e) => e.preventDefault();
  }
  return (
    <button
      onClick={itemProps.onClick}
      className={itemProps.className}
      onSelect={itemProps.onSelect}
    >
      {' '}
      <div className="flex justify-between">
        <div className="flex gap-[10px] items-center ">
          {leftIcon && (
            <Icon name={leftIcon} color="inherit" height={20} width={20} />
          )}
          <Text className="b2 md:l2-light" color={'inherit'}>
            {text}
          </Text>
          {isLoading && (
            <Icon
              name={'spinner'}
              color="inherit"
              height={18}
              width={18}
              className={cn('animate-spin')}
            />
          )}
        </div>
        {children}
      </div>
    </button>
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
    <DropdownMenu.SubTrigger className="relative cursor-pointer hover:bg-[var(--menu-list-item-surface-hovered)] text-[var(--menu-list-item-fg-default)] hover:text-[var(--menu-list-item-fg-hovered)] hover:rounded-lg hover:stroke-[var(--menu-list-item-hovered)] stroke-[var(--menu-list-item-icon)] focus-visible:outline-none p-2 py-2 mx-2">
      <div className="flex justify-between items-center ">
        <div className="flex gap-[10px] items-center ">
          {leftIcon && (
            <Icon name={leftIcon} color="inherit" height={20} width={20} />
          )}
          <Text className="l1 md:l2-light">{children}</Text>
        </div>

        <Icon name="chevronRight" height={20} width={20} color="inherit" />
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
        className="py-2 min-w-[220px] shadow-xl border border-[var(--menu-list-item-border)] bg-[var(--menu-list-surface)] rounded-xl will-change-[opacity,transform] flex flex-col gap-2"
        sideOffset={20}
      >
        {children}
      </DropdownMenu.SubContent>
    </DropdownMenu.Portal>
  );
};

// const SubMenuList = ({ children }: SubMenuListProps) => {
//   return (
//     <DropdownMenu.Portal>
//       <DropdownMenu.SubContent
//         className="min-w-[220px] border border-[var(--menu-list-item-border)] bg-[var(--menu-list-surface)] rounded-xl will-change-[opacity,transform] p-2 mx-2"
//         sideOffset={20}
//       >
//         {children}
//       </DropdownMenu.SubContent>
//     </DropdownMenu.Portal>
//   );
// };

const MenuDivider = () => {
  return (
    <DropdownMenu.Separator className="border-t-[1px] border-[var(--color-border-primary-subdued)]" />
  );
};

interface SubMenuListProps {
  children: React.ReactNode;
}

export {
  MenuList,
  DrawerMenuList,
  MenuButton,
  Menu,
  DrawerMenu,
  MenuItem,
  DrawerMenuItem,
  SubMenu,
  SubMenuButton,
  SubMenuList,
  MenuDivider,
};
