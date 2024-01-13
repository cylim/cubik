import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetailsPageHeader } from '@/app/p/[slug]/components/projectDetailsPageHeader';
import { utils } from '@coral-xyz/anchor';

import { Prisma, prisma } from '@cubik/database';

interface OgProps {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export async function generateMetadata(
  { params }: OgProps,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  let contributors = 0;
  let eventName = undefined;
  const project = await prisma.project.findFirst({
    where: {
      slug: params.slug,
    },
    select: {
      name: true,
      shortDescription: true,
      logo: true,
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });

  const newImage = `/api/og?name=${utils.bytes.base64.encode(
    Buffer.from(project?.name ?? 'default'),
  )}&tagline=${utils.bytes.base64.encode(
    Buffer.from(project?.shortDescription ?? 'default'),
  )}&logo=${utils.bytes.base64.encode(
    Buffer.from(project?.logo ?? 'default'),
  )}&contributors=${contributors}&comments=${
    project?._count.comments
  }&eventName=${eventName}`;

  const previousImages = (await parent)?.openGraph?.images ?? [];

  return {
    title: project?.name,
    description: project?.shortDescription,
    metadataBase: new URL('https://www.cubik.so'),
    openGraph: {
      type: 'website',
      images: [`${newImage}`, ...previousImages],
      title: project?.name,
      description: project?.shortDescription,
    },
    twitter: {
      card: 'summary_large_image',
      images: [`${newImage}`, ...previousImages],
      title: project?.name,
      description: project?.shortDescription,
    },
  };
}

interface Props {
  params: {
    slug: string;
  };
  children: React.JSX.Element | React.JSX.Element[];
}

export type ProjectHeadersType = Prisma.ProjectGetPayload<{
  select: {
    id: true;
    name: true;
    shortDescription: true;
    logo: true;
    projectLink: true;
    projectJoinEvent: {
      select: {
        id: true;
        event: {
          select: {
            id: true;
            name: true;
            type: true;
            isActive: true;
            eventStatus: {
              select: {
                status: true;
                endTime: true;
                startTime: true;
              };
            };
          };
        };
      };
    };
  };
}>;

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
      <div className="bg-[var(--body-surface)]">
        <ProjectDetailsPageHeader project={project} />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default ProjectLayout;
