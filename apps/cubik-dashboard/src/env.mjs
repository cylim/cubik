import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    EDGE_CONFIG: z.string().min(1),
    SECRET: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    SECRET: process.env.SECRET,
    EDGE_CONFIG: process.env.EDGE_CONFIG,
  },
});
