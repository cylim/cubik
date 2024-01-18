'use server';

import { cookies } from 'next/headers';
import { ProjectFormData } from '@/components/create-project/createProject[ARCHIEVE]';

import { decodeToken } from '@cubik/auth';
import { prisma } from '@cubik/database';

interface SubmitProjectArgs {
  id: string;
  project: ProjectFormData;
  multiSigInfo: {
    multisigPDA: string;
    createKey: string;
  };
  createKey: string;
  counter: number;
  sig: string;
}

export const submitProject = async (
  args: SubmitProjectArgs,
): Promise<boolean> => {
  try {
    // todo - signature validation
    // todo - zod validation for args submitted

    const authToken = cookies().get('authToken');
    if (!authToken) throw new Error('No auth token found');

    const user = await decodeToken(authToken.value);

    if (!user) throw new Error('No user found');

    const checkProject = await prisma.project.findMany({
      where: {
        id: args.id,
        ownerPublickey: user.mainWallet,
      },
    });

    if (!checkProject) throw new Error('No project found');

    let industry: string[] = [];
    const { project } = args;

    if (project.category) {
      project.category.forEach((c) => {
        if (c.value) industry.push(c.value);
      });
    }
    await prisma.project.update({
      where: {
        id: args.id,
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
        multiSigPDAV4: args.multiSigInfo.multisigPDA,
        createKey: args.multiSigInfo.createKey,
        projectUserCount: args.counter,
        tx: args.sig,
        isDraft: false,
        isMigrated: true,
      },
    });
    const currentTeam = await prisma.team.findMany({
      where: {
        projectId: args.id,
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
      if (args.project.team.find((e) => e.value === c.userId)) {
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
            projectId: args.id,
            userId: m,
          },
        }),
      ),
      ...removeMembers.map((m) =>
        prisma.team.update({
          where: {
            id: currentTeam.find((c) => c.userId === m)?.id,
            userId: m,
            projectId: args.id,
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
