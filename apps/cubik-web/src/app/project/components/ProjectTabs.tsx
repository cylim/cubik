import React from 'react';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

import { ContributionSection } from './contributions/index';
import { DetailSection } from './details';
import { TeamSection } from './team';

interface Props {
  slug: string;
}

export const ProjectTabs = ({ slug }: Props) => {
  return (
    <>
      <div className="flex min-h-[30rem] w-full flex-col items-end lg:items-center">
        <Tabs
          defaultValue={0}
          size="md"
          className="md:overflow-x-inherit w-full overflow-y-hidden overflow-x-scroll bg-[#212121] pb-0"
        >
          <div className="mx-auto max-w-7xl">
            <TabList className=" ">
              <Tab value={0}>
                <div className="p-2 text-base font-semibold">About</div>
              </Tab>
              <Tab value={1}>
                <div className="p-2">Contributions</div>
              </Tab>
              <Tab value={2}>
                <div className="p-2">Team</div>
              </Tab>
              <Tab value={3}>
                <div className="p-2">More</div>
              </Tab>
            </TabList>
          </div>

          <TabPanels className="bg-[#0D0D0D]">
            <TabPanel value={0}>
              <DetailSection slug={slug} />
            </TabPanel>
            <TabPanel value={1}>
              <ContributionSection />
            </TabPanel>
            <TabPanel value={2}>
              <TeamSection slug={slug} />
            </TabPanel>
            <TabPanel value={3}>.</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};
