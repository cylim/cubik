import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { IsUserLoginServer } from '@/utils/helpers/isUserLogin';

import { prisma } from '@cubik/database';
import {
  apiResponse,
  handleApiAuthError,
  handleApiRouteError,
  successHandler,
} from '@cubik/database/api';

export const GET = async (req: NextRequest) => {
  try {
    const scope = req.nextUrl.searchParams.get('scope');
    const authToken = cookies().get('authToken');
    const scopeSelected = cookies().get('access-scope');

    // checks current client scope
    if (scopeSelected?.value !== scope) {
      return handleApiAuthError();
    }

    // checks if user is logged in
    if (!authToken?.value) {
      return handleApiAuthError();
    }
    const user = await IsUserLoginServer(authToken?.value);
    // checks if user has access to the current scope
    if (
      !user?.accessScope.find((accessScope) => accessScope.event_id === scope)
    ) {
      return handleApiAuthError();
    }

    const contributions = await prisma.contribution.findMany({
      where: {
        eventId: scope,
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

    return NextResponse.json(
      apiResponse({
        message: 'Metrics fetched successfully!',
        success: true,
        result: {
          contributions: contributions.length,
          contributors: mapContributors.length,
          matchingPool: contributions[0].event?.matchedPool || 0,
          remaingMatchingPool: 0,
        },
      }),
    );
  } catch (error) {
    return handleApiRouteError(error);
  }
};

export async function OPTIONS() {
  try {
    return NextResponse.json(
      successHandler({ options: 'GET' }, 'Options fetched successfully!'),
      { status: 200 },
    );
  } catch (error) {
    return handleApiRouteError(error);
  }
}
