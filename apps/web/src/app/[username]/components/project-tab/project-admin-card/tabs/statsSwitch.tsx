'use client';

import React from 'react';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

export const StatsSwitch = () => {
  return (
    <div className="w-fit">
      <SegmentContainer size="sm">
        <SegmentItem isActive={true} onClick={() => {}}>
          1W
        </SegmentItem>
        <SegmentItem isActive={false} onClick={() => {}}>
          2W
        </SegmentItem>
        <SegmentItem isActive={false} onClick={() => {}}>
          1M
        </SegmentItem>
        <SegmentItem isActive={false} onClick={() => {}}>
          2M
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
