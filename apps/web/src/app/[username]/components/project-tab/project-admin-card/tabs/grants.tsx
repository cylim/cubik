'use client';

import React, { useState } from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';

import {
  Alert,
  EmptyState,
  GrantRoundCardFooter,
  GrantRoundCardHeader,
  GrantsRoundCard,
  SegmentContainer,
  SegmentItem,
  SubHead,
  Text,
} from '@cubik/ui';

enum EVENT {
  ALL = 'all',
  ACTIVE = 'active',
  PREVIOUS = 'previous',
}

const ProjectAdminGrantsTab = ({}) => {
  const [eventFilter, setEventFilter] = useState<EVENT>(EVENT.ALL);
  const Events = [];
  // {
  //   id: '1243445',
  //   name: 'Solana Foundation Grants Round',
  //   matchedPool: 100,
  //   _count: {
  //     projectJoinEvent: 22,
  //     contribution: 12,
  //   },
  // },
  // {
  //   id: '1243445',
  //   name: 'Solana Foundation Grants Round',
  //   matchedPool: 100,
  //   _count: {
  //     projectJoinEvent: 22,
  //     contribution: 12,
  //   },
  // },
  //];
  return (
    <TabLayout>
      <SubHead heading={'Grants'}>
        <div>
          <SegmentContainer size="sm">
            <SegmentItem
              isActive={eventFilter === EVENT.ALL}
              onClick={() => setEventFilter(EVENT.ALL)}
            >
              All Grants
            </SegmentItem>
            <SegmentItem
              isActive={eventFilter === EVENT.ACTIVE}
              onClick={() => setEventFilter(EVENT.ACTIVE)}
            >
              Active Grants
            </SegmentItem>
            <SegmentItem
              isActive={eventFilter === EVENT.PREVIOUS}
              onClick={() => setEventFilter(EVENT.PREVIOUS)}
            >
              Previous Grants
            </SegmentItem>
          </SegmentContainer>
        </div>
      </SubHead>
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
          icon={'moneyDollarBagDuoSolid'}
          border={true}
        />
      )}
      <Text className="l2-light" color="tertiary">
        Grants rounds are a collaborative funding effort, designed to support
        projects like yours through community contributions amplified by
        quadratic funding. Dive deeper to leverage this opportunity for your
        initiative. Learn How Grants Round Work.
      </Text>
    </TabLayout>
  );
};

export default ProjectAdminGrantsTab;
