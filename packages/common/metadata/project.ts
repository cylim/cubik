import { z } from 'zod';

import { Prisma } from '@cubik/database';

export type MetadataProject = Prisma.ProjectGetPayload<{
  select: {
    name: true;
    slides: true;
    slug: true;
    email: true;
    createKey: true;
    discordLink: true;
    githubLink: true;
    industry: true;
    logo: true;
    longDescription: true;
    multiSigAddress_v3: true;
    multiSigAddress_v4: true;
    projectLink: true;
    projectUserCount: true;
    shortDescription: true;
    twitterHandle: true;
    telegramLink: true;
  };
}> & {
  team: string[];
};

type Literal = boolean | number | string;
type Json = Literal | { [key: string]: Json } | Json[];
const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
);

export const MetadataProjectValidation = z.object({
  name: z.string(),
  slug: z.string().nullish(),
  slides: jsonSchema,
  shortDescription: z.string(),
  logo: z.string(),
  longDescription: z.string(),
  industry: z.string(),
  projectLink: z.string(),
  twitterHandle: z.string(),
  githubLink: z.string(),
  discordLink: z.string(),
  telegramLink: z.string(),
  projectUserCount: z.number().int(),
  failedReason: z.string().nullish(),
  multiSigAddress_v3: z.string().nullish(),
  multiSigAddress_v4: z.string().nullish(),
  createKey: z.string().nullish(),
  team: z.array(z.string()),
});
