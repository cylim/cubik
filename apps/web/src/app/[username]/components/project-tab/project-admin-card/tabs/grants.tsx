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
      <SubHead heading={'Grants'} />
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
