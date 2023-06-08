import { procedure } from '~/server/trpc';
import { prisma } from '~/server/utils/prisma';

export const findManyRejected = procedure.query(async () => {
  try {
    const res = await prisma.projectsModel.findMany({
      include: {
        ProjectJoinRound: {
          include: {
            fundingRound: true,
          },
        },
        owner: true,
      },
      where: {
        status: 'FAILED',
      },
    });
    return res;
  } catch (error: any) {
    throw new Error(error.message || 'There was some error');
  }
});