'use client';

import React from 'react';
import { leaderboardSwitchOptions } from '@/app/grant/Leaderboard';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

interface Props {
  isActive: leaderboardSwitchOptions;
  change: (type: leaderboardSwitchOptions) => void;
}
export const LeaderboardSwitch = ({ isActive, change }: Props) => {
  return (
    <div className="flex flex-row gap-4">
      <SegmentContainer size="sm">
        <SegmentItem
          isActive={isActive === 'contributors' ? true : false}
          onClick={() => change('contributors')}
        >
          Contributors
        </SegmentItem>
        <SegmentItem
          isActive={isActive === 'projects' ? true : false}
          onClick={() => change('projects')}
        >
          Projects
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
