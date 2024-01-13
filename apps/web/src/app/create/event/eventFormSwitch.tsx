'use client';

import React from 'react';
import { eventType } from '@/app/create/event/page';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

interface Props {
  isActive: eventType;
  change: (type: eventType) => void;
}
export const EventFormSwitch = ({ isActive, change }: Props) => {
  return (
    <div className="flex flex-row gap-4">
      <SegmentContainer size="sm">
        <SegmentItem
          isActive={isActive === 'funding' ? true : false}
          onClick={() => change('funding')}
        >
          Quadratic Funding Round
        </SegmentItem>
        <SegmentItem
        // isActive={isActive === 'RPGF' ? true : false}
        // onClick={() => change('RPGF')}
        >
          RPGF
        </SegmentItem>
        <SegmentItem
        // isActive={isActive === 'Hackathon' ? true : false}
        // onClick={() => change('Hackathon')}
        >
          Hackathon
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
