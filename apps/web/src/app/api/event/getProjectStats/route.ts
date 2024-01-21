import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@cubik/database';
import { handleApiRouteError, successHandler } from '@cubik/database/api';

export const GET = async (req: NextRequest) => {
  try {
    const eventId = req.nextUrl.searchParams.get('eventId') as string;
    const slug = req.nextUrl.searchParams.get('slug') as string;

    if (!slug || !eventId) {
      throw new Error('Missing eventId or slug');
    }
    const projectJoinEvent = await prisma.projectJoinEvent.findFirst({
      where: {
        eventId: eventId,
        project: {
          slug: slug,
        },
      },
      select: {
        amount: true,
        contribution: {
          select: {
            totalAmount: true,
            userId: true,
          },
        },
      },
    });
    const uniqueContributors: string[] = [];
    const communityContributions: number = 0;

    for (const c of projectJoinEvent?.contribution || []) {
      communityContributions + c.totalAmount; // add token price to this api
      if (!uniqueContributors.includes(c.userId)) {
        uniqueContributors.push(c.userId);
      }
    }

    return NextResponse.json(
      successHandler(
        {
          estimatedMatch: projectJoinEvent?.amount || 0,
          communityContributions: communityContributions,
          contributors: uniqueContributors,
        },
        'project stats',
      ),
    );
  } catch (error) {
    console.log(error);
    return handleApiRouteError(error);
  }
};
