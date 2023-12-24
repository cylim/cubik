'use client';

import React from 'react';
import { revalidatePath } from 'next/cache';
import { AccessStore } from '@/hooks/store/scope';
import { useUser } from '@/hooks/store/user';
import { handleLogout } from '@/utils/auth';
import { handleRevalidation } from '@/utils/helpers/revalidate';
import { useMutation } from '@tanstack/react-query';

import {
  Avatar,
  AvatarLabelGroup,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  useTheme,
} from '@cubik/ui';
import { useCubikWallet } from '@cubik/wallet';

export const UserInteraction = () => {
  const { user, setUser } = useUser();
  const { disconnect } = useCubikWallet();
  const { setAccessScope } = AccessStore();
  const { theme, toggleTheme } = useTheme();
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await handleLogout();
      await disconnect();
      setUser(null);
      setAccessScope(null, undefined);
      handleRevalidation('/');
    },
  });
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
          <MenuItem leftIcon="moon" text={'dark'}>
            <Switch onChange={toggleTheme} size="sm" />
          </MenuItem>
          <MenuItem
            isLoading={logoutMutation.isLoading}
            onClick={logoutMutation.mutate}
            leftIcon="logoutRight"
            text="Logout"
          />
        </MenuList>
      </Menu>
    </div>
  );
};
