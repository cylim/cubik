import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { decodeToken } from '@cubik/auth';
import { prisma } from '@cubik/database';
import { handleApiClientError, successHandler } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';

export const GET = async (req: NextRequest) => {
  try {
    const authToken = cookies().get('authToken');

    if (!authToken) {
      throw new Error('Unauthorized request');
    }
    const { searchParams } = req.nextUrl;
    const projectId = searchParams.get('project');

    if (!projectId) {
      throw new Error('No project specified');
    }
    const user = await decodeToken(authToken.value);
    if (!user) {
      throw new Error('Unauthorized request');
    }
    logApi({
      req: req as any,
      message: 'get project stats body',
      source: process.cwd(),
      level: 'info',
      user: user,
    });
    const [contribution, projectJoinEvents] = await prisma.$transaction([
      prisma.contribution.findMany({
        where: {
          projectId: projectId,
          project: {
            ownerPublickey: user.mainWallet,
            isArchive: false,
          },
          isArchive: false,
        },
        select: {
          totalUsdAmount: true,
          userId: true,
        },
      }),
      prisma.projectJoinEvent.findMany({
        where: {
          projectId: projectId,
          project: {
            ownerPublickey: user.mainWallet,
            isArchive: false,
          },
          isArchive: false,
        },
        select: {
          amount: true,
        },
      }),
    ]);
    const totalContributors: string[] = [];
    contribution.forEach((contributor) => {
      if (!totalContributors.includes(contributor.userId)) {
        totalContributors.push(contributor.userId);
      }
    });

    return NextResponse.json(
      successHandler(
        {
          totalContributions: contribution.reduce(
            (acc, curr) => acc + curr.totalUsdAmount,
            0,
          ),
          totalContributors: totalContributors.length,
          matchGrantAmount: projectJoinEvents.reduce(
            (acc, curr) => acc + curr.amount,
            0,
          ),
        },
        'Project stats loaded',
      ),
    );
  } catch (e) {
    const error = e as Error;
    const authToken = cookies().get('authToken');

    logApi({
      req: req as any,
      error,
      message: 'Failed to get project stats',
      source: process.cwd(),
      level: 'error',
      user: authToken?.value ? await decodeToken(authToken?.value) : undefined,
    });
    return handleApiClientError('Failed to get project stats');
  }
};
