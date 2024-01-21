import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    EDGE_CONFIG: z.string().min(1),
    SECRET: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_BACKEND: z.string().min(1),
  },
  runtimeEnv: {
    SECRET: process.env.SECRET,
    EDGE_CONFIG: process.env.EDGE_CONFIG,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_BACKEND: process.env.NEXT_PUBLIC_BACKEND,
  },
});
