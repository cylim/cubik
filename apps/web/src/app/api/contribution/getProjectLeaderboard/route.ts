import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { decodeToken } from '@cubik/auth';
import { handleApiClientError, successHandler } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const eventId = searchParams.get('eventId');
    const project = searchParams.get('project');

    if (!eventId || !project) {
      throw new Error('Missing eventId or projectId');
    }

    const res = await prisma.contribution.findMany({
      where: {
        project: {
          slug: project,
          isArchive: false,
          isDraft: false,
        },
        isArchive: false,
        eventId: eventId,
      },
      select: {
        userId: true,
        totalUsdAmount: true,
        id: true,
        user: {
          select: {
            id: true,
            username: true,
            profileNft: true,
            profilePicture: true,
            mainWallet: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    const topEarnerMap = new Map<string, number>();

    res.forEach((item) => {
      const currentAmount = topEarnerMap.get(item.userId) || 0;
      topEarnerMap.set(item.userId, currentAmount + item.totalUsdAmount);
    });

    const topEarnerArray = Array.from(topEarnerMap.entries())
      .map(([userId, amount]) => ({ userId, amount }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 10);

    const earners = topEarnerArray.map((item) => {
      const earner = res.find((i) => i.userId === item.userId);
      return {
        ...earner,
        totalUsdAmount: item.amount,
      };
    });

    return NextResponse.json(successHandler(earners, 'Success'));
  } catch (e) {
    const error = e as Error;
    const authToken = cookies().get('authToken');
    logApi({
      req: req as any,
      error,
      message: 'Error while loading project contributions',
      source: process.cwd(),
      level: 'error',
      user: authToken ? await decodeToken(authToken.value) : undefined,
    });
    return handleApiClientError(error.message);
  }
};
