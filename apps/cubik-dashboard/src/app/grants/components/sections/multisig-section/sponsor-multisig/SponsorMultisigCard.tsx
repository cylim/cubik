import React from 'react';
import { MultisigCard } from '@/app/grants/components/cards/MultisigCard';
import { MultisigInfo } from '@/app/grants/components/sections/multisig-section/cubik-multisig/MultisigInfo';

import {
  AvatarLabelGroup,
  Button,
  Icon,
  SubHead,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@cubik/ui';

import { Details } from './tabs/details';
import { Matching } from './tabs/matching';
import { Settings } from './tabs/settings';
import { Transactions } from './tabs/transactions';

export const SponsorMultisigCard = () => {
  return (
    <MultisigCard>
      <MultisigInfo
        subhead={
          <AvatarLabelGroup
            title="Squads Labs"
            shape="circle"
            size="md"
            avatarShape="circle"
            avatarSrc={
              'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg'
            }
            longDescription="bg @stephan"
          />
        }
      />
      <Tabs size="sm" defaultValue={0}>
        <TabList>
          <div className="flex w-full gap-4 border-b border-[#333] bg-[#262626] pl-3">
            <Tab value={0}>Details</Tab>
            <Tab value={1}>Matching</Tab>
            <Tab value={2}>Transactions</Tab>
            <Tab value={3}>Settings</Tab>
          </div>
        </TabList>
        <TabPanels>
          <TabPanel value={0}>
            <Details />
          </TabPanel>
          <TabPanel value={1}>
            <Matching />
          </TabPanel>
          <TabPanel value={2}>
            <Transactions />
          </TabPanel>
          <TabPanel value={3}>
            <Settings />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div className="flex h-[5rem] w-full items-center justify-center">
        <Button size={'md'} variant={'tertiary'}>
          <div className="flex items-center justify-center gap-2">
            <p>View Details</p>
            <div className="flex items-center justify-center">
              <Icon name="chevronDown" fill="none" width={20} height={20} />
            </div>
          </div>
        </Button>
      </div>
    </MultisigCard>
  );
};
