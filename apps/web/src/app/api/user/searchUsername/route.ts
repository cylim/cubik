import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@cubik/database';
import {
  handleApiClientError,
  handleApiRouteError,
  successHandler,
} from '@cubik/database/api';
import { logApi } from '@cubik/logger/src/axiom';

export const GET = async (req: NextRequest) => {
  try {
    const username = req.nextUrl.searchParams.get('username');
    if (!username) {
      return handleApiClientError('Username is required');
    }
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    if (!user) {
      return NextResponse.json(
        successHandler(
          {
            username,
            usernameAvailable: true,
          },
          'Username is available',
        ),
      );
    }
    return NextResponse.json(
      successHandler(
        {
          username,
          usernameAvailable: false,
        },
        'Username is not available',
      ),
    );
  } catch (error) {
    logApi({
      error,
      message: 'Internal server error - Failed to create organization!',
      req: req as any,
      statusCode: 500,
    });
    return handleApiRouteError(error);
  }
};
