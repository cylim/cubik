'use client';

import React, { useEffect, useState } from 'react';
import { getContributions, getTopEarner } from '@/app/p/[slug]/actions';
import {
  ContributionSwitcher,
  ContributionSwitcherType,
} from '@/app/p/[slug]/components/tabs/components/contributionSwitcher';
import { useProjectEventStore } from '@/app/p/[slug]/store';
import TabLayout from '@/components/common/tabs/TabLayout';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import { TokenList } from '@cubik/common';
import dayjs from '@cubik/dayjs';
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

export const ProjectContributorsTab = ({ slug }: Props) => {
  const [contributionSwitcher, setContributionSwitcher] =
    useState<ContributionSwitcherType>('leaderboard');
  return (
    <TabLayout>
      <div className="flex w-full gap-10">
        <div className="w-full">
          <SubHead heading="Contributions">
            <ContributionSwitcher
              isActive={contributionSwitcher}
              setContribution={setContributionSwitcher}
            />
          </SubHead>
        </div>
        <div className="w-full max-w-sm border"></div>
      </div>
    </TabLayout>
  );
};
