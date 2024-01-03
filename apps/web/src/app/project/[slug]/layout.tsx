import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { utils } from '@coral-xyz/anchor';
import { Slides } from '@/types/project';
import { prisma } from '@cubik/database';
import ProjectDetailsPageHeader from './components/projectDetailsPageHeader';

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
  )}&contributors=${contributors}&comments=${project?._count.comments
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

const fetchProject = async (slug: string) => {
  try {
    const project = await prisma.project.findFirst({
      where: {
        //   isActive: true,
        isArchive: false,
        slug: slug,
      },
      select: {
        id: true,
        name: true,
        shortDescription: true,
        logo: true,
        projectLink: true,
        slides: true
        // mutliSigAddress: true,
      },
    });
    if (!project) {
      return [null, null];
    }
    const projectJoinEvent = await prisma.projectJoinEvent.findMany({
      where: {
        projectId: project.id,
      },
      select: {
        eventId: true,
        event: {
          select: {
            name: true,
            id: true,
            type: true,
            projectJoinEvent: {
              select: {
                id: true,
              }, where: {
                projectId: project.id
              }
            }
          }
        }
      }
    });
    console.log('project - ', project);

    console.log('projectJoinEvent - ', projectJoinEvent);

    // const rounds: ProjectPageEventType[] = project.projectJoinRound.map(
    //   (round) => {
    //     return {
    //       eventId: round.roundId,
    //       eventType: 'round',
    //       name: round.round.name,
    //       joinId: round.id,
    //       startTime: round.round.startTime,
    //       endTime: round.round.endTime,
    //     };
    //   },
    // );
    const layoutData = {
      // id: project?.id,
      name: project?.name,
      shortDescription: project?.shortDescription,
      logo: project?.logo,
      projectLink: project?.projectLink,
      // mutliSigAddress: project?.mutliSigAddress,
      events: projectJoinEvent,
      slides: project.slides as unknown as Slides
    };
    return [layoutData, null];
  } catch (error) {
    console.log(error);
    return [null, error as Error];
  }
};

const ProjectLayout = async ({ children, params }: Props) => {
  const project = await fetchProject(params.slug);
  console.log('project here - ', project);

  return (
    <div className="w-full">
      <div className="bg-[var(--body-surface)]">
        <ProjectDetailsPageHeader project={project[0]} />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default ProjectLayout;
