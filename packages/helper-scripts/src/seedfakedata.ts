import fs from 'fs';
import { faker } from '@faker-js/faker';
import { Keypair } from '@solana/web3.js';

import {
  Background_Backup,
  generateUserBackupImage,
  Project_Backup,
  TokenList,
} from '@cubik/common';
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
    profilePicture: generateUserBackupImage(),
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
      const project = await prisma.project.create({
        data: {
          name: name,
          logo: Project_Backup,
          slug:
            name.toLowerCase().split(' ').join('-') +
            faker.number.int().toString(),
          shortDescription: faker.company.catchPhraseDescriptor(),
          longDescription: faker.company.catchPhrase(),
          email: faker.internet.email(),
          isArchive: false,
          industry: faker.company.buzzPhrase(),
          status: status[randomStatus],
          createdAt: faker.date.past(),
          ownerPublickey: user.mainWallet,
          githubLink: faker.internet.url(),
          twitterHandle: faker.internet.url(),
          telegramLink: faker.internet.url(),
          discordLink: faker.internet.url(),
          projectLink: faker.internet.url(),
          slides: {
            slide: [
              Background_Backup,
              Background_Backup,
              Background_Backup,
              Background_Backup,
            ],
          },
        },
      });
      console.log(`Generated project: ${name}`);
      for (let i = 0; i < 3; i++) {
        const randomuser = users[Math.floor(Math.random() * users.length)];
        await prisma.team.create({
          data: {
            userId: randomuser.id,
            projectId: project.id,
          },
        });
        console.log(`Generated team member: ${randomuser.username}`);
      }
      generated++;
    } catch (e) {
      console.log(`Failed to create project: ${name}`, e);
    }
  }
}

async function seedFakeComments() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      mainWallet: true,
    },
    where: {
      isActive: true,
    },
  });

  const projects = await prisma.project.findMany({
    select: {
      id: true,
    },
    where: {
      status: ProjectVerifyStatus.VERIFIED,
    },
  });

  for (const project of projects) {
    for (const user of users) {
      const comment = await prisma.comments.create({
        data: {
          projectId: project.id,
          userId: user.id,
          comment: faker.lorem.paragraph(),
          createdAt: faker.date.past(),
          reactions: {},
        },
      });
      console.log(`Generated comment: ${comment.id}`);
    }
  }
}

async function seedFakeEvents() {
  const names = ['OPOS', 'DREAMHACK', 'GRYZZLYHACK', 'SOMEHACK', 'CUBIKTHON'];
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
        shortDescription: description,
        type: 'ROUND',
        description:
          faker.company.catchPhrase() + faker.company.catchPhraseAdjective(),
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
  const status = Object.values(ProjectEventStatus);
  for (const event of events) {
    for (const project of projects) {
      const randomStatus = Math.floor(Math.random() * status.length);
      try {
        const date = faker.date.past();
        if (project.status === 'VERIFIED') {
          await prisma.projectJoinEvent.create({
            data: {
              eventId: event.id,
              tx: faker.finance.ethereumAddress(),
              type: 'ROUND',
              projectId: project.id,
              createdAt: date,
              projectEventStatus: status[randomStatus],
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
    where: {
      status: ProjectVerifyStatus.VERIFIED,
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
          projectJoinEvent.projectEventStatus !== ProjectEventStatus.APPROVED
        ) {
          return;
        }
        try {
          await prisma.contribution.create({
            data: {
              projectId: project.id,
              projectJoinEventId: projectJoinEvent.id,
              token: token.address,
              totalAmount: amt,
              totalUsdAmount: amt * 10,
              tx: faker.string.alphanumeric(24),
              split: 0,
              userId: user.id,
              createdAt: faker.date.past(),
              eventId: projectJoinEvent.eventId,
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

export {
  seedFakeUsers,
  seedFakeProjects,
  seedFakeComments,
  seedFakeContributions,
  seedFakeEvents,
  seedFakeJoinEvents,
};
