import { cookies } from 'next/headers';
import { GrantsSegmentControlSwitch } from '@/app/homeSegment';
import PageLayout from '@/components/Layouts/PageLayout';
import { ConnectWalletSection } from '@/components/wallet/ConnectWalletSection';
import { getEventsInfo } from '@/utils/helpers/getEventsInfo';
import { IsUserLoginServer } from '@/utils/helpers/isUserLogin';

import {
  Alert,
  Background,
  Button,
  GrantRoundCardFooter,
  GrantRoundCardHeader,
  GrantsRoundCard,
  SubHead,
} from '@cubik/ui';

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  const user = token && (await IsUserLoginServer(token.value));
  console.log('token', token);
  console.log('user', user);
  //if user -> access scope>0 render the list of events
  //user -> access scope =0 no access state
  // user is null, but pk is defined -> no linked wallet

  if (!token || !user) {
    return (
      <PageLayout>
        <SubHead heading="Grants Rounds" className="!h5" />
        <ConnectWalletSection />
      </PageLayout>
    );
  }
  {
    console.log('list of events', user.accessScope);
  }
  //fetch rest of data through event id
  return (
    <PageLayout>
      <div className="absolute left-[-100px] top-0 w-full">
        <Background />
      </div>
      <SubHead heading="Events" className="!h5">
        <GrantsSegmentControlSwitch />
      </SubHead>
      {/* <Alert
        type="inline"
        fill={'blue'}
        iconName="alertInfoCircle"
        color="blue"
        title="You have Grant Manger Role."
        content="You can view all the grant details and manage the grant round."
        closeIcon
      /> */}
      <div className="flex flex-col gap-4">
        <GrantsRoundCard
          grantManager={true}
          roundStartDate={new Date('2021-10-20T00:00:00.000Z')}
          roundEndDate={new Date('2021-10-20T00:00:00.000Z')}
        >
          <GrantRoundCardHeader grantName="Alpha Grants Round" isLive />
          <GrantRoundCardFooter
            matchingPool={'50K'}
            participants={'300'}
            contributions={'10'}
            //contributors={'100'}
          />
        </GrantsRoundCard>
        <GrantsRoundCard
          grantManager={true}
          roundStartDate={new Date('2024-01-20T00:00:00.000Z')}
          roundEndDate={new Date('2024-01-20T00:00:00.000Z')}
        >
          <GrantRoundCardHeader grantName="Alpha Grants Round" isLive />
          <GrantRoundCardFooter
            matchingPool={'50K'}
            participants={'300'}
            contributions={'10'}
            //contributors={'100'}
          />
        </GrantsRoundCard>
      </div>
    </PageLayout>
  );
}

{
  /* <div key={event.event_id}>
<GrantsRoundCard>
  <GrantRoundCardHeader grantName={event.event_name} />
  <GrantRoundCardFooter matchingPool="$50K" />
</GrantsRoundCard>
</div> */
}
