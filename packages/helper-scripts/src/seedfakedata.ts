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

export { seedFakeUsers, seedFakeProjects };
