import React from 'react';
import {
  MultisigCard,
  MultisigCardHeader,
} from '@/app/grants/components/cards/MultisigCard';
import { MultisigInfo } from '@/app/grants/components/sections/multisig-section/cubik-multisig/MultisigInfo';

import {
  Button,
  Icon,
  SubHead,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@cubik/ui';

export const MainMultisig = () => {
  return (
    <MultisigCard>
      <MultisigInfo subhead={<SubHead heading="Round Multisig" size="md" />} />
      <Tabs size="sm" defaultValue={0}>
        <TabList className="">
          <div className="flex w-full gap-4 border-b border-[#333] bg-[#262626] pl-3">
            <Tab value={0}>Sponsors</Tab>
            <Tab value={1}>Payout</Tab>
            <Tab value={2}>Transactions</Tab>
          </div>
        </TabList>
        <TabPanels>
          <TabPanel value={0}>ss</TabPanel>
          <TabPanel value={1}>ss</TabPanel>
          <TabPanel value={2}>ss</TabPanel>
        </TabPanels>
      </Tabs>
    </MultisigCard>
  );
};
