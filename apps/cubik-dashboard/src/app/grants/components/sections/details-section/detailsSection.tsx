import React from 'react';
import { ContributionSegment } from '@/app/grants/components/sections/details-section/contributors-segment';
import { ProjectSegment } from '@/app/grants/components/sections/details-section/project-segment';
import { SegmentSwitch } from '@/app/grants/components/sections/details-section/segmentSwitch';

import { MetricsItem, SubHead } from '@cubik/ui';

interface Props {
  searchParams: { [key in string]: string };
}
export const DetailsSection = ({ searchParams }: Props) => {
  return (
    <div className="">
      <div className="my-8 inline-flex w-full flex-col gap-11 md:my-16">
        <SubHead heading="Overview" />
        <div className="flex w-full flex-wrap items-center justify-start gap-10 md:flex-nowrap">
          <MetricsItem />
          <MetricsItem />
          <MetricsItem />
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 px-4 md:flex-row md:justify-between md:px-0 ">
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
