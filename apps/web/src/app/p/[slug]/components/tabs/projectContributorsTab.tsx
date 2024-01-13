'use client';

import React, { useState } from 'react';
import { useProjectEventStore } from '@/app/p/[slug]/store';
import TabLayout from '@/components/common/tabs/TabLayout';
import useProjectContribution from '@/hooks/contributions/useProjectContribution';
import useProjectLeaderboard from '@/hooks/contributions/useProjectLeaderboard';

import {
  AvatarLabelGroup,
  SegmentContainer,
  SegmentItem,
  SubHead,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@cubik/ui';

interface Props {
  slug: string;
}
export type ContributionSwitcherType = 'leaderboard' | 'recent';

export const ProjectContributorsTab = ({ slug }: Props) => {
  const [contributionSwitcher, setContributionSwitcher] =
    useState<ContributionSwitcherType>('leaderboard');
  const { event } = useProjectEventStore();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const leaderboardContribution = useProjectLeaderboard({
    eventId: event?.eventId,
    slug,
  });
  const contribution = useProjectContribution({
    eventId: event?.eventId,
    slug,
    page: currentPage,
  });

  // todo -- Need to add a loading state

  return (
    <TabLayout>
      <div className="flex w-full gap-10">
        <div className="w-full">
          <SubHead className="w-full" heading="Contributions">
            <div className="w-full max-w-sm">
              <SegmentContainer size="sm">
                <SegmentItem
                  onClick={() => setContributionSwitcher('leaderboard')}
                  isActive={contributionSwitcher === 'leaderboard'}
                >
                  Leaderboard
                </SegmentItem>
                <SegmentItem
                  isActive={contributionSwitcher === 'recent'}
                  onClick={() => setContributionSwitcher('recent')}
                >
                  Recent
                </SegmentItem>
              </SegmentContainer>
            </div>
          </SubHead>
          {contributionSwitcher === 'leaderboard' && (
            <div className="w-full">
              {JSON.stringify(leaderboardContribution.data)}
            </div>
          )}
          {contributionSwitcher === 'recent' && (
            <div className="w-full">{JSON.stringify(contribution.data)}</div>
          )}
        </div>
        <div className="w-full max-w-sm">Chart</div>
      </div>
    </TabLayout>
  );
};
