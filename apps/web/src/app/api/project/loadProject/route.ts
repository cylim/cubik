import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { decodeToken } from '@cubik/auth';
import { prisma } from '@cubik/database';
import { handleApiClientError, successHandler } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const project = searchParams.get('project');
    const isDraft = searchParams.get('draft');
    logApi({
      req: req as any,
      message: 'Project loaded',
      source: 'apps/web/src/app/api/project/loadProject/route.ts',
      level: 'info',
    });
    if (!project) {
      throw new Error('No project specified');
    }

    const authToken = cookies().get('authToken');

    if (!authToken) {
      throw new Error('Unauthorized request');
    }
    const user = await decodeToken(authToken.value);
    if (!user) {
      throw new Error('Unauthorized request');
    }

    const projectData = await prisma.project.findFirst({
      where: {
        id: project,
        ownerPublickey: user.mainWallet,
        isDraft: isDraft ? true : false,
      },
      select: {
        id: true,
        name: true,
        discordLink: true,
        githubLink: true,
        email: true,
        shortDescription: true,
        logo: true,
        longDescription: true,
        slides: true,
        projectLink: true,
        industry: true,
        isOpenSource: true,
        status: true,
        telegramLink: true,
        twitterHandle: true,
        team: {
          select: {
            id: true,
            user: {
              select: {
                id: true,
                username: true,
                profilePicture: true,
              },
            },
          },
        },
      },
    });

    if (!projectData) {
      throw new Error('Project not found');
    }

    return NextResponse.json(successHandler(projectData, 'Project loaded'));
  } catch (e) {
    const error = e as Error;
    logApi({
      req: req as any,
      error,
      message: 'Failed to load project',
      source: 'apps/web/src/app/api/project/loadProject/route.ts',
      level: 'error',
    });
    return handleApiClientError('Failed to load draft project');
  }
};
