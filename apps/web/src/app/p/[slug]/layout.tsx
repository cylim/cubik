import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetailsPageHeader } from '@/app/p/[slug]/components/projectDetailsPageHeader';
import { utils } from '@coral-xyz/anchor';

import { Prisma, prisma } from '@cubik/database';

interface Props {
  params: {
    slug: string;
  };
  children: React.JSX.Element | React.JSX.Element[];
}

const fetchProject = async (slug: string) => {
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
        projectLink: true,
        projectJoinEvent: {
          select: {
            id: true,
            event: {
              select: {
                id: true,
                name: true,
                type: true,
                isActive: true,
                eventStatus: {
                  select: {
                    status: true,
                    endTime: true,
                    startTime: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!project) {
      throw new Error('Project not found');
    }
    return project;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const ProjectLayout = async ({ children, params }: Props) => {
  const project = await fetchProject(params.slug);
  if (!project) {
    notFound();
  }
  return (
    <div className="w-full">
      {/* <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
      <div className="bg-[var(--body-surface)]">
        <ProjectDetailsPageHeader project={project} />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default ProjectLayout;
