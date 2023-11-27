/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

export * from '@prisma/client';

config();
declare global {
  var prisma: PrismaClient;
  var metaPrisma: PrismaClient;
}

let prisma: PrismaClient;
let metaPrisma: PrismaClient;

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
    metaPrisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.METADATA_DATABASE_URL,
        },
      },
    });
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();

      global.metaPrisma = new PrismaClient({
        datasources: {
          db: {
            url: process.env.METADATA_DATABASE_URL,
          },
        },
      });
    }
    prisma = global.prisma;
  }
}

// const prisma = new PrismaClient();
export { prisma, metaPrisma };
