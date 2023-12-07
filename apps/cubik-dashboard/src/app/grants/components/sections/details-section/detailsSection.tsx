'use client';

import React from 'react';
import { ContributionSegment } from '@/app/grants/components/sections/details-section/contributors-segment';
import { getMetrics } from '@/app/grants/components/sections/details-section/helpers/getMetrics';
import { ProjectSegment } from '@/app/grants/components/sections/details-section/project-segment';
import { SegmentSwitch } from '@/app/grants/components/sections/details-section/segmentSwitch';
import { AccessStore } from '@/context/scope';
import { useUser } from '@/context/user';
import { useQuery } from '@tanstack/react-query';

import {
  CircularSkeleton,
  MetricsItem,
  Skeleton,
  SubHead,
  TextSkeleton,
} from '@cubik/ui';

interface Props {
  searchParams: { [key in string]: string };
}
export const DetailsSection = ({ searchParams }: Props) => {
  const { scope } = AccessStore();
  const metrics = useQuery({
    queryKey: ['metrics', scope?.event_id],
    queryFn: ({ queryKey }) => getMetrics(queryKey[1] || ''),
    enabled: !!scope,
  });
  return (
    <div className="">
      <div className="my-8 inline-flex w-full flex-col gap-11 md:my-16">
        <SubHead heading="Overview" />
        <div className="flex w-full flex-wrap items-center justify-start gap-10 md:flex-nowrap">
          <div className={'flex items-center justify-between p-[4px]'}>
            <div className="flex w-full items-center gap-4">
              <CircularSkeleton size={'sm'} shape={'md'} />
              <div className="min-h-100% flex min-w-[16rem] flex-col justify-center gap-4 md:min-w-[24rem]">
                <div className="w-[50%]">
                  <Skeleton className={'w-1/2 rounded-full'} opacity={50} />
                </div>
                <TextSkeleton lines={2} opacity={25} />
              </div>
            </div>
          </div>
          <MetricsItem
            label="Contributions"
            changePercent="10%"
            subText={metrics.data?.contributions.toLocaleString() || '0'}
          />
          <MetricsItem
            label="Contributors"
            changePercent="10%"
            subText={metrics.data?.contributors.toLocaleString() || '0'}
          />
          <MetricsItem
            label="Matching Pool"
            changePercent=""
            subText={metrics.data?.matchingPool.toLocaleString() || '0'}
          />
        </div>
      </div>
      <div className="mb-8 flex flex-col items-start gap-3  px-4 md:mb-16 md:flex-row md:justify-between md:px-0">
        <SubHead heading="Stats" />
        <div className="w-1/3">
          <SegmentSwitch />
        </div>
      </div>
      {searchParams.section === 'contributors' ? (
        <ContributionSegment />
      ) : (
        <ProjectSegment />
      )}
    </div>
  );
};
