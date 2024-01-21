'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import { Avatar, Icon } from '@cubik/ui';
import { useMediaQuery } from '@cubik/ui/hooks';

import { useUser } from '../../hooks/useUser';

const BottomNav = () => {
  const user = useUser();
  const isMobile = useMediaQuery('max-width: 768px');
  const pathname = usePathname();
  if (!user.user && !isMobile) return <></>;
  // useEffect(() => {
  //   switch (activeTabs) {
  //     case 'home':
  //       //router.push('/')
  //       break;
  //     case 'search':
  //       //router.push('/search')
  //       break;
  //     case 'saved':
  //       //router.push('/saved')
  //       break;
  //     case 'dhruvsol':
  //       //router.push('/account')
  //       break;
  //     default:
  //       //router.push('/')
  //       break;
  //   }
  // }, [activeTabs]);

  return (
    <div className="fixed bottom-0 h-[80px] w-[100%] border-t border-[var(--color-border-primary-base)] bg-[var(--body-surface)]">
      <div
        className={
          'mx-auto flex w-full max-w-[348px] translate-y-[1px] flex-row items-center justify-between px-[16px]'
        }
      >
        <Link href={`/`}>
          <div className="relative w-fit">
            {pathname === '/' && (
              <motion.div
                layoutId={'bottom navbar'}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                className={`absolute left-[-6px] top-[-16px] h-[2px] w-[40px] bg-[var(--tab-fg-active)]`}
              />
            )}
            <Icon
              name={'home'}
              color="var(--color-fg-primary-depth)"
              width={28}
              height={28}
            />
          </div>
        </Link>
        <div className="relative w-fit">
          {pathname === '/search' && (
            <motion.div
              layoutId={'bottom navbar'}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              className={`absolute left-[-6px] top-[-16px] h-[2px] w-[40px] bg-[var(--tab-fg-active)]`}
            />
          )}
          <Icon
            name={'search'}
            width={28}
            color="var(--color-fg-primary-depth)"
            height={28}
          />
        </div>
        <div className={'p-3'}>
          <Icon
            name={'bell'}
            width={28}
            color="var(--color-fg-primary-depth)"
            height={28}
          />
        </div>
        <Link href={`/${user.user?.username}`}>
          <div
            className={`${
              pathname.split('/')[1] === user.user?.username
                ? 'border-2 border-[var(--color-fg-primary-depth)]'
                : 'border-2 border-transparent'
            } relative flex items-center justify-center rounded-full`}
          >
            {pathname === `/${user.user?.username}` && (
              <motion.div
                layoutId={'bottom navbar'}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                className={`absolute left-[-6px] top-[-16px] h-[2px] w-[40px] bg-[var(--tab-fg-active)]`}
              />
            )}
            <Avatar
              size="sm"
              variant="circle"
              src={user.user?.profilePicture as string}
              alt={user.user?.username as string}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
