import React from 'react';
import { notFound } from 'next/navigation';
import { CustomModal } from '@/app/components/common/modal';
import { ProjectHeader } from '@/app/project/components/layout/ProjectHeader';
import type {
  ProjectPageLayoutType,
} from '@/types/project';

import { prisma } from '@cubik/database';

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
        
        
      },
    });
    if (!project) {
      return [null, null];
    }
    
    const layoutData: ProjectPageLayoutType = {
      id: project?.id,
      name: project?.name,
      shortDescription: project?.shortDescription,
      logo: project?.logo,
      projectLink: project?.projectLink,
      mutliSigAddress: project?.mutliSigAddress,
      events: [],
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
      <CustomModal>
        <div className="max-w-full bg-[#212121] p-0">
        <div className="mx-auto flex max-w-7xl items-center justify-start gap-10 px-4 py-6 pt-24 sm:px-8 md:py-16 md:pt-32 xl:px-4">
          {/* <ProjectHeader projectWithEvent={projectWithEvent} /> */}
        </div>
      </div>
        <div className="font-inter w-full max-w-full bg-[#0D0D0D] p-0">
        {children}
      </div>
      </CustomModal>
    </>
  );
};

export default ProjectPageLayout;
