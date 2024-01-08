'use client';

import { usePathname } from 'next/navigation';

import { Navbar } from '@cubik/ui';

import NavbarButton from './navbar-button';

const TopNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="top-0 z-[1] w-screen">
      <Navbar pathname={pathname}>
        <NavbarButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
