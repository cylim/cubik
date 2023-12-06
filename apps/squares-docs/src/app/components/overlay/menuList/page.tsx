'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';

import { Alert } from '@cubik/ui';

const MenuListPage = () => {
  return (
    <>
      <PageHOC
        pages={[
          { name: 'Component', href: '/components', current: false },
          { name: 'MenuList', href: '/component/menuList', current: true },
        ]}
        heading={'MenuList'}
        description={'Use the menulist to show menu options'}
      >
        <div className="border-[var(--color-border-primary) overflow-hidden rounded-[8px] border bg-[var(--white)] px-6 py-4">
          <CodeComponent codeString='import { Progress } from "@cubik/ui"' />
        </div>
        <div className="mt-10 flex flex-col gap-5"></div>
      </PageHOC>
    </>
  );
};

export default MenuListPage;
