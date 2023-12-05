import React from 'react';

import { Navbar } from '@cubik/ui';

import NavbarButton from './navbar-button';

const TopNavbar = () => {
  return (
    <div className="sticky top-0 z-[1] w-screen">
      <Navbar>
        <NavbarButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
