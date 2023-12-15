'use client';

import React from 'react';
import { useUser } from '@/context/user';

import {
  Avatar,
  AvatarLabelGroup,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useTheme,
} from '@cubik/ui';

export const UserInteraction = () => {
  const { user } = useUser();
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Menu>
        <MenuButton>
          <div className="flex flex-row items-center justify-center gap-2 rounded-full p-1">
            <Avatar
              size={'sm'}
              variant={'circle'}
              src={user?.profilePicture as string}
              alt={user?.username as string}
            />
            <Icon
              name="chevronDown"
              height={20}
              width={20}
              stroke="var(--color-fg-primary-depth)"
            />
          </div>
        </MenuButton>
        <MenuList>
          <div className="flex border-b border-[var(--color-border-primary-base)] px-3 py-2">
            <AvatarLabelGroup
              shape="circle"
              avatarSrc={user?.profilePicture as string}
              title={user?.username as string}
              description={user?.mainWallet.slice(0, 5) as string}
              size={'md'}
            />
          </div>
          <MenuItem leftIcon="externalLink" text="Open Website" />
          <MenuItem onClick={toggleTheme} leftIcon="moon" text={theme} />
          <MenuItem leftIcon="logoutRight" text="Logout" />
        </MenuList>
      </Menu>
    </div>
  );
};
