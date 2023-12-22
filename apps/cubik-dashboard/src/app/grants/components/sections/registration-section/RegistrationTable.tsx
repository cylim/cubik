import React, { Suspense } from 'react';
import { cookies } from 'next/headers';
import { handlePageSkip } from '@/utils/handlePage';

import { ProjectEventStatus } from '@cubik/database';
import dayjs from '@cubik/dayjs';
import {
  AvatarLabelGroup,
  Icon,
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

interface Props {
  searchParams: { [key in string]: string };
}

export const RegistrationTable = async ({ searchParams }: Props) => {
  const page = handlePageSkip(searchParams.page);
  const projects = await getProjectRegistration(
    (searchParams['section'] as ProjectEventStatus) || 'APPROVED',
    page === 1 ? 0 : (page - 1) * 15,
  );
  return (
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
          {projects.length > 0 ? (
            projects.map((project, index) => {
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
            })
          ) : (
            <></>
          )}
        </Suspense>
      </TableBody>
    </Table>
  );
};
