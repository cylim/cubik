'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import { handleLogout } from '@/utils/auth/logout';
import { v4 as uuidV4 } from 'uuid';

import { formatAddress } from '@cubik/common';
import { UserAuth } from '@cubik/common-types';
import { handleRevalidation } from '@cubik/common/helper';
import {
  Avatar,
  AvatarLabelGroup,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Switch,
  useTheme,
} from '@cubik/ui';
import { useCubikWallet, useCubikWalletContext } from '@cubik/wallet';

const UserNavbarMenu = ({
  user,
  setUser,
  disconnect,
}: {
  user: UserAuth | null;
  setUser: (userData: UserAuth | null) => any;
  disconnect: () => any;
}) => {
  const { toggleTheme } = useTheme();
  const pathname = usePathname();
  return (
    <Menu>
      <MenuButton>
        <div className="flex flex-row items-center justify-start gap-2">
          <Avatar
            src={user?.profilePicture || ''}
            alt={user?.username || ''}
            size={'sm'}
            variant={'circle'}
          />
          <Icon
            name="chevronDown"
            color="var(--color-fg-primary-depth)"
            width={16}
            height={16}
          />
        </div>
      </MenuButton>
      <MenuList>
        <div className="w-full border-b border-b-[var(--color-border-primary-subdued)] px-3 pb-1">
          <AvatarLabelGroup
            avatarSrc={user?.profilePicture || ''}
            title={user?.username || ''}
            shape="circle"
            size="md"
            description={formatAddress(user?.mainWallet || '')}
          />
        </div>
        <Link href={'/' + user?.username}>
          <MenuItem text="Profile" leftIcon="user" onClick={() => {}} />
        </Link>
        <MenuItem text="Settings" leftIcon="settings" />
        <Link href={`/create/project?id=${uuidV4()}`}>
          <MenuItem text="New Project" leftIcon="plus" />
        </Link>
        <MenuDivider />
        <MenuItem text="Dark" leftIcon="moon">
          <Switch onChange={toggleTheme} size="sm" checked />
        </MenuItem>

        <MenuItem
          text="Logout"
          variant={'negative'}
          leftIcon="logoutRight"
          onClick={() => {
            setUser(null);
            disconnect();
            handleLogout();
            handleRevalidation(pathname);
          }}
        />
      </MenuList>
    </Menu>
  );
};

export const WalletConnect = () => {
  const { connected, publicKey, disconnect } = useCubikWallet();
  const { showModal, setShowModal } = useCubikWalletContext();
  const { setUser, user } = useUser();

  if (!connected && !publicKey && !user) {
    return (
      <Button size="lg" onClick={() => setShowModal(true)}>
        Connect Wallet
      </Button>
    );
  }

  if (connected && publicKey && !user && showModal) {
    return (
      <Button isLoading LoadingText="Connecting Wallet" size="lg">
        Connect Wallet
      </Button>
    );
  }

  return (
    <>
      <div className="cursor-pointer">
        <UserNavbarMenu user={user} setUser={setUser} disconnect={disconnect} />
      </div>
    </>
  );
};
