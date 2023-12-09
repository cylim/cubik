'use server';

import { prisma } from '@cubik/database';

interface MetricsReturnType {
  contributions: number;
  contributors: number;
  matchingPool: number;
  remaingMatchingPool: number;
}
export const getMetrics = async (
  eventId: string,
): Promise<MetricsReturnType> => {
  try {
    const contributions = await prisma.contribution.findMany({
      where: {
        eventId,
      },
      select: {
        userId: true,
        event: {
          select: {
            matchedPool: true,
          },
        },
      },
    });

    const mapContributors: string[] = [];

    contributions.forEach((e) => {
      if (!mapContributors.find((el) => e.userId === el)) {
        mapContributors.push(e.userId);
      }
    });

    return {
      contributions: contributions.length,
      contributors: mapContributors.length,
      matchingPool: contributions[0].event?.matchedPool || 0,
      remaingMatchingPool: 0,
    };
  } catch (error) {
    return {
      contributions: 0,
      contributors: 0,
      matchingPool: 0,
      remaingMatchingPool: 0,
    };
  }
};
