'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Logo, Tag, TagLabel, Text } from '@cubik/ui';

import { VerifyModal } from '../modals/verifyModal';
import { HandleConnect } from './handleConnect';

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const backgroundColor = pathname === '/' ? '' : 'bg-[var(--body-surface)]';

  return (
    <>
      <VerifyModal open={open} setOpen={setOpen} />
      <div className={`w-full ${backgroundColor}`}>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-4 md:p-6">
          <div className="flex justify-start gap-10">
            <div className="flex items-center justify-center gap-2">
              <Logo size="sm" />
              <Tag
                border={true}
                size="desktop"
                color={'yellow'}
                variant="solid"
              >
                <TagLabel>Admin</TagLabel>
              </Tag>
            </div>
          </div>
          <HandleConnect />
        </div>
      </div>
    </>
  );
};
