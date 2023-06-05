import { getSession, signOut } from 'next-auth/react';
import { z } from 'zod';
import { procedure } from '~/server/trpc';

export const getMe = procedure
  .input(
    z.object({
      connected: z.boolean().optional(),
      wallet: z.string().optional(),
    })
  )
  .query(async ({ input, ctx }) => {
    const { session } = ctx;

    if (!session) return { connected: input.connected };

    const userSession = await getSession();

    if (!input.connected || !input.wallet) {
      await signOut({
        redirect: false,
      });
      return {
        connected: input.connected,
      };
    }

    if (userSession?.user.mainWallet !== input.wallet) {
      await signOut({
        redirect: false,
      });
      return {
        connected: input.connected,
      };
    }

    return {
      connected: input.connected,
    };
  });
