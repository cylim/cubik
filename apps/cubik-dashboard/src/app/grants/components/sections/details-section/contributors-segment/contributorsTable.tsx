import React from 'react';
import { handlePageSkip } from '@/utils/handlePage';

import {
  generateUserBackupImage,
  getToken,
  Project_Backup,
  TokenList,
} from '@cubik/common';
import { prisma } from '@cubik/database';
import dayjs from '@cubik/dayjs';
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

const getContributions = async (eventId: string, skip: number = 0) => {
  try {
    const contribution = await prisma.contribution.findMany({
      where: {
        eventId: eventId,
        isArchive: false,
      },
      skip,
      take: 15,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        token: true,
        totalUsdAmount: true,
        totalAmount: true,
        createdAt: true,
        user: {
          select: {
            profilePicture: true,
            username: true,
          },
        },
        project: {
          select: {
            name: true,
            logo: true,
          },
        },
      },
    });

    return contribution;
  } catch (error) {
    return [];
  }
};

const getContributionCount = async (eventId: string) => {
  try {
    return await prisma.contribution.count({
      where: {
        eventId: eventId,
        isArchive: false,
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

export const ContributorsTable = async ({ eventId, searchParams }: Props) => {
  const page = handlePageSkip(searchParams?.contributors_page);
  const contributionCount = await getContributionCount(eventId);
  const contributions = await getContributions(
    eventId,
    page === 1 ? 0 : (page - 1) * 15,
  );
  return (
    <div className="bg-[var(--card-bg-primary)]">
      <div className="flex flex-col items-center justify-between gap-3 p-5 md:flex-row">
        <SubHead heading="All Contributors" />
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
            <TableHead>
              <Text color={'secondary'}>User</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Amount Contributed</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Contribution Time</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Project</Text>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contributions.map((contribution) => {
            const token = getToken(contribution.token);
            return (
              <TableRow
                key={contribution.id}
                className="border-b border-[var(--card-border-secondary)]"
              >
                <TableCell>
                  <AvatarLabelGroup
                    size="xs"
                    title={contribution.user.username as string}
                    avatarShape="square"
                    avatarSrc={
                      contribution.user.profilePicture ||
                      generateUserBackupImage()
                    }
                  />
                </TableCell>
                <TableCell>
                  <Text
                    className="l2 text-[var(--avatar-label-title)]"
                    color="inherit"
                  >
                    <AvatarLabelGroup
                      size="xs"
                      title={`${contribution.totalAmount.toFixed(2)} ${
                        token?.name
                      }`}
                      avatarShape="circle"
                      description={`$${contribution.totalUsdAmount.toFixed(2)}`}
                      avatarSrc={token?.logoURI || ''}
                    />
                  </Text>
                </TableCell>

                <TableCell>
                  <Text
                    className="l3 text-[var(--avatar-label-title)]"
                    color="tertiary"
                  >
                    {dayjs(contribution.createdAt).fromNow()}
                  </Text>
                </TableCell>
                <TableCell>
                  <AvatarLabelGroup
                    size="xs"
                    title={contribution.project.name}
                    avatarShape="square"
                    avatarSrc={contribution.project.logo || Project_Backup}
                  />
                </TableCell>

                <TableCell className="flex items-center justify-center">
                  <Icon name="chevronRight" className="l3" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="w-full border-t border-[var(--card-border-secondary)] px-6 py-4">
        <PaginationButton
          route="/grants?contributors_page="
          maxPage={Math.ceil(contributionCount / 15)}
          page={page}
        />
      </div>
    </div>
  );
};
