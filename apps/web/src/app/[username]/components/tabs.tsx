import React from 'react';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

import { ProjectTab } from './project-tab';

interface Props {
  username: string;
}
export const ProfileTabs = ({ username }: Props) => {
  return (
    <div className="flex min-h-[30rem] w-full flex-col items-end lg:items-center">
      <Tabs
        defaultValue={0}
        size="md"
        className="md:overflow-x-inherit w-full overflow-y-hidden overflow-x-scroll pb-0"
      >
        <div className="bg-[var(--body-surface)]">
          <TabList className="mx-auto max-w-7xl">
            <Tab value={0}>
              <div className="p-2">Details</div>
            </Tab>
            <Tab value={1}>
              <div className="p-2">Projects</div>
            </Tab>
            <Tab value={2}>
              <div className="p-2">Contributions</div>
            </Tab>
            <Tab value={3}>
              <div className="p-2">Settings</div>
            </Tab>
          </TabList>
        </div>

        <TabPanels className="">
          <TabPanel value={0}>details</TabPanel>
          <TabPanel value={1}>
            <ProjectTab username={username} />
          </TabPanel>
          <TabPanel value={2}>ss</TabPanel>
          <TabPanel value={3}>ss.</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
