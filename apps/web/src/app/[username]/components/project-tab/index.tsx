import React from 'react';
import { cookies } from 'next/headers';
import { CreateProjectButton } from '@/app/[username]/components/project-tab/createProjectButton';
import ProjectAdminCard from '@/app/[username]/components/project-tab/project-admin-card';
import TabLayout from '@/components/common/tabs/TabLayout';
import { IsUserLoginServer } from '@/utils/auth/isUserLoginServer';

import { prisma } from '@cubik/database';
import { Button, SubHead } from '@cubik/ui';

interface Props {
  username: string;
}

const getProjects = async (username: string) => {
  return await prisma.project.findMany({
    where: {
      owner: {
        username: username,
      },
    },
    select: {
      name: true,
      logo: true,
      shortDescription: true,
      slug: true,
      id: true,
    },
  });
};

export const ProjectTab = async ({ username }: Props) => {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  const projects = await getProjects(username);

  if (!token) {
    return (
      <>no token</>
      // <TabLayout>
      //   <SubHead heading="Projects">
      //     <Button rightIconName="plus" variant={'primary'}>
      //       Create Project
      //     </Button>
      //   </SubHead>
      //   <>
      //     {projects ? (
      //       <div className="flex w-full flex-col justify-center gap-[16px] md:gap-[24px]">
      //         {projects.map((value, index) => (
      //           <ProjectAdminCard project={value} key={index} />
      //         ))}
      //       </div>
      //     ) : (
      //       <></>
      //     )}
      //   </>
      //   {/* <AdminProjectEmptyState /> */}
      // </TabLayout>
    );
  }

  const user = await IsUserLoginServer(token.value);
  if (user?.username.toLocaleLowerCase() === username.toLocaleLowerCase()) {
    return (
      <>
        <TabLayout>
          <SubHead heading="Projects">
            <CreateProjectButton />
          </SubHead>
          <>
            {projects ? (
              <div className="flex w-full flex-col justify-center gap-[16px] md:gap-[24px]">
                {projects.map((value) => (
                  <ProjectAdminCard project={value} key={value.id} />
                ))}
              </div>
            ) : (
              <></>
            )}
          </>
          {/* <AdminProjectEmptyState /> */}
        </TabLayout>
      </>
    );
  }

  return <TabLayout>Hello world</TabLayout>;
};
