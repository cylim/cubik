import React from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';
import TreasuryInfoCard from '@/components/explorer/TreasuryInfoCard';

import { Button, Divider, SubHead } from '@cubik/ui';

const ProjectAdminTreasuryTab = () => {
  return (
    <TabLayout>
      <SubHead heading={'Project Vault'}>
        <Button leftIconName="threeDots" variant={'secondary'} size="md" />
      </SubHead>
      <div className="flex justify-between p-6">
        <TreasuryInfoCard
          header="Outstanding Balance"
          headerIconName="infoCircle"
          value="$456.8"
        />
        <Divider orientation="vertical" className=" !h-auto" />
        <TreasuryInfoCard
          header="Current Treasury Balance"
          headerIconName="infoCircle"
          value="$4,621.5"
        />
        <Divider orientation="vertical" className=" !h-auto" />
        <TreasuryInfoCard
          header="Previous Withdrawals"
          headerIconName="infoCircle"
          value="$30,987.8"
        />
        <Divider orientation="vertical" className=" !h-auto" />
        <TreasuryInfoCard
          header="Threshold"
          headerIconName="infoCircle"
          value="2/2"
        />
      </div>
      {/* <EmptyState
        title={'No Grants Round Found'}
        description={
          'You havent applied for any grants round for the project. Apply for a grant to get started.'
        }
        icon={'cloudError'}
      /> */}
    </TabLayout>
  );
};

export default ProjectAdminTreasuryTab;
