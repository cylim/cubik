'use client';

import React, { useState } from 'react';

import { Logo, Tag, Text } from '@cubik/ui';

import { VerifyModal } from '../modals/verifyModal';
import { HandleConnect } from './handleConnect';

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <VerifyModal open={open} setOpen={setOpen} />
      <div className="w-full dark:bg-neutral-800">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-6">
          <div className="flex justify-start gap-10">
            <div className="flex items-center justify-center">
              <Logo />
              <Tag size="desktop" color={'yellow'} variant="solid">
                Admin
              </Tag>
            </div>
            <div className="flex items-center justify-center gap-5">
              <Text color={'primary'} className="l1">
                Quadratic Funding
              </Text>
              <Text color={'primary'} className="l1">
                RPGF
              </Text>
              <Text color={'primary'} className="l1">
                Projects
              </Text>
            </div>
          </div>
          <HandleConnect />
        </div>
      </div>
    </>
  );
};
