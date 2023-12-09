import React from 'react';
import { ContributionSegment } from '@/app/grants/components/sections/details-section/contributors-segment';
import { getMetrics } from '@/app/grants/components/sections/details-section/helpers/getMetrics';
import { Metrics } from '@/app/grants/components/sections/details-section/metrics';
import { ProjectSegment } from '@/app/grants/components/sections/details-section/project-segment';
import { SegmentSwitch } from '@/app/grants/components/sections/details-section/segmentSwitch';

import { CircularSkeleton, Skeleton, SubHead, TextSkeleton } from '@cubik/ui';

interface Props {
  searchParams: { [key in string]: string };
}
export const DetailsSection = ({ searchParams }: Props) => {
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
          <Metrics />
        </div>
      </div>
      <div className="mb-8 flex items-start justify-between gap-3 md:px-0 ">
        <SubHead heading="Stats" />
        <div className="">
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
