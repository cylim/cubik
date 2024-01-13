import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { get } from '@vercel/edge-config';

import { decodeToken } from '@cubik/auth/src/admin';

export const checkSuperAdmin = async () => {
  const authToken = cookies().get('authToken');
  // no auth user
  if (!authToken) {
    notFound();
  }
  const user = await decodeToken(authToken.value);
  if (!user) {
    notFound();
  }
  const superAdmin = (await get('superAdmin')) as unknown as string[];

  if (!superAdmin.includes(user.mainWallet)) {
    notFound();
  }

  return true;
};
