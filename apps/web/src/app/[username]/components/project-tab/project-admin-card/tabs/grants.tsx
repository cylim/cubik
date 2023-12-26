import React from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';

import {
  EmptyState,
  GrantRoundCardFooter,
  GrantRoundCardHeader,
  GrantsRoundCard,
  SubHead,
} from '@cubik/ui';

const ProjectAdminGrantsTab = () => {
  const Events = [
    {
      id: '1243445',
      name: 'Solana Foundation Grants Round',
      matchedPool: 100,
      _count: {
        projectJoinEvent: 22,
        contribution: 12,
      },
    },
    {
      id: '1243445',
      name: 'Solana Foundation Grants Round',
      matchedPool: 100,
      _count: {
        projectJoinEvent: 22,
        contribution: 12,
      },
    },
  ];
  return (
    <TabLayout>
      <SubHead heading={'Grants'} />
      {Events.length > 0 ? (
        Events.map((event, key) => {
          return (
            <GrantsRoundCard
              path="/grants"
              key={key}
              roundStartDate={new Date('2021-10-20T00:00:00.000Z')}
              roundEndDate={new Date('2021-10-20T00:00:00.000Z')}
            >
              <GrantRoundCardHeader grantName={event.name} />
              <GrantRoundCardFooter
                matchingPool={event?.matchedPool || 0}
                participants={event?._count.projectJoinEvent || 0}
                contributions={event?._count.contribution || 0}
              />
            </GrantsRoundCard>
          );
        })
      ) : (
        <EmptyState
          title={'No Grants Round Found'}
          description={
            'You havent applied for any grants round for the project. Apply for a grant to get started.'
          }
          icon={'cloudError'}
        />
      )}
    </TabLayout>
  );
};

export default ProjectAdminGrantsTab;
