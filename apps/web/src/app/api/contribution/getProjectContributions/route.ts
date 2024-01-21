import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@cubik/database';
import { handleApiClientError, successHandler } from '@cubik/database/api';

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const eventId = searchParams.get('eventId');
    const project = searchParams.get('project');
    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;
    if (!eventId || !project) {
      throw new Error('Missing eventId or projectId');
    }
    const skip = (page - 1) * limit;
    const [data, count] = await prisma.$transaction([
      prisma.contribution.findMany({
        where: {
          project: {
            slug: project,
          },
          eventId: eventId,
        },
        skip: skip,
        take: limit,
        select: {
          id: true,
          user: {
            select: {
              id: true,
              username: true,
              mainWallet: true,
              profilePicture: true,
            },
          },
          totalUsdAmount: true,
          totalAmount: true,
          createdAt: true,
          token: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.contribution.count({
        where: {
          project: {
            slug: project,
          },
          eventId: eventId,
        },
      }),
    ]);

    // count the number of pages using the limit and count variables
    const total = Math.ceil(count / limit);

    return NextResponse.json(
      successHandler(
        {
          data,
          total,
          page,
        },
        'Success',
      ),
    );
  } catch (e) {
    const error = e as Error;
    const authToken = cookies().get('authToken');
    // logE({
    //   req: req as any,
    //   error,
    //   message: 'Error while loading project contributions',
    //   source: process.cwd(),
    //   level: 'error',
    //   user: authToken ? await decodeToken(authToken.value) : undefined,
    // });
    return handleApiClientError(error.message);
  }
};
