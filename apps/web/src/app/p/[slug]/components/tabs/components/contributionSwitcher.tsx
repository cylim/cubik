import React, { Dispatch, SetStateAction } from 'react';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

export type ContributionSwitcherType = 'leaderboard' | 'recent';
interface Props {
  isActive: ContributionSwitcherType;
  setContribution: Dispatch<SetStateAction<ContributionSwitcherType>>;
}
export const ContributionSwitcher = ({ isActive, setContribution }: Props) => {
  return (
    <div className="w-full max-w-sm">
      <SegmentContainer size="sm">
        <SegmentItem
          onClick={() => setContribution('leaderboard')}
          isActive={isActive === 'leaderboard'}
        >
          Leaderboard
        </SegmentItem>
        <SegmentItem
          isActive={isActive === 'recent'}
          onClick={() => setContribution('recent')}
        >
          Recent
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
