import React from 'react';
import { cookies } from 'next/headers';
import PageLayout from '@/components/Layouts/PageLayout';
import { ConnectWalletSection } from '@/components/wallet/ConnectWalletSection';
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
    return (
      <PageLayout>
        <ConnectWalletSection />
      </PageLayout>
    );
  }
  const user = await IsUserLoginServer(token.value);
  if (!user) {
    return (
      <PageLayout>
        <ConnectWalletSection />
      </PageLayout>
    );
  }
  if (user && user?.accessScope.length === 0) {
    return <PageLayout>Page invalid for this user</PageLayout>;
  }

  return (
    <>
      <EventHeader />
      <TabsSection searchParams={searchParams} />
    </>
  );
};
export default EventInfoPage;
