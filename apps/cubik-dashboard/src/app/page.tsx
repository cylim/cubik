import { cookies } from 'next/headers';
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
    return <ConnectWalletSection />;
  }
  return (
    // <div className="max-w-7xl mx-auto pt-12 flex flex-col gap-[32px]">
    //   <SubHead heading="Grants Rounds" className="!h5">
    //     <Button>New Grants Round</Button>
    //   </SubHead>
    //   <div className="rounded-lg bg-[var(--empty-state-surface-primary)] border border-[#e5e7eb]">
    //     <EmptyState
    //       title={'Access to this page is not Allowed'}
    //       description={
    //         'Only grants manager can access this page. If you are grant manager reachout to the team.'
    //       }
    //       icon={'key'}
    //     >
    //       <Button className="w-full md:w-fit" variant="outline">
    //         Contact Team
    //       </Button>
    //     </EmptyState>
    //   </div>
    // </div>
    <div className="mx-auto flex max-w-7xl flex-col gap-[32px] pt-12">
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
    </div>
  );
}
