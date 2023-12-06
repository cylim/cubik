import React from 'react';
import { ContributionSegment } from '@/app/grants/components/sections/details-section/contributors-segment';
import { ProjectSegment } from '@/app/grants/components/sections/details-section/project-segment';

import {
  MetricsItem,
  Segment,
  SegmentContainer,
  SegmentContent,
  SegmentList,
  SegmentTrigger,
  SubHead,
} from '@cubik/ui';

export const DetailsSection = () => {
  return (
    <div className="">
      <div className="my-8 inline-flex w-full flex-col gap-11 md:my-16">
        <SubHead heading="Overview" />
        <div className=" flex w-full flex-wrap items-center justify-start gap-10">
          <MetricsItem />
          <MetricsItem />
          <MetricsItem />
        </div>
      </div>
      <SegmentContainer size="sm">
        <Segment defaultValue="projects">
          <div className="flex flex-col items-start gap-3 px-4 md:flex-row md:justify-between md:px-0 ">
            <SubHead heading="Stats" />
            <SegmentList className="max-w-[20rem]" position="start">
              <SegmentTrigger value="projects">Projects</SegmentTrigger>
              <SegmentTrigger value="contributors">Contributors</SegmentTrigger>
            </SegmentList>
          </div>
          <SegmentContent value="projects">
            <ProjectSegment />
          </SegmentContent>
          <SegmentContent value="contributors">
            <ContributionSegment />
          </SegmentContent>
        </Segment>
      </SegmentContainer>
    </div>
  );
};
