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

const getUserGrants = async () => {
  try {
    const token = cookies().get('authToken');
    const user = token && (await IsUserLoginServer(token.value));
    if (!token || !user) {
      return [];
    }

    return await Promise.all(
      user.accessScope.map(async (scope) => {
        return await prisma.event.findFirst({
          where: {
            id: scope.event_id,
          },
          select: {
            id: true,
            name: true,
            matchedPool: true,
            _count: {
              select: {
                contribution: true,
                projectJoinEvent: true,
              },
            },
          },
        });
      }),
    );
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  const user = token && (await IsUserLoginServer(token.value));
  const userGrants = await getUserGrants();

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
        {userGrants && userGrants?.length > 0 ? (
          userGrants.map((event) => (
            <GrantsRoundCard
              path="/grants"
              key={event?.id}
              grantManager={true}
              roundStartDate={new Date('2021-10-20T00:00:00.000Z')}
              roundEndDate={new Date('2021-10-20T00:00:00.000Z')}
            >
              <GrantRoundCardHeader grantName={event?.name || 'Default'} />
              <GrantRoundCardFooter
                matchingPool={event?.matchedPool || 0}
                participants={event?._count.projectJoinEvent || 0}
                contributions={event?._count.contribution || 0}
              />
            </GrantsRoundCard>
          ))
        ) : (
          <></>
        )}
      </div>
    </PageLayout>
  );
}
