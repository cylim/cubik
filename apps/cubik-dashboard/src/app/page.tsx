import { cookies } from 'next/headers';
import PageLayout from '@/components/Layouts/PageLayout';
import { ConnectWalletSection } from '@/components/wallet/ConnectWalletSection';
import { IsUserLoginServer } from '@/utils/helpers/isUserLogin';

import { Alert, Button, EmptyState, SubHead } from '@cubik/ui';

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  const user = token && (await IsUserLoginServer(token.value));
  console.log('token', token);
  console.log('user', user);

  if (!token || !user) {
    return (
      <PageLayout>
        <SubHead heading="Grants Rounds" className="!h5" />
        <ConnectWalletSection />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SubHead heading="Grants Rounds" className="!h5" />
      <Alert
        type="inline"
        fill={'blue'}
        iconName="alertInfoCircle"
        color="blue"
        title="You have Grant Manger Role."
        content="You can view all the grant details and manage the grant round."
        closeIcon
        className=""
      />
    </PageLayout>
  );
}
