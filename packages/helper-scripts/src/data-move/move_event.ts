import { prisma } from '@cubik/database';

export const move_events = async () => {
  // await prisma.hackathon.findMany();
  // datas.forEach(async (data) => {
  //   const slug = data.name
  //     .toLowerCase()
  //     .replace(/[^a-z0-9]+/g, '-')
  //     .replace(/(^-|-$)/g, '');
  //   await prisma.event.create({
  //     data: {
  //       name: data?.name || '',
  //       description: data?.longDescription || '',
  //       type: 'HACKATHON',
  //       id: data?.id,
  //       userId: '',
  //       shortDescription: data?.shortDescription,
  //       isActive: false,
  //       isArchive: false,
  //       matchedPool: data?.prizePool,
  //       tx: '',
  //       timeline: {},
  //       background: data.background,
  //       logo: data.logo,
  //       slug: slug,
  //     },
  //   });
  // });

  const d = await prisma.projectJoinHackathon.findMany();
  d.forEach(async (contri) => {
    await prisma.projectEventJoin.create({
      data: {
        eventId: contri.hackathonId,
        id: contri.id,
        isActive: true,
        isArchive: contri.isArchive,
        amount: contri.amount || 0,
        communityContribution: 0,
        projectId: contri.projectId,
        type: 'HACKATHON',
        tx: contri.tx || '',
      },
    });
  });
};
