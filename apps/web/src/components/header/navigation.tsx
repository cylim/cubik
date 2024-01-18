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
  const [banner, setBanner] = useState({
    show: false,
    timeout: 0,
    background: '#F4D03F',
  });
  const { theme } = useTheme();

  let background = 'bg-[var(--body-surface)]';
  if (pathname === '/' && theme === 'light')
    background =
      'bg-gradient-to-b from-[var(--body-surface)] to-transparent via-40% dark:from-[var(--body-surface)] dark:to-[var(--body-surface)] dark:via-10%';
  else if (pathname.includes('/create'))
    background =
      'light:bg-gradient-to-b light:from-[#fff] light:to-transparent light:via-10% dark:bg-transparent';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const themeMetaTag = document.querySelector('meta[name="theme-color"]');
      if (themeMetaTag) {
        if (pathname.includes('/create'))
          if (banner) {
            themeMetaTag.setAttribute('content', '#F4D03F');
          } else
            themeMetaTag.setAttribute(
              'content',
              theme === 'light' ? '#FAFAFA' : '#1A1A1A',
            );
        else {
          if (banner) {
          } else themeMetaTag.setAttribute('content', '#F4D03F');
        }
      }
    }
  }, [theme, pathname]);

  console.log(background);
  return (
    <div className="top-0 z-[1] w-screen">
      {banner.show && <Banner />}
      <Navbar pathname={pathname} className={background.toString()}>
        <NavbarButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
