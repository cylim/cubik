import { NextResponse } from 'next/server';

import { prisma } from '@cubik/database';

export const GET = async () => {
  try {
    const data = await prisma.contribution.findMany({
      where: {
        // projectId,
        isArchive: false,

        // createdAt: {
        //   gte: dateNow.subtract(IntervalsToDate[date], 'D').toDate(),
        // },
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        user: true,
        totalUsdAmount: true,
        createdAt: true,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);

    return NextResponse.json([]);
  }
};
