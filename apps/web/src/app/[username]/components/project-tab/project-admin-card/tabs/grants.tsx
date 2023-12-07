import React from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';

import {
  EmptyState,
  Segment,
  SegmentContainer,
  SegmentContent,
  SegmentList,
  SegmentTrigger,
  SubHead,
} from '@cubik/ui';

const ProjectAdminGrantsTab = () => {
  return (
    <TabLayout>
      <SubHead heading={'Grants'}>
        <div className="flex flex-row gap-2">
          <SegmentContainer size="sm">
            <Segment defaultValue="Live">
              <SegmentList position="end">
                <SegmentTrigger value="Live">Live Rounds</SegmentTrigger>
                <SegmentTrigger value="Previous">
                  Previous Rounds
                </SegmentTrigger>
                <SegmentTrigger value="All">All Rounds</SegmentTrigger>
              </SegmentList>
              {/* <SegmentContent value="Live">
              </SegmentContent>
              <SegmentContent value="Previous">
                Change your password here.
              </SegmentContent>
              <SegmentContent value="All">
                Change your password here.
              </SegmentContent> */}
            </Segment>
          </SegmentContainer>
        </div>
      </SubHead>
      <EmptyState
        title={'No Grants Round Found'}
        description={
          'You havent applied for any grants round for the project. Apply for a grant to get started.'
        }
        icon={'cloudError'}
      />
    </TabLayout>
  );
};

export default ProjectAdminGrantsTab;
