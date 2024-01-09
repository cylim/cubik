import { cookies } from 'next/headers';
import { GrantsSegmentControlSwitch } from '@/app/homeSegment';
import PageLayout from '@/components/Layouts/PageLayout';
import { ConnectWalletSection } from '@/components/wallet/ConnectWalletSection';
import { IsUserLoginServer } from '@/utils/helpers/isUserLogin';

import {
  Background,
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

    return await prisma.$transaction(
      user.accessScope.map((scope) =>
        prisma.event.findFirst({
          where: {
            id: scope.event_id,
            isArchive: false,
          },
          select: {
            id: true,
            name: true,
            matchedPool: true,
            isPaused: true,
            eventStatus: true,
            _count: {
              select: {
                contribution: true,
                projectJoinEvent: true,
              },
            },
          },
        }),
      ),
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  if (!token) {
    return (
      <PageLayout>
        <SubHead heading="Grants Rounds" className="!h5" />
        <ConnectWalletSection />
      </PageLayout>
    );
  }
  const user = await IsUserLoginServer(token.value);
  if (!user) {
    return (
      <PageLayout>
        <SubHead heading="Grants Rounds" className="!h5" />
        <ConnectWalletSection />
      </PageLayout>
    );
  }

  const userGrants = await getUserGrants();

  console.log(userGrants, 'user');
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
              isPaused={event?.isPaused || false}
              key={event?.id}
              eventStatusTable={event?.eventStatus || []}
              grantManager={true}
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
