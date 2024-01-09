import React from 'react';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

const DocsTabsHOC = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="mx-auto w-full">
        <Tabs size="sm" defaultValue={0}>
          <div className="overflow-scroll ">
            <TabList className="border-b border-b-[var(--color-border-primary-base)]">
              <Tab value={0}>Overview</Tab>
              <Tab value={1}>Code</Tab>
              <Tab value={2}>Design</Tab>
            </TabList>
          </div>
          <TabPanels>
            {children.map((child, index) => (
              <TabPanel key={index} value={index}>
                {child}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default DocsTabsHOC;
