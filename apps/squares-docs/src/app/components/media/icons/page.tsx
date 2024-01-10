'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';

import {
  Button,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@cubik/ui';

// import { Button } from '@cubik/ui';

const AllIcons = () => {
  return (
    <>
      <Icon
        name="walletPlusDuoSolid"
        width={44}
        height={44}
        color="var(--color-fg-info-base)"
        strokeWidth={3.5}
      />
      <Icon
        name="dangerSkullDuoSolid"
        width={44}
        height={44}
        color="var(--color-fg-info-base)"
        strokeWidth={3.5}
      />
    </>
  );
};

const IconsPage = () => {
  return (
    <PageHOC
      pages={[
        { name: 'Component', href: '/icons', current: false },
        {
          name: 'icons',
          href: '/component/icons',
          current: true,
        },
      ]}
      heading={'Icons'}
      description="Commonly used icons in the cubik design system."
    >
      <div className=" flex flex-col gap-4">
        <div className="mx-auto w-full">
          <Tabs size="sm" defaultValue={0}>
            <div className="overflow-scroll ">
              <TabList className="border-b border-b-[var(--color-border-primary-base)]">
                <Tab value={0}>Overview</Tab>
                <Tab value={1}>Code</Tab>
                <Tab value={2}>Design</Tab>
              </TabList>
            </div>
            <TabPanels>
              <TabPanel value={0}>
                <AllIcons />
              </TabPanel>
              <TabPanel value={1}>
                <CodeComponent codeString='import { Button } from "@cubik/ui"' />
              </TabPanel>
              <TabPanel value={2}> </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </PageHOC>
  );
};

export default IconsPage;
