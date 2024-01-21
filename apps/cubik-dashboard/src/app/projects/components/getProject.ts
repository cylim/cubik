'use server';

import { checkSuperAdmin } from '@/utils/helpers/checkSuperAdmin';

import { prisma } from '@cubik/database';

export const getProject = async (slug: string) => {
  try {
    const check = await checkSuperAdmin();
    if (!check) {
      throw new Error('Not super admin');
    }
    const project = await prisma.project.findFirst({
      where: {
        slug: slug,
        isArchive: false,
        // isMigrated: true, //todo - change this condition
        isDraft: false,
      },
      select: {
        isMigrated: true,
        isOpenSource: true,
        githubLink: true,
        logo: true,
        longDescription: true,
        createKey: true,
        discordLink: true,
        failedReason: true,
        name: true,
        projectLink: true,
        email: true,
        projectUserCount: true,
        shortDescription: true,
        slides: true,
        industry: true,
        twitterHandle: true,
        telegramLink: true,
        owner: {
          select: {
            id: true,
            username: true,
            profilePicture: true,
            mainWallet: true,
          },
        },
        team: {
          where: {
            isArchive: false,
          },
          select: {
            user: {
              select: {
                id: true,
                username: true,
                profilePicture: true,
                mainWallet: true,
              },
            },
          },
        },
      },
    });
    return project;
  } catch (error) {
    console.log(slug);
    console.log(error);
    return null;
  }
};
