import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { decodeToken } from '@cubik/auth';
import { Project_Backup } from '@cubik/common';
import { prisma } from '@cubik/database';
import { handleApiClientError, successHandler } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = req.nextUrl;
    const project = searchParams.get('project');
    const isDraft = searchParams.get('draft');
    const createMode = searchParams.get('create');
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
          where: {
            isArchive: false,
          },
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
      const checkProject = await prisma.project.findFirst({
        where: {
          id: project,
        },
      });
      if (!checkProject && !createMode) {
        throw new Error('Project not found');
      }

      if (!checkProject && createMode) {
        const p = await prisma.project.create({
          data: {
            id: project,
            ownerPublickey: user.mainWallet,
            isDraft: true,
            logo: Project_Backup,
            longDescription: 'Placeholder',
            name: 'Untitled Project',
            shortDescription: 'Placeholder',
          },
        });
        return NextResponse.json(successHandler(p, 'Project base created'));
      }
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
