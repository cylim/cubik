import React from 'react';
import { cookies } from 'next/headers';
import { Background } from '@/app/grants/components/Background';
import { IsUserLoginServer } from '@/utils/helpers/isUserLogin';

import { EventHeader } from './components/EventHeader';
import { TabsSection } from './components/Tabs';

interface Props {
  searchParams: { [key in string]: string };
}
const EventInfoPage = async ({ searchParams }: Props) => {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');

  if (!token) {
    return <>No Token Found</>;
  }
  const user = await IsUserLoginServer(token.value);
  if (!user) {
    return <>Login</>;
  }

  return (
    <>
      <EventHeader />
      <Background />
      <TabsSection searchParams={searchParams} />
    </>
  );
};
export default EventInfoPage;
