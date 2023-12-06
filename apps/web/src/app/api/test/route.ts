import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = await prisma.projectEventJoin.findMany({
    where: {
      eventId: 'f3877b79-ceef-462f-8a7e-caa5d8496222',
    },
    select: {
      project: {
        select: {
          name: true,
          logo: true,
          githubLink: true,
          twitterHandle: true,
          owner: {
            select: {
              username: true,
            },
          },
          projectLink: true,
        },
      },
    },
  });
  return NextResponse.json(data.map((e) => e.project));
};
