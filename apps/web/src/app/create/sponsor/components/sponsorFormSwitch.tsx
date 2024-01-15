'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

export type sponsorType = 'organization' | 'individual';

interface Props {
  isActive: sponsorType;
  change: (type: sponsorType) => void;
}
export const SponsorFormSwitch = ({ isActive, change }: Props) => {
  return (
    <div className="flex flex-row gap-4">
      <SegmentContainer size="sm">
        <SegmentItem
          isActive={isActive === 'organization' ? true : false}
          onClick={() => change('organization')}
        >
          Sponsor as Organizaiton
        </SegmentItem>
        <SegmentItem
          isActive={isActive === 'individual' ? true : false}
          onClick={() => change('individual')}
        >
          Sponsor as Individual
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
