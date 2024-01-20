'use client';

import React, { useState } from 'react';
import ProjectLeaderboardTable from '@/app/p/[slug]/components/tabs/projectLeaderboardTable';
import { useProjectEventStore } from '@/app/p/[slug]/store';
import TabLayout from '@/components/common/tabs/TabLayout';
import useProjectContribution from '@/hooks/contributions/useProjectContribution';
import useProjectLeaderboard from '@/hooks/contributions/useProjectLeaderboard';

import {
  AvatarLabelGroup,
  Icon,
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
      <div className="flex w-full flex-col gap-20 md:flex-row">
        <div className="flex w-full flex-col gap-4">
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
              {/* {JSON.stringify(leaderboardContribution.data)} */}
              <ProjectLeaderboardTable
                leaderboardData={leaderboardContribution.data}
              />
            </div>
          )}
          {contributionSwitcher === 'recent' && (
            <div className="w-full">{JSON.stringify(contribution.data)}</div>
          )}
        </div>
        <div className="flex w-full flex-col gap-6 md:max-w-sm">
          <SubHead className="w-full" heading="Project Treasury" />
          <div className="rounded-lg bg-[--color-surface-primary-depth] p-4">
            <div className="flex w-full items-start justify-start gap-2">
              <Text className="l3-light" color={'primary'}>
                Treasury Balance
              </Text>
              <Icon
                color="var(--body-fg-tertiary)"
                className="h-4 w-4"
                name="infoCircle"
              />
            </div>
          </div>
        </div>
      </div>
    </TabLayout>
  );
};
