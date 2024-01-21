'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { env } from '@/env.mjs';
import { AnimatePresence, motion } from 'framer-motion';

import { Button, Navbar, Text, useTheme } from '@cubik/ui';

import NavbarButton from './navbar-button';

const Banner = () => {
  const [showTopBar, setShowTopBar] = useState(true);

  // useEffect(() => {
  //   if (showTopBar) {
  //     setTimeout(() => {
  //       setShowTopBar(false);
  //     }, 2000);
  //   }
  // }, [showTopBar]);
  return (
    <AnimatePresence>
      {showTopBar && (
        <motion.div
          layout
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 48 }}
          exit={{ opacity: 0, height: 0 }}
          className={`flex h-12 w-full items-center justify-between bg-[var(--color-bg-caution-base)]`}
        >
          <div className="flex w-full max-w-7xl flex-row items-center justify-between px-6">
            <Text className="l2" color="inverse">
              You are on devnet mode
            </Text>
            <Button size="sm" variant={'outline'}>
              Exit Devnet
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TopNavbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  let background = 'bg-[var(--body-surface)]';
  if (pathname === '/' && theme === 'light')
    background =
      'bg-gradient-to-b from-[var(--body-surface)] to-transparent via-40% dark:from-[var(--body-surface)] dark:to-[var(--body-surface)] dark:via-10%';
  else if (pathname === '/create/project')
    background =
      'bg-gradient-to-b from-[#fff] to-transparent via-10% dark:from-[var(--body-surface)] dark:to-transparent dark:via-10%';

  console.log(background);
  return (
    <div className="top-0 z-[1] w-screen">
      {/* <Banner /> */}
      <Navbar pathname={pathname} className={background.toString()}>
        <NavbarButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
