import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { decodeToken } from '@cubik/auth';
import { handleApiClientError, successHandler } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';
import { prisma } from '@cubik/database';

type GroupBy = 'day' | 'week' | 'month' | 'year';

type Contributor = {
  userId: string;
  totalUsdAmount: number;
  createdAt: Date;
};

// type ContributionPeriod = {
//   period: string;
//   totalAmount: number;
// };

// type ContributorPeriod = {
//   period: string;
//   userIds: string[];
// };

// type AggregatedData = {
//   contributions: [string, number][];
//   contributors: [string, number][];
// };

// const getPeriodKey = (date: Date, groupBy: GroupBy): string => {
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const week = getWeekNumber(date);
//   const day = date.getDate();

//   switch (groupBy) {
//     case 'day':
//       return `${year}-${month + 1}-${day}`;
//     case 'week':
//       return `${year}-W${week}`;
//     case 'month':
//       return `${year}-${month + 1}`;
//     case 'year':
//       return `${year}`;
//   }
// };

// const getWeekNumber = (date: Date): number => {
//   const start = new Date(date.getFullYear(), 0, 1);
//   const days =
//     Math.floor((date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)) +
//     ((start.getDay() + 6) % 7);
//   return Math.ceil(days / 7);
// };

// const aggregateData = (
//   data: Contributor[],
//   groupBy: GroupBy,
// ): AggregatedData => {
//   const contributionsMap = new Map<string, number>();
//   const contributorsMap = new Map<string, Set<string>>();

//   data.forEach(({ userId, totalUsdAmount, createdAt }) => {
//     const periodKey = getPeriodKey(createdAt, groupBy);

//     // Update contributions
//     const currentAmount = contributionsMap.get(periodKey) || 0;
//     contributionsMap.set(periodKey, currentAmount + totalUsdAmount);

//     // Update contributors
//     const currentContributors =
//       contributorsMap.get(periodKey) || new Set<string>();
//     currentContributors.add(userId);
//     contributorsMap.set(periodKey, currentContributors);
//   });

//   const contributions: [string, number][] = Array.from(
//     contributionsMap,
//     ([period, totalAmount]) => [period, totalAmount],
//   );
//   const contributors: [string, number][] = Array.from(
//     contributorsMap,
//     ([period, userIds]) => [period, userIds.size],
//   );

//   return { contributions, contributors };
// };

export const aggregateData = (data: Contributor[], groupBy: GroupBy) => {};

export const GET = async (req: NextRequest) => {
  try {
    const authToken = cookies().get('authToken');
    if (!authToken) {
      throw new Error('Unauthorized request');
    }
    const user = await decodeToken(authToken.value);
    if (!user) {
      throw new Error('Unauthorized request');
    }
    const { searchParams } = req.nextUrl;
    const projectId = searchParams.get('project');
    const timeline = searchParams.get('timeline');
    if (!projectId || !timeline) {
      throw new Error('project & timeline is not specified');
    }
    logApi({
      req: req as any,
      message: 'Project events loaded',
      source: process.cwd(),
      level: 'info',
    });

    const contributors = await prisma.contribution.findMany({
      where: {
        projectId: projectId,
        project: {
          ownerPublickey: user.mainWallet,
          isArchive: false,
        },
        isArchive: false,
      },
      select: {
        userId: true,
        totalUsdAmount: true,
        createdAt: true,
      },
    });
    // const d = aggregateData(contributors, timeline as GroupBy);

    //   successHandler(, 'Stats found for projectId and eventId'),
    return NextResponse.json({
      contributors,
    });
  } catch (e) {
    const error = e as Error;
    const authToken = cookies().get('authToken');
    logApi({
      req: req as any,
      error,
      message: 'No stats found for projectId and eventId',
      source: process.cwd(),
      level: 'error',
      user: authToken ? await decodeToken(authToken.value) : undefined,
    });
    return handleApiClientError(error.message);
  }
};
