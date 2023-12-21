import { NextResponse } from 'next/server';

import { prisma } from '@cubik/database';

export const GET = async () => {
  try {
    const eventJoinProjects = await prisma.projectJoinEvent.findMany({
      where: {
        eventId: 'bd5baaa3-dc02-4f5b-b45f-19fdc693da8c',
      },
      select: {
        _count: true,
        communityContribution: true,
        amount: true,
        project: {
          select: {
            name: true,
            logo: true,
          },
        },
      },
    });
    return NextResponse.json(eventJoinProjects);
  } catch (error) {
    console.log(error);

    return NextResponse.json([]);
  }
};
