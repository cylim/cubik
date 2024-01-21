import React, { Suspense } from 'react';
import { cookies } from 'next/headers';
import { handlePageSkip } from '@/utils/handlePage';

import { prisma, ProjectEventStatus } from '@cubik/database';
import dayjs from '@cubik/dayjs';
import {
  AvatarLabelGroup,
  EmptyState,
  Icon,
  PaginationButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
  TagLabel,
  Text,
} from '@cubik/ui';

const getProjectRegistration = async (
  status: ProjectEventStatus,
  skip: number,
) => {
  try {
    const eventScope = cookies().get('access-scope');

    if (!eventScope?.value) return [];

    return await prisma.projectJoinEvent.findMany({
      where: {
        eventId: eventScope.value,
        projectEventStatus: status,
      },
      take: 15,
      skip,
      select: {
        id: true,
        createdAt: true,
        projectEventStatus: true,

        project: {
          select: {
            name: true,
            logo: true,
            email: true,
            projectLink: true,
            owner: {
              select: {
                username: true,
                profilePicture: true,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    return [];
  }
};

const getProjectRegistrationCount = async (status: ProjectEventStatus) => {
  try {
    const eventScope = cookies().get('access-scope');

    if (!eventScope?.value) return 0;

    return await prisma.projectJoinEvent.count({
      where: {
        eventId: eventScope.value,
        projectEventStatus: status,
      },
    });
  } catch (error) {
    return 0;
  }
};

interface Props {
  searchParams: { [key in string]: string };
}
const getStatus = (status: string) => {
  if (!status) {
    return ProjectEventStatus.APPROVED;
  }
  if (status.toLowerCase() === 'pending') {
    return ProjectEventStatus.PENDING;
  }
  if (status.toLowerCase() === 'approved') {
    return ProjectEventStatus.APPROVED;
  }
  if (status.toLowerCase() === 'rejected') {
    return ProjectEventStatus.REJECTED;
  }

  return ProjectEventStatus.APPROVED;
};
export const RegistrationTable = async ({ searchParams }: Props) => {
  const page = handlePageSkip(searchParams.registration_page);

  const projectCount = await getProjectRegistrationCount(
    getStatus(searchParams['section']),
  );
  const projects = await getProjectRegistration(
    getStatus(searchParams['section']),
    page === 1 ? 0 : (page - 1) * 15,
  );

  if (projects.length === 0) {
    return (
      <EmptyState
        description="Looks like there are no project applications to see here. Please try again after some time."
        title="No Applications to see here!"
        icon="file"
        iconColor="var(--empty-state-icon-orange-stroke)"
        bgColor="bg-[var(--empty-state-icon-orange-fill)]"
      />
    );
  }

  return (
    <div className="bg-[var(--card-bg-primary)] py-4">
      <Table className="">
        <TableHeader
          style={{
            borderColor: 'var(--card-border-secondary)',
          }}
          className="border-b"
        >
          <TableRow className="">
            <TableHead className="w-10"></TableHead>
            <TableHead>
              <Text color={'secondary'}>Projects</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Project Link</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Creator</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Time</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Status</Text>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Suspense fallback={<>Loading....</>}>
            {projects.map((project, index) => {
              return (
                <TableRow
                  key={project.project.name}
                  className="border-b border-[var(--card-border-secondary)]"
                >
                  <TableCell className="">
                    <Text color={'primary'} className="l2">
                      {(page === 1 ? 0 : (page - 1) * 15) + index + 1}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <AvatarLabelGroup
                      size="sm"
                      title={project.project.name}
                      avatarShape="square"
                      avatarSrc={project.project.logo}
                      description={project.project.email}
                    />
                  </TableCell>
                  <TableCell>
                    <Text color={'primary'} className="l2">
                      {project.project.projectLink}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <AvatarLabelGroup
                      size="sm"
                      avatarSrc={project.project.owner.profilePicture}
                      title={project.project.owner.username}
                    />
                  </TableCell>
                  <TableCell>
                    <Text
                      className="l2 text-[var(--avatar-label-title)]"
                      color="inherit"
                    >
                      {dayjs(project.createdAt).fromNow()}
                    </Text>
                  </TableCell>
                  <TableCell>
                    {project.projectEventStatus === 'PENDING' && (
                      <Tag color="orange" variant="subtle">
                        <TagLabel>Under Review</TagLabel>
                      </Tag>
                    )}
                    {project.projectEventStatus === 'APPROVED' && (
                      <Tag color="green" variant="subtle">
                        <TagLabel>Accepted</TagLabel>
                      </Tag>
                    )}
                    {project.projectEventStatus === 'REJECTED' && (
                      <Tag color="red" variant="subtle">
                        <TagLabel>Rejected</TagLabel>
                      </Tag>
                    )}
                  </TableCell>
                  <TableCell className="flex items-center justify-center">
                    <Icon name="chevronRight" className="l3" />
                  </TableCell>
                </TableRow>
              );
            })}
          </Suspense>
        </TableBody>
      </Table>
      <div className="w-full border-t border-[var(--card-border-secondary)] px-6 py-4">
        {projectCount > 15 && (
          <PaginationButton
            maxPage={Math.ceil(projectCount / 15)}
            route="/grants?registration_page="
            page={page}
          />
        )}
      </div>
    </div>
  );
};
