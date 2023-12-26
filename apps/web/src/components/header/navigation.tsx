'use client';

import React, { useEffect } from 'react';
import { useUser } from '@/hooks/useUser';
import { useParams } from 'next/navigation';

import { Navbar } from '@cubik/ui';
import { useCubikWallet } from '@cubik/wallet';

import NavbarButton from './navbar-button';

const TopNavbar = () => {
  const { setUser } = useUser();
  const { publicKey, connected } = useCubikWallet();
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
    <div className="sticky top-0 z-[1] w-screen">
      <Navbar>
        <NavbarButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
