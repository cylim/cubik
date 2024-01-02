import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { decodeToken } from '@cubik/auth';
import { handleApiClientError, successHandler } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';

export const GET = async (req: NextRequest) => {
  try {
    const username = req.nextUrl.searchParams.get('username');
    logApi({
      req: req as any,
      message: 'Teammate searched',
      source: 'apps/web/src/app/api/project/searchTeammate/route.ts',
      level: 'info',
    });
    if (!username) {
      throw new Error('No username specified');
    }
    const authToken = cookies().get('authToken');

    if (!authToken) {
      throw new Error('Unauthorized request');
    }
    const currentUser = decodeToken(authToken.value);

    if (!currentUser) {
      throw new Error('Unauthorized request');
    }
    const user = await prisma.user.findMany({
      where: {
        username: {
          contains: username,
        },
      },
      select: {
        id: true,
        username: true,
      },
    });

    return NextResponse.json(successHandler(user, 'Teammate searched result'));
  } catch (e) {
    const error = e as Error;
    logApi({
      req: req as any,
      error,
      message: 'Failed to search teammate',
      source: 'apps/web/src/app/api/project/searchTeammate/route.ts',
      level: 'error',
    });
    return handleApiClientError('Failed to search teammate');
  }
};
