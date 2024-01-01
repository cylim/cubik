'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { CreateProjectModal } from '@/components/create-project';
import { useCreateProject } from '@/hooks/useCreateProject';

import { Navbar } from '@cubik/ui';

import NavbarButton from './navbar-button';

const TopNavbar = () => {
  const pathname = usePathname();
  const { onClose, open } = useCreateProject();
  return (
    <div className="top-0 z-[1] w-screen">
      <CreateProjectModal onClose={onClose} open={open} />
      <Navbar pathname={pathname}>
        <NavbarButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
