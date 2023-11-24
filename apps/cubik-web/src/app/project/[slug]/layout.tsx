import React from 'react';
import { notFound } from 'next/navigation';
import type {
  ProjectPageEventType,
  ProjectPageLayoutType,
} from '@/types/project';

import { prisma } from '@cubik/database';

import { ProjectHeader } from '../components/layout/ProjectHeader';

interface Props {
  params: {
    slug: string;
  };
  children: React.JSX.Element | React.JSX.Element[];
}

const fetchProject = async (
  slug: string,
): Promise<[ProjectPageLayoutType | null, Error | null]> => {
  try {
    const project = await prisma.project.findFirst({
      where: {
        isActive: true,
        isArchive: false,
        slug: slug,
      },
      select: {
        id: true,
        name: true,
        shortDescription: true,
        logo: true,
        projectLink: true,
        mutliSigAddress: true,
        projectJoinHackathon: {
          where: {
            isArchive: false,
          },
          select: {
            id: true,
            hackathonId: true,
            hackathon: {
              select: {
                name: true,
                votingStartDate: true,
                votingEndDate: true,
              },
            },
          },
        },
        projectJoinRound: {
          where: {
            isArchive: false,
          },
          select: {
            id: true,
            roundId: true,
            round: {
              select: {
                name: true,
                startTime: true,
                endTime: true,
              },
            },
          },
        },
      },
    });
    if (!project) {
      return [null, null];
    }
    const hackathons: ProjectPageEventType[] = project.projectJoinHackathon.map(
      (hackathon) => {
        return {
          eventId: hackathon.hackathonId,
          eventType: 'hackathon',
          name: hackathon.hackathon.name,
          joinId: hackathon.id,
          startTime: hackathon.hackathon.votingStartDate || new Date(),
          endTime: hackathon.hackathon.votingEndDate || new Date(),
        };
      },
    );
    const rounds: ProjectPageEventType[] = project.projectJoinRound.map(
      (round) => {
        return {
          eventId: round.roundId,
          eventType: 'round',
          name: round.round.name,
          joinId: round.id,
          startTime: round.round.startTime,
          endTime: round.round.endTime,
        };
      },
    );
    const layoutData: ProjectPageLayoutType = {
      id: project?.id,
      name: project?.name,
      shortDescription: project?.shortDescription,
      logo: project?.logo,
      projectLink: project?.projectLink,
      mutliSigAddress: project?.mutliSigAddress,
      events: [...hackathons, ...rounds],
    };
    return [layoutData, null];
  } catch (error) {
    console.log(error);
    return [null, error as Error];
  }
};

const ProjectPageLayout = async ({ params, children }: Props) => {
  const [projectWithEvent, error] = await fetchProject(params.slug as string);

  if (error || !projectWithEvent) {
    notFound();
  }

  return (
    <>
      <div className="max-w-full bg-[#212121] p-0">
        <div className="mx-auto flex max-w-7xl items-center justify-start gap-10 px-4 py-6 pt-24 sm:px-8 md:py-16 md:pt-32 xl:px-4">
          <ProjectHeader projectWithEvent={projectWithEvent} />
        </div>
      </div>
      <div className="font-inter w-full max-w-full bg-[#0D0D0D] p-0">
        {children}
      </div>
    </>
  );
};

export default ProjectPageLayout;
