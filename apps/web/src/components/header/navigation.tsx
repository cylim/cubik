'use client';

import React, { useEffect } from 'react';
import { useUser } from '@/hooks/useUser';

import { Navbar } from '@cubik/ui';
import { useUnifiedWallet } from '@cubik/wallet-connect';

import NavbarButton from './navbar-button';

const TopNavbar = () => {
  const { setUser } = useUser();
  const { publicKey, connected } = useUnifiedWallet();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('something-something');
        const userRes = await fetch('/api/auth/decode', {
          method: 'GET',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const dataRes = await userRes.json();
        const user = dataRes.data;
        if (dataRes.data) {
          setUser({
            id: user.id,
            mainWallet: user.mainWallet,
            profilePicture: user.profilePicture,
            username: user.username,
          });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, [connected, publicKey]);
  return (
    <div className="sticky top-0 z-[1] w-screen">
      <Navbar>
        <NavbarButton />
      </Navbar>
    </div>
  );
};

export default TopNavbar;
