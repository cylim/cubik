'use client';

import React, { useState } from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
} from '@cubik/ui';
import { cn } from '@cubik/ui/lib/utils';
import { UserModal } from '@cubik/wallet';

const Page = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <PageHOC
        pages={[
          { name: 'Component', href: '/components', current: false },
          { name: 'Drawer', href: '/component/drawer', current: true },
        ]}
        heading={'Drawer'}
        description=""
      >
        <div>
          <div className="overflow-hidden rounded-[8px] border border-[var(--color-border-primary)] bg-[var(--white)] px-6 py-4">
            <CodeComponent codeString='import { Drawer } from "@cubik/ui"' />
          </div>
          <Button onClick={() => setOpen(true)}>Test Button</Button>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerPortal>
              <DrawerOverlay />
              <DrawerContent className={cn('h-max')}>
                <DrawerBody>
                  <div className="min-h-[80vh]"> hello world </div>
                </DrawerBody>
              </DrawerContent>
            </DrawerPortal>
          </Drawer>
        </div>
      </PageHOC>
    </>
  );
};

export default Page;
