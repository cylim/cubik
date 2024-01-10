/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

import { PrismaClient as OldPrismaClient } from './prisma/client/old';

export * from '@prisma/client';
// export * from './prisma/client/old';

config();
declare global {
  var prisma: PrismaClient;
  var oldPrisma: OldPrismaClient;
}

let prisma: PrismaClient;
let oldPrisma: OldPrismaClient;

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
    oldPrisma = new OldPrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
      global.oldPrisma = new OldPrismaClient();
    }
    prisma = global.prisma;
    oldPrisma = global.oldPrisma;
  }
}

// const prisma = new PrismaClient();
export { prisma, oldPrisma };
