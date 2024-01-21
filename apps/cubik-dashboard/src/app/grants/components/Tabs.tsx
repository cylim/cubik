import React from 'react';
import { DetailsSection } from '@/app/grants/components/sections/details-section';
import PayoutsSection from '@/app/grants/components/sections/payouts-section/Payouts';

import { Background, Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

import { RegistrationsSection } from './sections/registration-section/Registrations';

interface Props {
  searchParams: { [key in string]: string };
}
export const TabsSection = ({ searchParams }: Props) => {
  return (
    <div className="mx-auto w-full">
      <Tabs size="sm" defaultValue={0}>
        <div className="overflow-scroll bg-[var(--body-surface)]">
          <TabList className="mx-auto max-w-7xl px-4 md:px-8">
            <Tab value={0}>Details</Tab>
            <Tab value={1}>Registrations</Tab>
            <Tab value={2}>Payouts</Tab>
            <Tab value={3}>Analytics</Tab>
            <Tab value={4}>Settings</Tab>
          </TabList>
        </div>
        <Background />
        <TabPanels className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <TabPanel value={0}>
            <DetailsSection searchParams={searchParams} />
          </TabPanel>
          <TabPanel value={1}>
            <RegistrationsSection searchParams={searchParams} />
          </TabPanel>
          <TabPanel value={2}>
            <PayoutsSection />
          </TabPanel>
          <TabPanel value={3}>Change your password here.</TabPanel>
          <TabPanel value={4}>Change your password here.</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
