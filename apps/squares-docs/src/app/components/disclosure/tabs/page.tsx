'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VerticalTab,
  VerticalTabList,
  VerticalTabPanel,
  VerticalTabPanels,
  VerticalTabs,
} from '@cubik/ui';

import PageHOC from '../../../home-page-components/components/pageHOC';

const page = () => {
  return (
    <PageHOC
      pages={[
        { name: 'Component', href: '/components', current: false },
        { name: 'Tabs', href: '/component/tabs', current: true },
      ]}
      heading={'Tabs'}
      description={
        'Use the tabs component to display multiple panels of content.'
      }
    >
      <div className="">
        <CodeComponent codeString='import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@cubik/ui";' />
        <div className="mt-12">
          <VerticalTabs defaultValue={'one'} size="sm" className="">
            <VerticalTabList>
              <VerticalTab value={'one'} leftIconName="search">
                TabItem1
              </VerticalTab>
              <VerticalTab value={'two'} leftIconName="search">
                {' '}
                TabItem2
              </VerticalTab>
              <VerticalTab value={'three'} leftIconName="search">
                {' '}
                Tabitem3
              </VerticalTab>
            </VerticalTabList>
            <VerticalTabPanels className="">
              <VerticalTabPanel value={'one'}>
                <p>one!</p>
              </VerticalTabPanel>
              <VerticalTabPanel value={'two'}>
                <p>two!</p>
              </VerticalTabPanel>
              <VerticalTabPanel value={'three'}>
                <p>three!</p>
              </VerticalTabPanel>
            </VerticalTabPanels>
          </VerticalTabs>

          <Tabs defaultValue={2} size="sm" className="">
            <TabList>
              <Tab value={0}>
                <div className="p-2">TabItem1</div>
              </Tab>
              <Tab value={1}>
                {' '}
                <div className="p-2">TabItem2</div>
              </Tab>
              <Tab value={2}>
                {' '}
                <div className="p-2">Tabitem3</div>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel value={0}>
                <p>one!</p>
              </TabPanel>
              <TabPanel value={1}>
                <p>two!</p>
              </TabPanel>
              <TabPanel value={2}>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Tabs defaultValue={2} size="sm">
            <TabList>
              <Tab value={0}>
                <div className="p-2">TabItem1</div>
              </Tab>
              <Tab value={1}>
                {' '}
                <div className="p-2">TabItem2</div>
              </Tab>
              <Tab value={2}>
                {' '}
                <div className="p-2">Tabitem3</div>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel value={0}>
                <p>one!</p>
              </TabPanel>
              <TabPanel value={1}>
                <p>two!</p>
              </TabPanel>
              <TabPanel value={2}>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Tabs defaultValue={2} size="sm">
            <TabList>
              <Tab value={0}>
                <div className="p-2">TabItem1</div>
              </Tab>
              <Tab value={1}>
                {' '}
                <div className="p-2">TabItem2</div>
              </Tab>
              <Tab value={2}>
                {' '}
                <div className="p-2">Tabitem3</div>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel value={0}>
                <p>one!</p>
              </TabPanel>
              <TabPanel value={1}>
                <p>two!</p>
              </TabPanel>
              <TabPanel value={2}>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Tabs defaultValue={2} size="md">
            <TabList>
              <Tab value={0}>
                <div className="p-2">TabItem1</div>
              </Tab>
              <Tab value={1}>
                {' '}
                <div className="p-2">TabItem2</div>
              </Tab>
              <Tab value={2}>
                {' '}
                <div className="p-2">Tabitem3</div>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel value={0}>
                <p>one!</p>
              </TabPanel>
              <TabPanel value={1}>
                <p>two!</p>
              </TabPanel>
              <TabPanel value={2}>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Tabs defaultValue={2} size="lg">
            <TabList>
              <Tab value={0}>
                <div className="p-2">TabItem1</div>
              </Tab>
              <Tab value={1}>
                {' '}
                <div className="p-2">TabItem2</div>
              </Tab>
              <Tab value={2}>
                {' '}
                <div className="p-2">Tabitem3</div>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel value={0}>
                <p>one!</p>
              </TabPanel>
              <TabPanel value={1}>
                <p>two!</p>
              </TabPanel>
              <TabPanel value={2}>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </PageHOC>
  );
};

export default page;
