'use client';

import React from 'react';
import { DetailsSection } from '@/app/grants/components/sections/details-section';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

import { MultisigSection } from './sections/multisig-section/Multisigs';
import { RegistrationsSection } from './sections/registration-section/Registrations';

export const TabsSection = () => {
  return (
    <div className="mx-auto w-full">
      <Tabs size="sm" defaultValue={0}>
        <div className="overflow-scroll bg-[var(--body-surface)]">
          <TabList className="mx-auto max-w-7xl">
            <Tab value={0}>
              <div className="p-2">Details</div>
            </Tab>
            <Tab value={1}>
              <div className="p-2">Registrations</div>
            </Tab>
            <Tab value={2}>
              <div className="p-2">Multi</div>
            </Tab>
            <Tab value={3}>
              <div className="p-2">Analytics</div>
            </Tab>
            <Tab value={4}>
              <div className="p-2">Settings</div>
            </Tab>
          </TabList>
        </div>
        <TabPanels className="mx-auto w-full max-w-7xl">
          <TabPanel value={0}>
            <DetailsSection />
          </TabPanel>
          <TabPanel value={1}>
            <RegistrationsSection />
          </TabPanel>
          <TabPanel value={2}>
            <MultisigSection />
          </TabPanel>
          <TabPanel value={3}>Change your password here.</TabPanel>
          <TabPanel value={4}>Change your password here.</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
