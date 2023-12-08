import React from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';

import { Button, EmptyState, SubHead } from '@cubik/ui';

const ProjectAdminTreasuryTab = () => {
  return (
    <TabLayout>
      <SubHead heading={'Project Vault'}>
        <Button leftIconName="threeDots" variant={'secondary'} size="md" />
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

export default ProjectAdminTreasuryTab;
