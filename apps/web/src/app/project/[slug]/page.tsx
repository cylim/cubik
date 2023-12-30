import React from 'react';
import { ProjectTab } from '@/app/[username]/components/project-tab';

import { Background, Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

import { ProjectContributorsTab, ProjectDetailsTab } from './components/tabs';
import { getContributions } from '@/app/project/[slug]/actions';

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const contributors = await getContributions({ slug: params.slug })
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-10 md:mx-auto lg:flex-col lg:items-start">
      <div className="absolute left-0 top-[-150px] w-full">
        <Background />
      </div>
      <div className="flex min-h-screen w-full flex-col items-end lg:items-center">
        <Tabs
          defaultValue={0}
          size="sm"
          className="md:overflow-x-inherit w-full overflow-y-hidden overflow-x-scroll"
        >
          <div className="bg-[var(--body-surface)]">
            <TabList className="mx-auto max-w-7xl px-[16px]">
              <Tab value={0}>About</Tab>
              <Tab value={1}>Contributors</Tab>
              <Tab value={2}>Team</Tab>
              <Tab value={3}>Grants</Tab>
            </TabList>
          </div>
          <Background />
          <TabPanels>
            <TabPanel value={0}>
              <ProjectDetailsTab slug={params.slug} />
            </TabPanel>
            <TabPanel value={1}>
              <ProjectContributorsTab contributors={contributors} slug={params.slug} />
            </TabPanel>
            <TabPanel value={2}>
              <></>
            </TabPanel>
            <TabPanel value={3}>
              <></>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectPage;
