import React from 'react';
import { cookies } from 'next/headers';
import TabLayout from '@/components/common/tabs/TabLayout';
import { IsUserLoginServer } from '@/utils/auth/isUserLoginServer';

import { Button, SubHead } from '@cubik/ui';
import ProjectAdminCard from '@/app/[username]/components/project-tab/project-admin-card';

interface Props {
  username: string;
}
export const ProjectTab = async ({ username }: Props) => {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');

  if (!token) {
    return (
      <TabLayout>
        <SubHead heading="Projects" >
          <Button rightIconName="plus" variant={'primary'}>
            Create Project
          </Button>
        </SubHead>
        <ProjectAdminCard />
        {/* <AdminProjectEmptyState /> */}
      </TabLayout>
    );
  }

  const user = await IsUserLoginServer(token.value);
  if (user?.username === username) {
    return <>Admin view</>;
  }

  return <TabLayout>Hello world</TabLayout>;
};
