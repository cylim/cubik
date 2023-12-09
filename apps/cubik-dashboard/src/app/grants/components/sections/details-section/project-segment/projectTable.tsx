import React, { Suspense } from 'react';

import { prisma } from '@cubik/database';
import {
  AvatarLabelGroup,
  Button,
  Icon,
  InputField,
  InputFieldContainer,
  InputLeftElement,
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
      select: {
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

interface Props {
  eventId: string;
}
export const ProjectTable = async ({ eventId }: Props) => {
  const projects = await getProjects(eventId);
  return (
    <div className="bg-[var(--card-bg-primary)]">
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
          <Suspense key={eventId} fallback={'loading'}>
            {projects.length > 0 ? (
              projects.map((project) => {
                return (
                  <TableRow
                    key={project.project.name}
                    className="border-b border-[var(--card-border-secondary)]"
                  >
                    <TableCell className="">1</TableCell>
                    <TableCell>
                      <AvatarLabelGroup
                        size="xs"
                        title={project.project.name}
                        avatarShape="square"
                        avatarSrc={
                          'https://uploadthing.com/f/c2b1ffca-f2b6-433c-a126-72464f970a66_Screenshot%202023-08-22%20at%2012.02.18.png'
                        }
                      />
                    </TableCell>
                    <TableCell>134</TableCell>
                    <TableCell>134</TableCell>
                    <TableCell>
                      <Text
                        className="l2 text-[var(--avatar-label-title)]"
                        color="inherit"
                      >
                        $47,889
                      </Text>
                      <Text
                        className="l3 text-[var(--avatar-label-title)]"
                        color="tertiary"
                      >
                        47%
                      </Text>
                    </TableCell>
                    <TableCell>
                      <div className="h-10 w-full bg-red-500"></div>
                    </TableCell>
                    <TableCell className="flex items-center justify-center">
                      <Icon
                        name="chevronDown"
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
    </div>
  );
};
