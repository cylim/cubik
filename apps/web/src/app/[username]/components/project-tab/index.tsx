import React from 'react';
import { cookies } from 'next/headers';
import { IsUserLoginServer } from '@/utils/auth/isUserLoginServer';

interface Props {
  username: string;
}
export const ProjectTab = async ({ username }: Props) => {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');

  if (!token) {
    return <>Visiter view</>;
  }

  const user = await IsUserLoginServer(token.value);
  if (user?.username === username) {
    return <>Admin view</>;
  }
  return <div>Visiter view</div>;
};
