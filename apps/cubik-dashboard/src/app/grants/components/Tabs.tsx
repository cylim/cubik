import React from 'react';
import { DetailsSection } from '@/app/grants/components/sections/details-section';

import { Background, Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

import { MultisigSection } from './sections/multisig-section/Multisigs';
import { RegistrationsSection } from './sections/registration-section/Registrations';

interface Props {
  searchParams: { [key in string]: string };
}
export const TabsSection = ({ searchParams }: Props) => {
  return (
    <div className="mx-auto w-full border-red-500">
      <Tabs size="sm" defaultValue={0}>
        <div className="overflow-scroll border-red-500 bg-[var(--body-surface)] px-4 md:px-6">
          <TabList className="mx-auto max-w-6xl">
            <Tab value={0}>Details</Tab>
            <Tab value={1}>Registrations</Tab>
            <Tab value={2}>Multi</Tab>
            <Tab value={3}>Analytics</Tab>
            <Tab value={4}>Settings</Tab>
          </TabList>
        </div>
        <Background />
        <TabPanels className="mx-auto w-full max-w-6xl">
          <TabPanel value={0}>
            <DetailsSection searchParams={searchParams} />
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
