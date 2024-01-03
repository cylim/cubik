'use server';

import { cookies } from 'next/headers';
import { utils, web3 } from '@coral-xyz/anchor';
import { ProjectFormData } from '@types/project';

import { decodeToken, verifyProjectEditMessage } from '@cubik/auth';

export const EditProjectDetails = async (
  pubKey: string,
  sig: string,
  nonce: string,
  data: ProjectFormData,
) => {
  const adminToken = cookies().get('authToken');

  if (!adminToken) {
    return null;
  }
  const user = await decodeToken(adminToken.value);
  const isUserOwner = await prisma.project.findFirst({
    where: {
      ownerPublickey: user?.mainWallet,
    },
  });
  if (isUserOwner) {
    const hash = nonce + process.env.SECRET?.slice(0, 10);
    const check = utils.sha256.hash(hash);

    const result = verifyProjectEditMessage(
      sig,
      new web3.PublicKey(pubKey),
      check,
    );
    if (!result) {
      throw new Error('Signature is not valid');
    }
    await prisma.project.update({
      where: {
        id: data.id,
        ownerPublickey: user?.mainWallet,
      },
      data: {
        name: data.name,
        discordLink: data.discordLink,
        email: data.email,
        githubLink: data.githubLink,
        longDescription: data.longDescription,
        twitterHandle: data.twitterHandle,
        industry: data.industry,
        shortDescription: data.shortDescription,
        logo: data.logo,
        projectLink: data.projectLink,
        telegramLink: data.telegramLink,
      },
    });
    return true;
  }
};
