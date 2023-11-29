import { env } from '@/env.mjs';
import type { AuthTokenCheckReturn } from '@/types/auth';

export const handleLogout = async () => {
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return 'success';
  } catch (error) {
    console.log(error);
    return null;
  }
};