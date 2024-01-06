import React from 'react';
import { cookies } from 'next/headers';
import { CreateProjectButton } from '@/app/[username]/components/project-tab/createProjectButton';
import {
  ProjectAdminCard,
  ProjectProfileCard,
} from '@/app/[username]/components/project-tab/project-admin-card';
import TabLayout from '@/components/common/tabs/TabLayout';
import { IsUserLoginServer } from '@/utils/auth/isUserLoginServer';

import { prisma } from '@cubik/database';
import { Button, EmptyState, SubHead } from '@cubik/ui';

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
    },
  });
};

export const ProjectTab = async ({ username }: Props) => {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  const projects = await getProjects(username);
  const isSignedIn = Boolean(token);
  const user = isSignedIn ? await IsUserLoginServer(token.value) : null;
  const isOwnProfile =
    isSignedIn &&
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

    return projects.map((project, index) =>
      isOwnProfile ? (
        <ProjectAdminCard project={project} key={index} />
      ) : (
        <ProjectProfileCard project={project} key={index} />
      ),
    );
  };

  return (
    <TabLayout>
      {isOwnProfile ? (
        <>
          <SubHead heading="Projects">
            <CreateProjectButton />
          </SubHead>
          <div className="flex w-full flex-col justify-center gap-[16px] md:gap-[24px]">
            {renderProjects()}
          </div>
        </>
      ) : (
        <>
          <SubHead heading="Projects" />
          {renderProjects()}
        </>
      )}
    </TabLayout>
  );
};
