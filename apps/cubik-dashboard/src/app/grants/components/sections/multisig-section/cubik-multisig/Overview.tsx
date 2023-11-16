import React from 'react';
import {
  MultisigCard,
  MultisigCardHeader,
} from '@/app/grants/components/cards/MultisigCard';

import { SubHead, Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

export const OverviewCard = () => {
  return (
    <MultisigCard>
      <div className="bg-[#262626]">
        <MultisigCardHeader>
          <SubHead heading="Overview" size="md" />
        </MultisigCardHeader>
      </div>
      <Tabs size="sm" defaultValue={0}>
        <TabList className="">
          <div className="flex w-full gap-4 border-b border-[#333] bg-[#262626] pl-3">
            <Tab value={0}>Owners</Tab>
            <Tab value={1}>Threshold</Tab>
            <Tab value={2}>Assets</Tab>
          </div>
        </TabList>
        <TabPanels>
          <TabPanel value={0}>Owners</TabPanel>
          <TabPanel value={1}>Threshold</TabPanel>
          <TabPanel value={2}>Assets</TabPanel>
        </TabPanels>
      </Tabs>
    </MultisigCard>
  );
};
