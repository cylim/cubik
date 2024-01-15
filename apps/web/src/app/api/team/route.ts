import { NextRequest, NextResponse } from 'next/server';

import { handleApiClientError, successHandler } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';

export const GET = async (req: NextRequest) => {
  try {
    logApi({
      req: req as any,
      message: 'Team loaded',
      source: process.cwd(),
      level: 'info',
    });
    const { searchParams } = req.nextUrl;
    // const projectId = searchParams.get('projectId');
    const slug = searchParams.get('slug');
    if (!slug) {
      throw new Error('No slug specified');
    }
    const team = await prisma.team.findMany({
      where: {
        // projectId,
        project: {
          slug: slug,
        },
      },
      select: {
        user: {
          select: {
            id: true,
            username: true,
            profilePicture: true,
          },
        },
        project: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!team) {
      throw new Error('No team found');
    }
    return NextResponse.json(successHandler(team, 'Team loaded'));
  } catch (e) {
    const error = e as Error;
    logApi({
      req: req as any,
      error,
      message: 'Failed to load team',
      source: process.cwd(),
      level: 'error',
    });
    return handleApiClientError('Failed to load team');
  }
};
