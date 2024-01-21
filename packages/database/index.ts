/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

export * from '@prisma/client';

config();

let prisma: PrismaClient;

if (typeof window === 'undefined') {
  prisma = new PrismaClient();
}

export { prisma };
