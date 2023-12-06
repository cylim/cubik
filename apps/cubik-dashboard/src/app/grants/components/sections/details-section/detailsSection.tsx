import React from 'react';

import {
  Segment,
  SegmentContainer,
  SegmentContent,
  SegmentList,
  SegmentTrigger,
  SubHead,
} from '@cubik/ui';

export const DetailsSection = () => {
  return (
    <div>
      <SubHead heading="Overview" />

      <SegmentContainer size="sm">
        <Segment defaultValue="cubik">
          <div className="flex justify-between">
            <SubHead heading="Stats" />
            <SegmentList className="max-w-[20rem]" position="end">
              <SegmentTrigger value="project">Projects</SegmentTrigger>
              <SegmentTrigger value="account">Account</SegmentTrigger>
            </SegmentList>
          </div>
          <SegmentContent value={'cubik'}></SegmentContent>
          <SegmentContent value="sponsor"></SegmentContent>
        </Segment>
      </SegmentContainer>
    </div>
  );
};
