'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';

import Button from '@cubik/ui/components/ui/Button/button';

// import { Button } from '@cubik/ui';

const ButtonPage = () => {
  return (
    <PageHOC
      pages={[
        { name: 'Component', href: '/components', current: false },
        {
          name: 'Input',
          href: '/component/button',
          current: true,
        },
      ]}
      heading={'Button'}
      description=""
    >
      <div>
        <div className="border-[var(--color-border-primary) overflow-hidden rounded-[8px] border bg-[var(--white)] px-6 py-4">
          <CodeComponent codeString='import { Button } from "@cubik/ui"' />
        </div>
        <div className="flex justify-center gap-20">
          <Button>Button</Button>
        </div>
      </div>
    </PageHOC>
  );
};

export default ButtonPage;
