'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { decodeToken } from '@cubik/auth';
import { prisma } from '@cubik/database';

export const deleteDraftProject = async (
  projectId: string,
): Promise<boolean> => {
  try {
    const authToken = cookies().get('authToken');
    if (!authToken) throw new Error('No auth token found');
    const user = await decodeToken(authToken.value);
    if (!user) throw new Error('No user found');
    await prisma.project.update({
      where: {
        id: projectId,
        isDraft: true,
        ownerPublickey: user.mainWallet,
      },
      data: {
        isArchive: true,
      },
    });
    revalidatePath(`/` + user.username);
    return true;
  } catch (error) {
    return false;
  }
};
