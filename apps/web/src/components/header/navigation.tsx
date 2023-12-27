'use client';

import React, { useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { useUser } from '@/hooks/useUser';

import { Navbar } from '@cubik/ui';
import { useCubikWallet } from '@cubik/wallet';

import NavbarButton from './navbar-button';

const TopNavbar = () => {
  const { setUser } = useUser();
  const { publicKey, connected } = useCubikWallet();
  const pathname = usePathname();
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const userRes = await fetch('/api/auth/decode', {
  //         method: 'GET',
  //         cache: 'no-cache',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       const dataRes = await userRes.json();
  //       const user = dataRes.data;
  //       if (dataRes.data) {
  //         setUser({
  //           id: user.id,
  //           mainWallet: user.mainWallet,
  //           profilePicture: user.profilePicture,
  //           username: user.username,
  //         });
  //       } else {
  //         setUser(null);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   checkAuth();
  // }, [connected, publicKey]);
  return (
    <div className="top-0 z-[1] w-screen">
      <Navbar pathname={pathname}>
        <NavbarButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
