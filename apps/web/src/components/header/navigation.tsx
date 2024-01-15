'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { Navbar } from '@cubik/ui';

import NavbarButton from './navbar-button';

const TopNavbar = () => {
  const pathname = usePathname();
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    if (showTopBar) {
      setTimeout(() => {
        setShowTopBar(false);
      }, 2000);
    }
  }, [showTopBar]);

  return (
    <div className="top-0 z-[1] w-screen">
      <AnimatePresence>
        {showTopBar && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 48 }}
            exit={{ opacity: 0, height: 0 }}
            className={`h-12 bg-[var(--color-bg-positive-base)] w-full`}
          ></motion.div>
        )}
      </AnimatePresence>
      <Navbar pathname={pathname}>
        <NavbarButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
