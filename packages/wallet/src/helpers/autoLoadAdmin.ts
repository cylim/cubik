'use server';

import { cookies } from 'next/headers';

import { decodeToken } from '@cubik/auth/src/admin';

export const autoLoadAdmin = async () => {
  const adminToken = cookies().get('authToken');

  if (!adminToken) {
    return null;
  }
  const user = await decodeToken(adminToken.value);

  return user;
};
