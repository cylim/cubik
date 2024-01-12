'use server';

import { cookies } from 'next/headers';

import { decodeToken } from '@cubik/auth/src/admin';
import { prisma } from '@cubik/database';
import { logApi } from '@cubik/logger/src';

export const getProjects = async (slug: string) => {
  try {
    // const authToken = cookies().get('authToken')?.value;
    // if (!authToken) {
    //   throw new Error('No auth token');
    // }
    // const user = await decodeToken(authToken);
    // if (!user) {
    //   throw new Error('No user found');
    // }
    // logApi({
    //   message: 'Fetching projects',
    //   source: process.cwd(),
    //   body: {
    //     slug: slug,
    //   },
    //   level: 'info',
    //   user: user,
    //   error: null,
    //   statusCode: 200,
    // });
    const project = await prisma.project.findFirst({
      where: {
        slug: slug,
        isMigrated: true,
        isArchive: false,
        isDraft: false,
      },
      select: {
        name: true,
        shortDescription: true,
        logo: true,
        slides: true,
        longDescription: true,
        projectLink: true,
        twitterHandle: true,
        githubLink: true,
        discordLink: true,
        telegramLink: true,
        industry: true,
        createdAt: true,
        status: true,
        email: true,
        isOpenSource: true,
        createKey: true,
        projectUserCount: true,
      },
    });
    return project;
  } catch (error) {
    const authToken = cookies().get('authToken')?.value;
    logApi({
      message: 'Failed to fetch projects',
      error,
      source: process.cwd(),
      body: {
        slug: slug,
      },
      level: 'error',
      //   user: authToken ? await decodeToken(authToken) : undefined,
    });
  }
};
