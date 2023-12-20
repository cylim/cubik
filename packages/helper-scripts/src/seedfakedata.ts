import fs from 'fs';
import { faker } from '@faker-js/faker';
import { Keypair } from '@solana/web3.js';

import { prisma, User } from '@cubik/database';

function generateFakeUser(): Partial<User> {
  const email = faker.internet.email();
  const acc = new Keypair();
  console.log(`Generated account: ${email}`);
  return {
    email: email,
    username: faker.internet.userName(),
    profilePicture: faker.image.avatar(),
    mainWallet: acc.publicKey.toString(),
    profileNft: {},
    tx: faker.finance.ethereumAddress(),
    isActive: true,
    isArchive: false,
  };
}

async function seedFakeUsers() {
  let generated = 0;
  const fakeUsers: Partial<User>[] = [];
  while (generated < 3000) {
    const user = generateFakeUser();
    try {
      await prisma.user.create({
        data: {
          email: user.email,
          username: user.username!,
          profilePicture: user.profilePicture!,
          mainWallet: user.mainWallet!,
          profileNft: {},
          tx: user.tx!,
          isActive: true,
          isArchive: false,
        },
      });
      fakeUsers.push(user);
      generated++;
    } catch (e) {
      console.log(`Failed to create user: ${user.email}`);
    }
  }
  // json dump the fake users as a json file
  // so we can use them in the future
  const json = JSON.stringify(fakeUsers);
  fs.writeFileSync('fakeUsers.json', json);
}

async function seedFakeProjects() {
  let generated = 0;
  const fakeUser = JSON.parse(
    fs.readFileSync('fakeUsers.json').toString(),
  ) as Partial<User>[];
  while (generated <= 200) {
    const name = faker.company.name();
    const user = fakeUser[generated];
    try {
      await prisma.project.create({
        data: {
          name: name,
          logo: faker.image.avatarGitHub(),
          shortDescription: faker.company.catchPhraseDescriptor(),
          longDescription: faker.company.catchPhrase(),
          email: faker.internet.email(),
          isArchive: false,
          industry: faker.company.buzzPhrase(),
          owner: {
            connect: {
              id: user.id,
              username: user.username,
              mainWallet: user.mainWallet,
            },
          },
        },
      });
      console.log(`Generated project: ${name}`);
      generated++;
    } catch (e) {
      console.log(`Failed to create project: ${name}`, e);
    }
  }
}

async function seedFakeContributions() {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  const users = await prisma.user.findMany({
    select: {
      id: true,
      mainWallet: true,
      username: true,
    },
    take: 10,
  });
  for (const project of projects) {
    for (const user of users) {
      const usdc = faker.number.int();
      try {
        await prisma.contribution.create({
          data: {
            project: {
              connect: {
                id: project.id,
              },
            },
            user: {
              connect: {
                id: user.id,
              },
            },
            token: 'USDC',
            totalAmount: usdc,
            totalUsdAmount: usdc,
            tx: user.mainWallet,
            split: 0,
          },
        });
        console.log(
          `Created fake contribution on ${project.name} by ${user.username}`,
        );
      } catch (e) {
        console.log(`Failed to create contribution: ${project.id}`);
      }
    }
  }
}

async function seedFakeEvents() {
  const names = ['OPOS', 'DREAMHACK', 'GRYZZLYHACK'];
  const users = await prisma.user.findMany({
    select: {
      id: true,
      mainWallet: true,
      username: true,
    },
    take: 3,
  });
  for (let i = 0; i < 3; i++) {
    const name = names[i];
    const description = faker.company.buzzPhrase();

    const event = await prisma.event.create({
      data: {
        name: name,
        description: description,
        type: 'ROUND',
        userId: users[i].id,
        slug: name.toLowerCase(),
        tx: users[i].mainWallet,
      },
    });
    console.log(`Created fake event: ${event.name}`);
  }
}

async function seedFakeJoinEvents() {
  // get all events and make all projects join the events randomly
  const events = await prisma.event.findMany({
    select: {
      id: true,
    },
  });
  const projects = await prisma.project.findMany({
    select: {
      id: true,
    },
  });
  for (const event of events) {
    for (const project of projects) {
      try {
        await prisma.projectJoinEvent.create({
          data: {
            event: {
              connect: {
                id: event.id,
              },
            },
            tx: faker.finance.ethereumAddress(),
            type: 'ROUND',
            project: {
              connect: {
                id: project.id,
              },
            },
          },
        });
        console.log(`Created fake join event: ${event.id} and ${project.id}`);
      } catch (e) {
        console.log(`Failed to create join event: ${event.id}`);
      }
    }
  }
}

export {
  seedFakeUsers,
  seedFakeProjects,
  seedFakeContributions,
  seedFakeEvents,
  seedFakeJoinEvents,
};
