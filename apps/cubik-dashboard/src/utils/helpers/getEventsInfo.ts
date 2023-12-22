'use server';

import { prisma } from '@cubik/database';

interface GetEventsInfoReturnType {
  matchedPool: number | undefined;
  participants: number | undefined;
  contributions: number | undefined;
  contributors: number | undefined;
}

export const getEventsInfo = async (
  eventId: string,
): Promise<GetEventsInfoReturnType | null> => {
  try {
    const eventData = await prisma.event.findFirst({
      where: {
        id: eventId,
      },
      select: {
        matchedPool: true,
        projectJoinEvent: {
          where: {
            isArchive: false,
            isActive: true,
          },
          select: {
            id: true,
          },
        },
        contribution: {
          where: {
            isArchive: false,
          },
          select: {
            totalUsdAmount: true,
          },
        },
      },
    });
    return {
      matchedPool: eventData?.matchedPool,
      participants: eventData?.projectJoinEvent?.length,
      contributors: eventData?.contribution?.length,
      contributions: eventData?.contribution?.reduce(
        (total, event) => total + (event.totalUsdAmount || 0),
        0,
      ),
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
