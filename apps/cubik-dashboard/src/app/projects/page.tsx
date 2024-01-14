import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { ProjectSearch } from '@/app/projects/components/ProjectSearch';
import { ProjectsDashboardTable } from '@/app/projects/components/projectsTable';
import { checkSuperAdmin } from '@/utils/helpers/checkSuperAdmin';
import { get } from '@vercel/edge-config';

import { decodeToken } from '@cubik/auth/src/admin';
import { ProjectVerifyStatus } from '@cubik/database';
import { logApi } from '@cubik/logger/src';
import { SegmentContainer, SegmentItem, Text } from '@cubik/ui';

interface Props {
  searchParams: {
    status: ProjectVerifyStatus | undefined;
    page: string;
    search: string;
    industry: string;
  };
}

const sectionNames: Record<ProjectVerifyStatus, string> = {
  [ProjectVerifyStatus.REVIEW]: 'Pending',
  [ProjectVerifyStatus.VERIFIED]: 'Accepted',
  [ProjectVerifyStatus.FAILED]: 'Rejected',
};

interface GetProjectArgs {
  pageNumber: number | undefined;
  limitNumber: number | undefined;
  projectStatus: ProjectVerifyStatus;
  industry: string | undefined;
  search: string | undefined;
}
const getProjects = async ({
  limitNumber,
  pageNumber,
  projectStatus,
  industry,
  search,
}: GetProjectArgs) => {
  try {
    const check = await checkSuperAdmin();
    if (!check) {
      throw new Error('Not a admin');
    }
    const page = pageNumber || 1;
    const limit = limitNumber || 10;
    const statuses = Object.values(ProjectVerifyStatus);
    if (
      projectStatus &&
      statuses.find((status) => status === projectStatus) === undefined
    ) {
      throw new Error('Invalid project status');
    }
    const skip = (page - 1) * limit;

    logApi({
      message: 'fetching projects',
      body: {
        limitNumber,
        pageNumber,
        projectStatus,
        industry,
        search,
      },
      level: 'info',
      source: process.cwd(),
      statusCode: 200,
    });
    const tx = await prisma.$transaction([
      prisma.project.findMany({
        skip: Number(skip),
        take: Number(limit),
        ...(projectStatus && {
          where: {
            status: projectStatus as ProjectVerifyStatus,
            isDraft: false,
          },
        }),
        ...(industry && {
          where: {
            industry: {
              array_contains: industry!,
            },
            isDraft: false,
          },
        }),
        ...(search && {
          where: {
            name: {
              search: search!,
            },
            isDraft: false,
            // ...(projectStatus && { status: projectStatus as ProjectVerifyStatus }),
          },
        }),
        select: {
          id: true,
          name: true,
          logo: true,
          slug: true,
          status: true,
          industry: true,
          createdAt: true,
          projectLink: true,
          email: true,
          owner: {
            select: {
              id: true,
              username: true,
              profilePicture: true,
              mainWallet: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.project.count({
        ...(projectStatus && {
          where: {
            status: projectStatus as ProjectVerifyStatus,
            isDraft: false,
            isArchive: false,
          },
        }),
        ...(industry && {
          where: {
            industry: {
              array_contains: industry!,
            },
            isDraft: false,
            isArchive: false,
          },
        }),
        ...(search && {
          where: {
            name: {
              search: search!,
            },
            isDraft: false,
            isArchive: false,
          },
        }),
        where: {
          isDraft: false,
        },
      }),
    ]);
    const totalPages = Math.ceil(tx[1] / limit);
    console.log(totalPages, '---tp');
    return {
      projects: tx[0],
      numResults: tx[1],
      totalPages,
    };
  } catch (e) {
    logApi({
      message: 'Error fetching projects',
      error: e,
      body: {
        limitNumber,
        pageNumber,
        projectStatus,
        industry,
        search,
      },
      level: 'error',
      source: process.cwd(),
      statusCode: 500,
    });
    return {
      projects: [],
      numResults: 0,
      totalPages: 0,
    };
  }
};

const ProjectPage = async ({ searchParams }: Props) => {
  const states = Object.values(ProjectVerifyStatus);
  const check = await checkSuperAdmin();

  if (!check) {
    notFound();
  }
  const projects = await getProjects({
    search: searchParams.search,
    industry: searchParams.industry,
    limitNumber: 10,
    pageNumber: Number(searchParams.page || '1'),
    projectStatus: searchParams.status || ProjectVerifyStatus.REVIEW,
  });

  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
      <div className="flex w-full flex-col gap-5">
        <Text color="primary" className="h5 pb-5">
          All Projects
        </Text>
        <div className="flex w-full flex-row place-items-stretch justify-between gap-x-14">
          <div className="max-w-sm">
            <SegmentContainer size="sm">
              {states.map((state) => {
                return (
                  <SegmentItem
                    key={state}
                    href={`/projects?status=${state}`}
                    isActive={
                      state ===
                      (searchParams.status || ProjectVerifyStatus.REVIEW)
                    }
                  >
                    <Text className="w-full">{sectionNames[state]}</Text>
                  </SegmentItem>
                );
              })}
            </SegmentContainer>
          </div>
          <div className="w-full max-w-sm">
            <ProjectSearch />
          </div>
        </div>
        <ProjectsDashboardTable
          currentPage={Number(searchParams.page || '1')}
          status={searchParams.status || ProjectVerifyStatus.REVIEW}
          totalPage={projects.totalPages}
          projects={projects.projects}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
