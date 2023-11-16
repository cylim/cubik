import React from 'react';
import {
  MultisigCard,
  MultisigCardHeader,
} from '@/app/grants/components/cards/MultisigCard';

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
      <MultisigCardHeader className="flex items-center justify-between">
        <SubHead heading="Round Multisig" size="md" />
        <div className="flex items-center justify-center">
          <Button variant={'link'} size={'md'}>
            Open Multisig
          </Button>
          <Button variant={'outline'} size={'md'}>
            <div className="flex items-center justify-center gap-1 space-x-1">
              <p>Add Funds</p>
              {/* @todo:- fix the size for icon in UI */}
              <Icon name="plus" />
            </div>
          </Button>
        </div>
      </MultisigCardHeader>
      <div className="flex flex-col justify-between gap-1 px-10 py-16">
        <p className="mb-2 text-base text-white">Matching Pool</p>
        <h3 className="mb-1 flex items-end font-mono text-4xl text-white">
          <h6 className="text-base">$</h6> 40,000
        </h3>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#F53D6B" />
          </svg>
          <p className="ml-1 font-mono text-sm font-medium text-white opacity-60">
            $
          </p>
          <p className="mr-1 font-mono text-sm font-medium text-white opacity-60">
            10,000
          </p>
          <p className="text-sm font-medium text-white opacity-60">
            Pending to add
          </p>
        </div>
      </div>
    </MultisigCard>
  );
};
