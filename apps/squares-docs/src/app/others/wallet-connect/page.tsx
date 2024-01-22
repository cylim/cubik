'use client';

import React from 'react';

import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

import '@cubik/wallet';

import { useCubikWalletContext } from '@cubik/wallet';

import CodeComponent from '../../home-page-components/code-component';
import PageHOC from '../../home-page-components/components/pageHOC';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function SwipeableTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

const WalletConnectPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const { setShowModal } = useCubikWalletContext();
  return (
    <PageHOC
      pages={[
        { name: 'Others', href: '/others', current: false },
        {
          name: 'Wallet Connect',
          href: '/others/wallet-connect',
          current: true,
        },
      ]}
      heading={'Wallet Connect'}
      description={
        'Wallet Connect in Cubik is a fork of Unified Wallet Adapter by Jupiter Exchange. It supports most of the solana wallets and is built upon Solana Base Wallet Adapter'
      }
    >
      <div className="">
        <Tabs defaultValue={0} size="sm">
          <TabList className="border-b border-b-[var(--color-border-primary)]">
            <Tab value={0}>
              <div className="p-2">Overview</div>
            </Tab>
            <Tab value={1}>
              <div className="p-2">Props</div>
            </Tab>
            <Tab value={2}>
              <div className="p-2">Design</div>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel value={0}>
              {' '}
              <div>
                <div>
                  <CodeComponent codeString='import { Tag } from "@cubik/ui' />
                </div>
                <div className="mt-10">
                  <Button onClick={() => setShowModal(true)}>Login</Button>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={1}>Content for Tab 2</TabPanel>
            <TabPanel value={2}>Content for Tab 3</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </PageHOC>
  );
};

export default WalletConnectPage;
