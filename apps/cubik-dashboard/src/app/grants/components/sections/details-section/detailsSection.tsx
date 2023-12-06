import React from 'react';
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
      <div className="my-16 inline-flex w-full flex-col gap-11">
        <SubHead heading="Overview" />
        <div className=" flex w-full items-center justify-start gap-10">
          <MetricsItem />
          <MetricsItem />
          <MetricsItem />
        </div>
      </div>
      <SegmentContainer size="sm">
        <Segment defaultValue="projects">
          <div className="flex justify-between">
            <SubHead heading="Stats" />
            <SegmentList className="max-w-[20rem]" position="end">
              <SegmentTrigger value="projects">Projects</SegmentTrigger>
              <SegmentTrigger value="contributors">Contributors</SegmentTrigger>
            </SegmentList>
          </div>
          <SegmentContent value="projects">
            <ProjectSegment />
          </SegmentContent>
          <SegmentContent value="contributors">Contributors</SegmentContent>
        </Segment>
      </SegmentContainer>
    </div>
  );
};
