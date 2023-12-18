import React from 'react';
import { ContributionSegment } from '@/app/grants/components/sections/details-section/contributors-segment';
import { Metrics } from '@/app/grants/components/sections/details-section/metrics';
import { ProjectSegment } from '@/app/grants/components/sections/details-section/project-segment';
import { SegmentSwitch } from '@/app/grants/components/sections/details-section/segmentSwitch';
import SectionLayout from '@/app/grants/components/sections/SectionLayout';

import { SubHead } from '@cubik/ui';

interface Props {
  searchParams: { [key in string]: string };
}
export const DetailsSection = ({ searchParams }: Props) => {
  return (
    <SectionLayout>
      <div className="inline-flex w-full flex-col gap-12">
        <SubHead heading="Overview" />
        <div className="flex w-full flex-wrap items-center justify-start gap-8 md:flex-nowrap">
          <Metrics />
        </div>
      </div>
      <div className="inline-flex w-full flex-col gap-12">
        <SubHead heading="Projects">
          <SegmentSwitch />
        </SubHead>
        <ProjectSegment searchParams={searchParams} />
      </div>
      <div className="inline-flex w-full flex-col gap-12">
        <SubHead heading="Contributors">
          <SegmentSwitch />
        </SubHead>
        <ContributionSegment searchParams={searchParams} />
      </div>
    </SectionLayout>
  );
};
