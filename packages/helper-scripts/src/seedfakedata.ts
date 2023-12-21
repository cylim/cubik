import fs from 'fs';
import { faker } from '@faker-js/faker';
import { Keypair } from '@solana/web3.js';

import { TokenList } from '@cubik/common';
import {
  prisma,
  ProjectEventStatus,
  ProjectVerifyStatus,
  User,
} from '@cubik/database';

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
    createdAt: faker.date.past(),
  };
}

/**
 * Seeds fake users into the database.
 * Generates and saves 20,000 fake user records using the `generateFakeUser` function.
 * Each user record is created using the `prisma.user.create` method.
 * If a user creation fails, an error message is logged to the console.
 * Finally, the generated fake users are dumped as a JSON file named 'fakeUsers.json'.
 */
async function seedFakeUsers() {
  let generated = 0;
  const fakeUsers: Partial<User>[] = [];
  while (generated < 20_000) {
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
          createdAt: user.createdAt!,
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

/**
 * Seeds fake projects into the database.
 * @returns {Promise<void>} A promise that resolves when the seeding is complete.
 */
async function seedFakeProjects() {
  let generated = 0;
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      mainWallet: true,
    },
  });
  const status = Object.values(ProjectVerifyStatus);

  while (generated <= 2000) {
    const name = faker.company.name();
    const user = users[generated];
    const randomStatus = Math.floor(Math.random() * status.length);
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
          status: status[randomStatus],
          createdAt: faker.date.past(),
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
      status: true,
    },
  });
  for (const event of events) {
    for (const project of projects) {
      try {
        const date = faker.date.past();
        if (project.status === 'VERIFIED') {
          const projectJoinEvent = await prisma.projectJoinEvent.create({
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
              createdAt: date,
            },
          });
          await prisma.project.update({
            data: {
              projectJoinEvent: {
                connect: {
                  id: projectJoinEvent.id,
                },
              },
              createdAt: date,
            },
            where: {
              id: project.id,
            },
          });
          console.log(`Created fake join event: ${event.id} and ${project.id}`);
        }
      } catch (e) {
        console.log(`Failed to create join event: ${event.id}`);
      }
    }
  }
}

async function seedFakeContributions() {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      name: true,
      projectJoinEvent: true,
    },
  });
  const users = await prisma.user.findMany({
    select: {
      id: true,
      mainWallet: true,
      username: true,
    },
    take: 1000,
  });
  for (const project of projects) {
    for (const user of users) {
      const token = TokenList[Math.floor(Math.random() * TokenList.length)];
      const amt = Math.floor(Math.random() * 1000);
      for (const projectJoinEvent of project.projectJoinEvent) {
        if (
          projectJoinEvent.projectEventStatus === ProjectEventStatus.APPROVED
        ) {
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
                token: token.name,
                totalAmount: amt,
                totalUsdAmount: amt * 10,
                tx: user.mainWallet,
                split: 0,
                createdAt: faker.date.past(),
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
  }
}

export {
  seedFakeUsers,
  seedFakeProjects,
  seedFakeContributions,
  seedFakeEvents,
  seedFakeJoinEvents,
};
