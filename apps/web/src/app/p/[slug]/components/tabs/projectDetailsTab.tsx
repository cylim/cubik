import React from 'react';
import ProjectDescriptionAndImages from '@/app/p/[slug]/components/tabs/components/projectDetailsTab/projectDescriptionAndImages';
import { ProjectDetailsSidebar } from '@/app/p/[slug]/components/tabs/components/projectDetailsTab/projectDetailsSidebar';
import TabLayout from '@/components/common/tabs/TabLayout';

import { prisma } from '@cubik/database';

const fetchProjectDetails = async (slug: string) => {
  try {
    const project = await prisma.project.findFirst({
      where: {
        isArchive: false,
        slug: slug,
      },
      select: {
        id: true,
        name: true,
        shortDescription: true,
        logo: true,
        slides: true,
        longDescription: true,
        projectLink: true,
        twitterHandle: true,
        githubLink: true,
        discordLink: true,
        telegramLink: true,
        industry: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!project) {
      return null;
    }

    return {
      id: project?.id,
      name: project?.name,
      shortDescription: project?.shortDescription,
      logo: project?.logo,
      projectLink: project?.projectLink,
      slides: project?.slides as string[],
      longDescription: project?.longDescription,
      twitterHandle: project?.twitterHandle,
      githubLink: project?.githubLink,
      discordLink: project?.discordLink,
      telegramLink: project?.telegramLink,
      industry: project?.industry,
      createdAt: project?.createdAt,
      updatedAt: project?.updatedAt,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const ProjectDetailsTab = async ({ slug }: { slug: string }) => {
  const project = await fetchProjectDetails(slug);
  if (!project) {
    return 'Loading...';
  }

  return (
    <TabLayout>
      <div className="flex flex-col gap-6 md:flex-row md:gap-20">
        <div className="flex flex-col gap-20">
          <ProjectDescriptionAndImages project={project} />
        </div>
        <ProjectDetailsSidebar
          slug={slug}
          socials={{
            github: project.githubLink,
            telegram: project.telegramLink,
            discord: project.discordLink,
            twitter: project.twitterHandle,
          }}
          industry={project.industry as string[]}
          createdAt={project.createdAt}
          updatedAt={project.updatedAt}
        />
      </div>
    </TabLayout>
  );
};
