import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    EDGE_CONFIG: z.string().min(1),
    SECRET_ADMIN: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    SECRET_ADMIN: process.env.SECRET_ADMIN,
    EDGE_CONFIG: process.env.EDGE_CONFIG,
  },
});
