import { cookies } from 'next/headers';
import PageLayout from '@/components/Layouts/PageLayout';
import { ConnectWalletSection } from '@/components/wallet/ConnectWalletSection';
import { getEventsInfo } from '@/utils/helpers/getEventsInfo';
import { IsUserLoginServer } from '@/utils/helpers/isUserLogin';

import {
  Alert,
  Button,
  EmptyState,
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

      {/* {user.accessScope.map(async (event) => {
        // const { matchedPool, participants, contributions, contributors } =
        //   await getEventsInfo(event.event_id);
        return (
          <div key={event.event_id}>
            <GrantsRoundCard>
              <GrantRoundCardHeader grantName={event.event_name} />
              <GrantRoundCardFooter
              // matchingPool={matchedPool}
              // participants={participants}
              // contributions={contributions}
              // contributors={contributors}
              />
            </GrantsRoundCard>
          </div>
        );
      })} */}
      <GrantsRoundCard grantManager={false}>
        <GrantRoundCardHeader grantName="Alpha Grants Round" />
        <GrantRoundCardFooter
          matchingPool={'50K'}
          participants={'300'}
          contributions={'10'}
          // contributors={contributors}
        />
      </GrantsRoundCard>
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
