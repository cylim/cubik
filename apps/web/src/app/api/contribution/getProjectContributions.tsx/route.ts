import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

import { decodeToken } from '@cubik/auth';
import { handleApiClientError } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const eventId = searchParams.get('eventId');
    const projectId = searchParams.get('projectId');
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
