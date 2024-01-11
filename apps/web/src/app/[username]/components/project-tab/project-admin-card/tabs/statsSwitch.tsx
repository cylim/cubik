import React from 'react';
import { StatsIsActive } from '@/app/[username]/components/project-tab/project-admin-card/tabs/stats';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

interface Props {
  isActive: StatsIsActive;
  change: (stat: StatsIsActive) => void;
}
export const StatsSwitch = ({ change, isActive }: Props) => {
  return (
    <div className="w-full md:w-fit">
      <SegmentContainer size="sm">
        <SegmentItem
          isActive={isActive === '1W' ? true : false}
          onClick={() => change('1W')}
        >
          1W
        </SegmentItem>
        <SegmentItem
          isActive={isActive === '2W' ? true : false}
          onClick={() => change('2W')}
        >
          2W
        </SegmentItem>
        <SegmentItem
          isActive={isActive === '1M' ? true : false}
          onClick={() => change('1M')}
        >
          1M
        </SegmentItem>
        <SegmentItem
          isActive={isActive === '2M' ? true : false}
          onClick={() => change('2M')}
        >
          2M
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
