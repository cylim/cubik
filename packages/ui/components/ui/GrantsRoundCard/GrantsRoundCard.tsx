import React, { useContext } from 'react';
import Link from 'next/link';

import { EventStatus } from '@cubik/common-types';
import { nFormatter } from '@cubik/common/formatters';
import { calculateEventStatus } from '@cubik/common/helper/eventStatus';
import {
  EventStatus as EventStatusTable,
  ProjectEventStatus,
} from '@cubik/database';
import dayjs from '@cubik/dayjs';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Alert } from '../Alert';
import { Button } from '../Button/button';
import { Tag, TagLabel } from '../Tag/tag';
import { Text } from '../text/text';
import { PingIcon } from './../PingIcon';

interface GrantsRoundCardProps {
  children: React.ReactNode;
  path: string;
  isPaused: boolean;
  eventStatusTable: EventStatusTable[];
  projectJoinRoundStatus?: ProjectEventStatus;
  grantManager: boolean;
}

type RoundCardContextType = {
  currentEventStatus: EventStatus;
  eventStatusTable: EventStatusTable[];
  grantManager: boolean;
  isPaused: boolean;
};

const RoundCardContext = React.createContext<RoundCardContextType>({
  currentEventStatus: 'BEFORE_REGISTRATION',
  eventStatusTable: [],
  grantManager: false,
  isPaused: false,
});

const GrantsRoundCard = ({
  children,
  path,
  eventStatusTable,
  grantManager,
  isPaused,
  projectJoinRoundStatus,
}: GrantsRoundCardProps) => {
  const currentStatus = calculateEventStatus(eventStatusTable);
  return (
    <RoundCardContext.Provider
      value={{
        currentEventStatus: currentStatus,
        eventStatusTable: eventStatusTable,
        grantManager: grantManager,
        isPaused: isPaused,
      }}
    >
      {!grantManager ? (
        <Link
          href={path}
          prefetch
          className={cn(
            'cursor-pointer	p-1 rounded-2xl flex flex-col gap-3',
            projectJoinRoundStatus === 'APPROVED' &&
              'bg-[var(--color-surface-info-transparent)]',
            projectJoinRoundStatus === 'REJECTED' &&
              'bg-[var(--color-surface-negative-transparent)]',
            projectJoinRoundStatus === 'PENDING' &&
              'bg-[var(--color-surface-warn-transparent)]',
          )}
        >
          <div className="px-6 py-4 rounded-xl bg-[var(--round-card-surface)] flex flex-col gap-3">
            {children}
          </div>
          <div>
            {projectJoinRoundStatus === 'APPROVED' && (
              <Alert
                type="text"
                fill={'blue'}
                color="blue"
                content="Grant Application Under Review. You will receive an update before the grant round starts"
                closeIcon={false}
                // button="Contact Team"
                className=""
              />
            )}
            {projectJoinRoundStatus === 'PENDING' && (
              <Alert
                type="text"
                fill={'yellow'}
                color="yellow"
                content="Grant Application Under Review. You will receive an update before the grant round starts"
                closeIcon={false}
                // button="Contact Team"
                className=""
              />
            )}
          </div>
        </Link>
      ) : (
        <Link
          href={path}
          prefetch
          className="cursor-pointer	px-6 border border-[var(--round-card-border)] hover:border-[var(--color-border-primary-base)] py-4 rounded-xl bg-[var(--round-card-surface)] transition-all	flex flex-col gap-3"
        >
          {children}
        </Link>
      )}
    </RoundCardContext.Provider>
  );
};

interface GrantsRoundCardHeaderProps {
  grantName: string;
}

const GrantRoundCardHeader = ({ grantName }: GrantsRoundCardHeaderProps) => {
  const { currentEventStatus, isPaused } = useContext(RoundCardContext);
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-between gap-4">
        {isPaused ? (
          <div className="flex justify-start items-center gap-4">
            <Text className="b2" color="primary">
              {grantName}
            </Text>
            <Tag color="red" variant="subtle" border={true}>
              <TagLabel>Round Paused</TagLabel>
            </Tag>
          </div>
        ) : (
          <div className="flex justify-start items-center gap-4">
            {currentEventStatus === 'VOTING' && <PingIcon />}
            <Text className="b2" color="primary">
              {grantName}
            </Text>
            {currentEventStatus === 'REGISTRATION' && (
              <Tag color="orange" variant="subtle" border={true}>
                {/* <TagRightIcon iconName={'search'} /> */}
                <TagLabel>Registrations Live</TagLabel>
              </Tag>
            )}
            {currentEventStatus === 'VOTING' && (
              <Tag color="green" variant="subtle" border={true}>
                <TagLabel>Voting Live</TagLabel>
              </Tag>
            )}
          </div>
        )}
      </div>
      <Button leftIconName="chevronRight" variant={'outline'} className="" />
    </div>
  );
};

interface GrantsRoundCardFooterProps {
  matchingPool?: number;
  participants?: number;
  contributions?: number;
}

const GrantRoundCardFooter = ({
  matchingPool,
  participants,
  contributions,
}: GrantsRoundCardFooterProps) => {
  const { currentEventStatus, eventStatusTable, isPaused } =
    useContext(RoundCardContext);
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center w-full ">
        {matchingPool && (
          <div className="flex gap-[10px] items-center">
            <div className="bg-[var(--color-surface-alert-transparent)] rounded-lg p-[6px]">
              <Icon
                name="piggyBank"
                color="var(--color-bg-alert-base)"
                height={16}
                width={16}
              />
            </div>
            <div className="flex items-center gap-1">
              <Text className="l2" color="primary">
                {nFormatter(matchingPool)}
              </Text>
              <Text className="l2" color={'secondary'}>
                Pool
              </Text>
            </div>
          </div>
        )}

        {participants && (
          <div className="flex items-center">
            <div className="h-1 w-1 bg-[var(--color-fg-primary-base)] rounded-full mx-5" />

            <div className="flex gap-[10px] items-center">
              <div className="bg-[var(--color-surface-innovative-transparent)] rounded-lg p-[6px]">
                <Icon
                  name="user3"
                  color="var(--color-bg-innovative-base)"
                  height={16}
                  width={16}
                />
              </div>
              <div className="flex items-center gap-1">
                <Text className="l2" color="primary">
                  {nFormatter(participants)}
                </Text>
                <Text className="l2" color={'secondary'}>
                  Participants
                </Text>
              </div>
            </div>
          </div>
        )}

        {contributions && (
          <div className="flex items-center">
            <div className="h-1 w-1 bg-[var(--color-fg-primary-base)] rounded-full mx-5" />

            <div className="flex gap-[10px] items-center">
              <div className="bg-[var(--color-surface-positive-transparent)] rounded-lg p-[6px]">
                <Icon
                  name="donation"
                  color="var(--color-fg-success)"
                  height={16}
                  width={16}
                />
              </div>
              <div className="flex items-center gap-1">
                <Text className="l2" color="primary">
                  {nFormatter(contributions)}
                </Text>
                <Text className="l2" color={'secondary'}>
                  Contributed
                </Text>
              </div>
            </div>
          </div>
        )}
      </div>
      {isPaused ? (
        <Text color={'negative'} className="l2-light whitespace-nowrap">
          Round Paused
        </Text>
      ) : (
        <div>
          {currentEventStatus === 'BEFORE_REGISTRATION' && (
            <div className="flex w-[max-content] gap-1">
              <Text className="l2-light text-[var(--color-fg-primary-subdued)] w-[max-content]">
                Registration Starts in
              </Text>
              <Text className="l2-light text-[var(--color-fg-warning)] w-[max-content]">
                {dayjs(
                  eventStatusTable?.find((e) => e.status === 'REGISTRATION')
                    ?.startTime,
                ).fromNow(true)}
              </Text>
            </div>
          )}
          {currentEventStatus === 'REGISTRATION' && (
            <div className="flex w-[max-content] gap-1">
              <Text className="l2-light text-[var(--color-fg-primary-subdued)] w-[max-content]">
                Round Starts in
              </Text>
              <Text className="l2-light text-[var(--color-fg-warning)] w-[max-content]">
                {dayjs(
                  eventStatusTable?.find((e) => e.status === 'VOTING')
                    ?.startTime,
                ).fromNow(true)}
              </Text>
            </div>
          )}
          {currentEventStatus === 'VOTING' && (
            <div className="flex w-[max-content] gap-1">
              <Text className="l2-light text-[var(--color-fg-primary-subdued)] w-[max-content]">
                Round ending in
              </Text>
              <Text className="l2-light text-[var(--color-bg-positive-emphasis)] w-[max-content]">
                {dayjs(
                  eventStatusTable?.find((e) => e.status === 'VOTING')
                    ?.startTime,
                ).fromNow(true)}
              </Text>
            </div>
          )}
          {currentEventStatus === 'ENDED' && (
            <div className="flex w-[max-content] gap-1">
              <Text className="l2-light text-[var(--color-fg-primary-subdued)] w-[max-content]">
                Round ended:
              </Text>
              <Text className="l2-light text-[var(--color-fg-primary-subdued)] w-[max-content]">
                {dayjs(
                  eventStatusTable?.find((e) => e.status === 'VOTING')?.endTime,
                ).format('MMMM D, YYYY')}
              </Text>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { GrantsRoundCard, GrantRoundCardHeader, GrantRoundCardFooter };
