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
        <div className="flex flex-col justify-center gap-20">
          <Button type="primary" size="xl" disabled={true}>
            Button
          </Button>
          {/* <Button type="primary" size="lg">
            Button
          </Button>
          <Button type="primary" size="md">
            Button
          </Button>
          <Button type="primary" size="sm">
            Button
          </Button> */}

          <Button type="secondary" size="xl">
            Button
          </Button>
          <Button type="outline" size="xl">
            Button
          </Button>
          <Button type="tertiary" size="xl">
            Button
          </Button>
          <Button type="link" size="xl">
            Button
          </Button>
          <Button type="danger" size="xl">
            Button
          </Button>
          <Button type="success" size="xl">
            Button
          </Button>
        </div>
      </div>
    </PageHOC>
  );
};

export default ButtonPage;
