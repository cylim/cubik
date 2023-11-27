import { z } from 'zod';

import { Prisma } from '@cubik/database';

export type MetadataProject = Prisma.SponsorGetPayload<{
  select: {
    name: true;
    logo: true;
    paidToken: true;
    totalCommitted: true;
    vault: true;
  };
}>;

type Literal = boolean | number | string;
type Json = Literal | { [key: string]: Json } | Json[];
const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
);

export const _SponsorModel = z.object({
  name: z.string(),
  logo: z.string(),
  vault: z.string(),
  paidToken: jsonSchema,
  totalCommitted: z.number(),
});
