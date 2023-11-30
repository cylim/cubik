import { z } from 'zod';

import { EventType, Prisma } from '@cubik/database';

export type MetadataEvent = Prisma.EventGetPayload<{
  select: {
    logo?: true;
    name: true;
    slug: true;
    background?: true;
    matchedPool: true;
    type: true;
    description: true;
    shortDescription: true;
    tx: true;
    timeline: true;
  };
}>;

type Literal = boolean | number | string;
type Json = Literal | { [key: string]: Json } | Json[];
const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
);

export const MetadataEventValidator = z.object({
  name: z.string(),
  slug: z.string().nullish(),
  background: z.string().nullish(),
  logo: z.string().nullish(),
  matchedPool: z.number(),
  type: z.nativeEnum(EventType),
  description: z.string(),
  shortDescription: z.string(),
  tx: z.string(),
  timeline: jsonSchema,
});
