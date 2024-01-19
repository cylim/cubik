'use client';

import React, { useState } from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';
import useGetProjectEvents from '@/hooks/project/useGetProjectEvents';
import { set } from '@coral-xyz/anchor/dist/cjs/utils/features';

import { calculateEventStatus } from '@cubik/common/helper/eventStatus';
import {
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
  id: string;
  setActiveSegment: React.Dispatch<React.SetStateAction<number>>;
}
const ProjectAdminGrantsTab = ({ id, setActiveSegment }: Props) => {
  const [eventFilter, setEventFilter] = useState<EVENT>(EVENT.ALL);
  const projectEvents = useGetProjectEvents({ id });
  return (
    <TabLayout>
      <SubHead heading={'Grants'}>
        <div>
          <SegmentContainer size="sm">
            <SegmentItem
              isActive={eventFilter === EVENT.ALL}
              onClick={() => {
                setActiveSegment(0);
                setEventFilter(EVENT.ALL);
              }}
            >
              All Grants
            </SegmentItem>
            <SegmentItem
              isActive={eventFilter === EVENT.ACTIVE}
              onClick={() => {
                setActiveSegment(1);
                setEventFilter(EVENT.ACTIVE);
              }}
            >
              Active Grants
            </SegmentItem>
            <SegmentItem
              isActive={eventFilter === EVENT.PREVIOUS}
              onClick={() => {
                setActiveSegment(2);
                setEventFilter(EVENT.PREVIOUS);
              }}
            >
              Previous Grants
            </SegmentItem>
          </SegmentContainer>
        </div>
      </SubHead>
      {eventFilter === EVENT.ALL &&
        (projectEvents.data && projectEvents.data.length > 0 ? (
          projectEvents.data.map((projectEvent) => (
            <GrantsRoundCard
              path=""
              projectJoinRoundStatus={projectEvent.projectEventStatus}
              isPaused={projectEvent?.event.isPaused || false}
              key={projectEvent.event.id}
              eventStatusTable={projectEvent.event.eventStatus || []}
              grantManager={false}
            >
              <GrantRoundCardHeader
                grantName={projectEvent.event.name || 'Default'}
              />
              <GrantRoundCardFooter
                matchingPool={projectEvent.event?.matchedPool || 0}
                participants={projectEvent.event._count.projectJoinEvent || 0}
                contributions={projectEvent.event?._count.contribution || 0}
              />
            </GrantsRoundCard>
          ))
        ) : (
          <EmptyState
            title={'No Grants Round Found'}
            description={
              'You havent applied for any grants round for the project. Apply for a grant to get started.'
            }
            icon={'moneyDollarBagDuoSolid'}
            border={true}
          />
        ))}
      {eventFilter === EVENT.ACTIVE &&
        (projectEvents.data && projectEvents.data.length > 0 ? (
          projectEvents.data
            .filter(
              (e) => calculateEventStatus(e.event.eventStatus) !== 'ENDED',
            )
            .map((projectEvent) => (
              <GrantsRoundCard
                path=""
                projectJoinRoundStatus={projectEvent.projectEventStatus}
                isPaused={projectEvent?.event.isPaused || false}
                key={projectEvent.event.id}
                eventStatusTable={projectEvent.event.eventStatus || []}
                grantManager={false}
              >
                <GrantRoundCardHeader
                  grantName={projectEvent.event.name || 'Default'}
                />
                <GrantRoundCardFooter
                  matchingPool={projectEvent.event?.matchedPool || 0}
                  participants={projectEvent.event._count.projectJoinEvent || 0}
                  contributions={projectEvent.event?._count.contribution || 0}
                />
              </GrantsRoundCard>
            ))
        ) : (
          <EmptyState
            title={'No Grants Round Found'}
            description={
              'You havent applied for any grants round for the project. Apply for a grant to get started.'
            }
            icon={'moneyDollarBagDuoSolid'}
            border={true}
          />
        ))}
      {eventFilter === EVENT.PREVIOUS &&
        (projectEvents.data && projectEvents.data.length > 0 ? (
          projectEvents.data
            .filter(
              (e) => calculateEventStatus(e.event.eventStatus) === 'ENDED',
            )
            .map((projectEvent) => (
              <GrantsRoundCard
                path=""
                projectJoinRoundStatus={projectEvent.projectEventStatus}
                isPaused={projectEvent?.event.isPaused || false}
                key={projectEvent.event.id}
                eventStatusTable={projectEvent.event.eventStatus || []}
                grantManager={false}
              >
                <GrantRoundCardHeader
                  grantName={projectEvent.event.name || 'Default'}
                />
                <GrantRoundCardFooter
                  matchingPool={projectEvent.event?.matchedPool || 0}
                  participants={projectEvent.event._count.projectJoinEvent || 0}
                  contributions={projectEvent.event?._count.contribution || 0}
                />
              </GrantsRoundCard>
            ))
        ) : (
          <EmptyState
            title={'No Grants Round Found'}
            description={
              'You havent applied for any grants round for the project. Apply for a grant to get started.'
            }
            icon={'moneyDollarBagDuoSolid'}
            border={true}
          />
        ))}

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
