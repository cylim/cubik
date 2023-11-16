import React from 'react';
import {
  MultisigCard,
  MultisigCardHeader,
} from '@/app/grants/components/cards/MultisigCard';
import { MultisigInfo } from '@/app/grants/components/sections/multisig-section/cubik-multisig/MultisigInfo';

import { SubHead } from '@cubik/ui';

export const TimelineCard = () => {
  return (
    <MultisigCard borderbottom={true}>
      <div className="bg-[#262626]">
        <MultisigCardHeader borderbottom={true}>
          <SubHead heading="Timeline" size="md" />
        </MultisigCardHeader>
      </div>
      <div className="h-[10rem] w-full"></div>
    </MultisigCard>
  );
};
