'use client';

import React, { useState } from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';
import useGetProjectEvents from '@/hooks/project/useGetProjectEvents';

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
interface Props {
  projectId: string;
}
const ProjectAdminGrantsTab = ({ projectId }: Props) => {
  const [eventFilter, setEventFilter] = useState<EVENT>(EVENT.ALL);
  // const events = useGetProjectEvents({ id: projectId });
  // console.log(events.data);
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

      {eventFilter === EVENT.ALL && (
        <EmptyState
          title={'No Grants Round Found'}
          description={
            'You havent applied for any grants round for the project. Apply for a grant to get started.'
          }
          icon={'moneyDollarBagDuoSolid'}
          border={true}
        />
      )}
      {eventFilter === EVENT.ACTIVE && (
        <EmptyState
          title={'No Grants Round Found'}
          description={
            'You havent applied for any grants round for the project. Apply for a grant to get started.'
          }
          icon={'moneyDollarBagDuoSolid'}
          border={true}
        />
      )}
      {eventFilter === EVENT.PREVIOUS && (
        <EmptyState
          title={'No Grants Round Found'}
          description={
            'You havent applied for any grants round for the project. Apply for a grant to get started.'
          }
          icon={'moneyDollarBagDuoSolid'}
          border={true}
        />
      )}
      {/* 
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
       */}
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
