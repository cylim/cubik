import React from 'react';

import { Background, Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

import { ProjectTab } from './project-tab';

interface Props {
  username: string;
}
export const ProfileTabs = ({ username }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-end lg:items-center">
      <Tabs
        defaultValue={0}
        size="md"
        className="md:overflow-x-inherit w-full overflow-y-hidden overflow-x-scroll pb-0"
      >
        <div className="bg-[var(--body-surface)]">
          <TabList className="mx-auto max-w-7xl px-[16px]">
            <Tab value={0}>Details</Tab>
            <Tab value={1}>Projects</Tab>
            <Tab value={2}>Contributions</Tab>
            <Tab value={3}>Settings</Tab>
          </TabList>
        </div>
        <Background />
        <TabPanels>
          <TabPanel value={0}> </TabPanel>
          <TabPanel value={1}>
            <ProjectTab username={username} />
          </TabPanel>
          <TabPanel value={2}> </TabPanel>
          <TabPanel value={3}> </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
