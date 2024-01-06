'use server';

import { cookies } from 'next/headers';
import { ProjectFormData } from '@/components/create-project/createProject';

import { decodeToken } from '@cubik/auth';
import { prisma } from '@cubik/database';

export const syncProject = async (project: ProjectFormData, id: string) => {
  try {
    console.log(project, '--project--');
    const authToken = cookies().get('authToken');
    if (!authToken) throw new Error('No auth token found');

    const user = await decodeToken(authToken.value);

    if (!user) throw new Error('No user found');

    const checkProject = await prisma.project.findMany({
      where: {
        id: id,
        ownerPublickey: user.mainWallet,
      },
    });

    if (!checkProject) throw new Error('No project found');

    let industry: string[] = [];
    if (project.category) {
      project.category.forEach((c) => {
        if (c.value) industry.push(c.value);
      });
    }
    await prisma.project.update({
      where: {
        id: id,
      },
      data: {
        name: project.name,
        githubLink: project.github,
        email: project.email,
        shortDescription: project.tagline,
        logo: project.logo,
        longDescription: project.description,
        slides: project.slides,
        projectLink: project.website,
        industry: industry,
        isOpenSource: project.isOpenSource,
        twitterHandle: project.twitter,
      },
    });
    const currentTeam = await prisma.team.findMany({
      where: {
        projectId: id,
        isArchive: false,
      },
      select: {
        id: true,
        userId: true,
      },
    });

    const newMembers: string[] = [];
    const removeMembers: string[] = [];

    //   add new member
    project.team.forEach((t) => {
      if (!t.value) return;
      if (currentTeam.find((e) => e.userId === t.value)) {
        console.log('found', t.value);
      } else {
        console.log('not found', t.value);
        return newMembers.push(t.value);
      }
    });

    // remove member
    currentTeam.forEach((c) => {
      // current team has this member and new team has this member
      if (project.team.find((e) => e.value === c.userId)) {
        console.log(' not removing--', c.userId);
      } else {
        // current team has this member but not in the new team
        return removeMembers.push(c.userId);
      }
    });

    // console.log(newMembers, currentTeam);
    await prisma.$transaction([
      ...newMembers.map((m) =>
        prisma.team.create({
          data: {
            projectId: id,
            userId: m,
          },
        }),
      ),
      ...removeMembers.map((m) =>
        prisma.team.update({
          where: {
            id: currentTeam.find((c) => c.userId === m)?.id,
            userId: m,
            projectId: id,
          },
          data: {
            isArchive: true,
          },
        }),
      ),
    ]);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
