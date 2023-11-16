import React from 'react';
import {
  MultisigCard,
  MultisigCardHeader,
} from '@/app/grants/components/cards/MultisigCard';

import { SubHead } from '@cubik/ui';

export const OverviewCard = () => {
  return (
    <MultisigCard>
      <MultisigCardHeader>
        <SubHead heading="Overview" size="md" />
      </MultisigCardHeader>
    </MultisigCard>
  );
};
