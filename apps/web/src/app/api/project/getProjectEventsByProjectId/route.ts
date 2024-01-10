import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { decodeToken } from '@cubik/auth';
import { prisma } from '@cubik/database';
import { handleApiClientError, successHandler } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';

export const GET = async (req: NextRequest) => {
  const authToken = cookies().get('authToken');

  if (!authToken) {
    throw new Error('Unauthorized request');
  }
  try {
    const user = await decodeToken(authToken.value);
    if (!user) {
      throw new Error('Unauthorized request');
    }
    const { searchParams } = req.nextUrl;
    const projectId = searchParams.get('project');
    if (!projectId) {
      throw new Error('No project specified');
    }
    logApi({
      req: req as any,
      message: 'Project events loaded',
      source: process.cwd(),
      level: 'info',
    });
    const events = await prisma.projectJoinEvent.findMany({
      where: {
        projectId: projectId,
        project: {
          ownerPublickey: user.mainWallet,
        },
      },
      select: {
        projectEventStatus: true,
        amount: true,
        event: {
          select: {
            id: true,
            name: true,
            matchedPool: true,
            isPaused: true,
            eventStatus: true,
            _count: {
              select: {
                contribution: true,
                projectJoinEvent: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(successHandler(events, 'Events found'));
  } catch (e) {
    const error = e as Error;
    logApi({
      req: req as any,
      error,
      message: 'No events found for project',
      source: process.cwd(),
      level: 'error',
      user: await decodeToken(authToken.value),
    });
    return handleApiClientError('No events found for project');
  }
};
