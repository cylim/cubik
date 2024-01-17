import React from 'react';
import { cookies } from 'next/headers';
import Link from 'next/link';

import { prisma } from '@cubik/database';
import { Button, EmptyState, SubHead } from '@cubik/ui';

import TabLayout from '../../../../components/common/tabs/TabLayout';
import { IsUserLoginServer } from '../../../../utils/auth/isUserLoginServer';
import { ProjectAdminCard, ProjectProfileCard } from './project-admin-card';
import RenderUserProjects from './renderProject';

interface Props {
  username: string;
}

const getProjects = async (username: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  const user = token ? await IsUserLoginServer(token?.value || '') : null;

  return await prisma.project.findMany({
    where: {
      owner: {
        username: username,
      },
      isArchive: false,
      // if user is owner of this profile we show all projects including draft
      isDraft: user && user.username === username ? undefined : false,
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      name: true,
      logo: true,
      shortDescription: true,
      slug: true,
      id: true,
      status: true,
      isDraft: true,
    },
  });
};

export const ProjectTab = async ({ username }: Props) => {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  const projects = await getProjects(username);
  const user = token ? await IsUserLoginServer(token?.value || '') : null;

  const isProfileOwner =
    user?.username.toLocaleLowerCase() === username.toLocaleLowerCase();
  const hasProjects = projects && projects.length > 0;

  const renderProjects = () => {
    if (!hasProjects) {
      return (
        <EmptyState
          title="No Project Found"
          description="This user does not have any projects created"
          icon="search"
        />
      );
    }

    // reorder to push draft projects to the bottom
    const reorderedProjects: typeof projects = [
      ...projects.filter((e) => e.isDraft),
      ...projects.filter((e) => !e.isDraft),
    ];

    return reorderedProjects.map((project, index) => {
      if (isProfileOwner) {
        return <ProjectAdminCard project={project} key={index} />;
      }

      return <ProjectProfileCard project={project} key={index} />;
    });
  };

  return (
    <TabLayout>
      {isProfileOwner ? (
        <>
          <SubHead heading="Projects">
            <Link href={'/create/project'}>
              <Button rightIconName="plus" variant={'primary'}>
                Create Project
              </Button>
            </Link>
          </SubHead>
          <div className="flex min-h-[100vh] w-full flex-col justify-start gap-[16px] md:gap-[24px]">
            <RenderUserProjects projects={projects} />
          </div>
        </>
      ) : (
        <>
          <SubHead heading="Projects" />
          <RenderUserProjects projects={projects} />
        </>
      )}
    </TabLayout>
  );
};
