import React from 'react';
import {
  MultisigCard,
  MultisigCardHeader,
} from '@/app/grants/components/cards/MultisigCard';

import { SubHead } from '@cubik/ui';

export const TimelineCard = () => {
  return (
    <MultisigCard>
      <div className="bg-[#262626]">
        <MultisigCardHeader>
          <SubHead heading="Timeline" size="md" />
        </MultisigCardHeader>
      </div>
      <div className="h-[10rem] w-full"></div>
    </MultisigCard>
  );
};
