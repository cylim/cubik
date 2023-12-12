import { count } from 'console';
import React, { Suspense } from 'react';
import { handlePageSkip } from '@/utils/handlePage';

import { prisma } from '@cubik/database';
import {
  AvatarLabelGroup,
  Button,
  Icon,
  InputField,
  InputFieldContainer,
  InputLeftElement,
  PaginationButton,
  SubHead,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@cubik/ui';

const getProjects = async (eventId: string, skip: number = 0) => {
  try {
    const eventJoinProjects = await prisma.projectEventJoin.findMany({
      where: {
        eventId: eventId,
        isActive: true,
        isArchive: false,
        project: {
          isActive: true,
          isArchive: false,
        },
      },
      take: 15,
      skip,
      orderBy: {
        amount: 'desc',
      },
      select: {
        event: {
          select: {
            matchedPool: true,
          },
        },
        contribution: {
          where: {
            isArchive: false,
          },
          distinct: 'userId',
          select: {
            userId: true,
          },
        },
        _count: true,
        communityContribution: true,
        amount: true,
        project: {
          select: {
            name: true,
            logo: true,
          },
        },
      },
    });

    return eventJoinProjects;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getProjectCount = async (eventId: string) => {
  try {
    return await prisma.projectEventJoin.count({
      where: {
        eventId,
        isActive: true,
        isArchive: false,
        project: {
          isActive: true,
          isArchive: false,
        },
      },
    });
  } catch (error) {
    return 0;
  }
};

interface Props {
  eventId: string;
  searchParams: { [key in string]: string };
}

export const ProjectTable = async ({ eventId, searchParams }: Props) => {
  const page = handlePageSkip(searchParams.page);
  const projectCount = await getProjectCount(eventId);
  const projects = await getProjects(eventId, page === 1 ? 0 : (page - 1) * 15);

  return (
    <div className="bg-[var(--card-bg-primary)] ">
      <div className="flex flex-col items-center justify-between gap-3 p-5 md:flex-row">
        <SubHead heading="All Projects" />
        <div className="flex items-center justify-between gap-5">
          <InputFieldContainer variant={'md'}>
            <InputLeftElement withBorder={false}>
              <Icon name="search" />
            </InputLeftElement>
            <InputField placeholder="Search" />
          </InputFieldContainer>
          <Button
            className="w-60 px-3"
            variant="secondary"
            rightIconName="download"
          >
            Download CSV
          </Button>
        </div>
      </div>
      <Table className="">
        <TableHeader className="border-b border-[var(--card-border-secondary)]">
          <TableRow className="">
            <TableHead className="w-10"></TableHead>
            <TableHead>
              <Text color={'secondary'}>Projects</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Contributors</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Contributions</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Matching</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Progress</Text>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Suspense key={eventId} fallback={<>Loading....</>}>
            {projects.length > 0 ? (
              projects.map((project, index) => {
                return (
                  <TableRow
                    key={project.project.name}
                    className="border-b border-[var(--card-border-secondary)]"
                  >
                    <TableCell className="">
                      {(page === 1 ? 0 : (page - 1) * 15) + index + 1}
                    </TableCell>
                    <TableCell>
                      <AvatarLabelGroup
                        size="xs"
                        title={project.project.name}
                        avatarShape="square"
                        avatarSrc={project.project.logo}
                      />
                    </TableCell>
                    <TableCell>{project.contribution.length}</TableCell>
                    <TableCell>{project._count.contribution}</TableCell>
                    <TableCell>
                      <Text
                        className="l2 text-[var(--avatar-label-title)]"
                        color="inherit"
                      >
                        ${project.amount.toFixed(2)}
                      </Text>
                      <Text
                        className="l3 text-[var(--avatar-label-title)]"
                        color="tertiary"
                      >
                        {(
                          (project.amount / project.event.matchedPool) *
                          100
                        ).toFixed(2)}
                        %
                      </Text>
                    </TableCell>
                    <TableCell>
                      <div className="h-10 w-full bg-red-500"></div>
                    </TableCell>
                    <TableCell className="flex items-center justify-center">
                      <Icon
                        name="chevronRight"
                        className="stroke-[var(--color-neutral-700)]"
                      />
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <></>
            )}
          </Suspense>
        </TableBody>
      </Table>
      <div className="w-full border-t border-[var(--card-border-secondary)] px-6 py-4">
        <PaginationButton
          maxPage={Math.ceil(projectCount / 15)}
          route="/grants?section=projects&page="
          page={page}
        />
      </div>
    </div>
  );
};
