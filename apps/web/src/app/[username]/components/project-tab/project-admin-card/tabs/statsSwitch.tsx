'use client';

import React, { Fragment, useState } from 'react';
import { SegmentContainer, SegmentItem } from '@cubik/ui';

interface Props {
  activeRange: string;
  onRangeChange: (range: string) => void;
}


export const StatsSwitch: React.FC<Props> = ({ activeRange, onRangeChange }) => {

  const ranges = ['1W', '2W', '1M', '2M']
  return (
    <div className="w-fit">
      <SegmentContainer size="sm">
        {ranges.map(
          (range) => (
            <Fragment key={range}>
              <SegmentItem
                isActive={activeRange === range}
                onClick={() => onRangeChange(range)}
                key={range}
              >
                {range}
              </SegmentItem>
            </Fragment>
          )
        )
        }
      </SegmentContainer>
    </div>
  );
};
