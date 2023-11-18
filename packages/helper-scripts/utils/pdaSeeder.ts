import * as anchor from '@coral-xyz/anchor';

import { prisma } from '@cubik/database';

import { PdaReturnType } from '../types';

const PROGRAM_ID = new anchor.web3.PublicKey(process.env.MAINNET_PROGRAM_ID!);

export const getUserPda = (
  userAddress: anchor.web3.PublicKey,
): PdaReturnType => {
  const [pda, bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('user'), userAddress.toBuffer()],
    PROGRAM_ID,
  );

  return [pda, bump];
};

export const getRoundPDA = (id: string): PdaReturnType => {
  const [round_account, bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('round'), Buffer.from(id)],
    PROGRAM_ID,
  );

  return [round_account, bump];
};

export const getProjectPDA = (
  owner: anchor.web3.PublicKey,
  counter: number,
): PdaReturnType => {
  const [project_account, bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('project'),
      owner.toBuffer(),
      Buffer.from(JSON.stringify(counter)),
    ],
    PROGRAM_ID,
  );

  return [project_account, bump];
};

export const getProjectJoinRoundPDA = (
  round_account: anchor.web3.PublicKey,
  project_account: anchor.web3.PublicKey,
): PdaReturnType => {
  const [project_join_account, bump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [
        anchor.utils.bytes.utf8.encode('roundjoin'),
        round_account.toBuffer(),
        project_account.toBuffer(),
      ],
      PROGRAM_ID,
    );

  return [project_join_account, bump];
};

export const getContributionV2PDA = (
  wallet: anchor.web3.PublicKey,
  createKey: anchor.web3.PublicKey,
): PdaReturnType => {
  const [contribution_account, bump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [
        anchor.utils.bytes.utf8.encode('contribution'),
        wallet.toBuffer(),
        createKey.toBuffer(),
      ],
      PROGRAM_ID,
    );

  return [contribution_account, bump];
};

export const seedPDAInUser = async () => {
  const users = await prisma.user.findMany();
  let count;

  for (const user of users) {
    const [pda] = getUserPda(new anchor.web3.PublicKey(user.mainWallet));

    count = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        pda: pda.toString(),
      },
    });
    console.log(count.id, 'updated');
  }
};

export const seedPDAInRound = async () => {
  const rounds = await prisma.round.findMany();
  let count;

  for (const round of rounds) {
    const [pda] = getRoundPDA(round.id);

    count = await prisma.round.update({
      where: {
        id: round.id,
      },
      data: {
        pda: pda.toString(),
      },
    });
    console.log(count.id, 'updated');
  }
};

export const seedPDAInProject = async () => {
  const projects = await prisma.project.findMany();
  let count = 0;
  let res;

  for (const project of projects) {
    const [pda] = getProjectPDA(
      new anchor.web3.PublicKey(project.ownerPublickey),
      project.projectUserCount,
    );

    res = await prisma.project.update({
      where: {
        id: project.id,
      },
      data: {
        pda: pda.toString(),
      },
    });
    count++;
    console.log(res.id, 'updated', count);
  }
};

export const seedPDAInProjectJoinRound = async () => {
  const projectJoinRound = await prisma.projectJoinRound.findMany();
  let count = 0;
  let res;

  console.log(projectJoinRound.length);

  for (const join of projectJoinRound) {
    const { projectId, roundId } = join;

    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });

    const round = await prisma.round.findUnique({
      where: {
        id: roundId,
      },
    });

    // skip if null pda
    if (!project?.pda || !round?.pda) {
      continue;
    }
    const [pda] = getProjectJoinRoundPDA(
      new anchor.web3.PublicKey(project?.pda as string),
      new anchor.web3.PublicKey(round?.pda as string),
    );

    res = await prisma.projectJoinRound.update({
      where: {
        id: join.id,
      },
      data: {
        pda: pda.toString(),
      },
    });
    count++;
    console.log(res.id, 'updated', count);
  }
};

export const seedPDAInContributionV2 = async () => {
  const contributions = await prisma.contribution.findMany();
  let count = 0;
  let res;

  console.log(contributions.length);

  for (const contribution of contributions) {
    const { userId } = contribution;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        mainWallet: true,
      },
    });

    const [pda] = getContributionV2PDA(
      new anchor.web3.PublicKey(user?.mainWallet as string),
      anchor.web3.Keypair.generate().publicKey,
    );

    res = await prisma.contribution.update({
      where: {
        id: contribution.id,
      },
      data: {
        pda: pda.toString(),
      },
    });
    count++;
    console.log(res.id, 'updated', count);
  }
};
