'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';
import DocsTabsHOC from '@/app/home-page-components/components/Tabs';

import { Button, Text } from '@cubik/ui';

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
      description="Button is used to initiate actions on a page or form."
    >
      <DocsTabsHOC>
        <div className="flex flex-col gap-8 py-8">
          <div className="flex flex-col gap-4 py-8">
            <Text className="h4" color="primary">
              Sizes
            </Text>
            <div className="rounded-md border border-[var(--color-border-primary-base)] bg-[var(--color-primary-surface-subdued)] p-10">
              <div className="align-center flex flex-row flex-wrap justify-start gap-12">
                <Button size={'sm'}>Button</Button>
                <Button size="md">Button</Button>
                <Button size="lg">Button</Button>
                <Button size="xl">Button</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-8">
            <Text className="h4" color="primary">
              Variant
            </Text>
            <div className="rounded-md border border-[var(--color-border-primary-base)] bg-[var(--color-primary-surface-subdued)] p-10">
              <div className="align-center flex flex-row flex-wrap justify-start gap-12">
                <Button
                  className=""
                  size={'lg'}
                  variant={'primary'}
                  leftIconName="plus"
                >
                  Button
                </Button>
                <Button size={'lg'} variant={'secondary'} leftIconName="plus">
                  Button
                </Button>
                <Button size={'lg'} variant={'outline'} leftIconName="plus">
                  Button
                </Button>
                <Button size={'lg'} variant={'link'} leftIconName="plus">
                  Button
                </Button>
                <Button size={'lg'} variant={'danger'} leftIconName="plus">
                  Button
                </Button>
                <Button size={'lg'} variant={'success'} leftIconName="plus">
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-8">
            <Text className="h4" color="primary">
              Loading
            </Text>
            <div className="rounded-md border border-[var(--color-border-primary-base)] bg-[var(--color-primary-surface-subdued)] p-10">
              <div className="align-center flex flex-row flex-wrap justify-start gap-12">
                <Button size={'sm'} isLoading>
                  Loading
                </Button>
                <Button size="md" isLoading>
                  Loading
                </Button>
                <Button size="lg" isLoading>
                  Loading
                </Button>
                <Button size="xl" isLoading>
                  Loading
                </Button>
              </div>
            </div>
          </div>
        </div>
        <CodeComponent codeString='import { Button } from "@cubik/ui"' />
        <></>
      </DocsTabsHOC>
    </PageHOC>
  );
};

export default ButtonPage;
