import React, { useContext } from 'react';

import dayjs from '@cubik/dayjs';

import { Icon } from '../../../icons/icon';
import { Alert } from '../Alert';
import { Button } from '../Button/button';
import { Tag, TagLabel, TagRightIcon } from '../Tag/tag';
import { Text } from '../text/text';

interface GrantsRoundCardProps {
  children: React.ReactNode;
  roundStartDate: Date;
  roundEndDate: Date;
  grantManager?: boolean;
  onClick?: () => void;
}

enum EVENT_STATUS {
  NOT_STARTED = 'not_started',
  STARTED = 'started',
  ENDED = 'ended',
}

type RoundCardContextType = {
  eventStatus: EVENT_STATUS;
  eventTime?: string;
};

const RoundCardContext = React.createContext<RoundCardContextType>({
  eventStatus: EVENT_STATUS.NOT_STARTED,
  eventTime: '',
});

const GrantsRoundCard = ({
  children,
  grantManager,
  roundStartDate,
  roundEndDate,
  onClick,
}: GrantsRoundCardProps) => {
  const now = dayjs();
  console.log('round start date', dayjs(roundStartDate));
  const isRoundStarted = now.isAfter(dayjs(roundStartDate));
  const isRoundEnded = now.isAfter(dayjs(roundEndDate));

  const eventStatus = React.useMemo(() => {
    if (isRoundStarted && !isRoundEnded) {
      return EVENT_STATUS.STARTED;
    } else if (isRoundEnded) {
      return EVENT_STATUS.ENDED;
    } else {
      return EVENT_STATUS.NOT_STARTED;
    }
  }, [isRoundStarted, isRoundEnded]);

  const eventTime = React.useMemo(() => {
    if (isRoundStarted && !isRoundEnded) {
      return dayjs(roundEndDate).fromNow();
    } else if (isRoundEnded) {
      return dayjs(roundEndDate).fromNow();
    } else {
      return dayjs(roundStartDate).fromNow();
    }
  }, []);

  return (
    <RoundCardContext.Provider value={{ eventStatus, eventTime }}>
      {!grantManager ? (
        <div
          onClick={onClick}
          className="cursor-pointer	p-1 bg-[var(--color-surface-info-transparent)] rounded-2xl flex flex-col gap-3"
        >
          <div className="px-6 py-4 rounded-xl bg-[var(--round-card-surface)] flex flex-col gap-3">
            {children}
          </div>
          <div>
            <Alert
              type="text"
              fill={'blue'}
              color="blue"
              content="Grant Application Under Review. You will receive an update before the grant round starts"
              closeIcon={false}
              // button="Contact Team"
              className=""
            />
          </div>
        </div>
      ) : (
        <div
          onClick={onClick}
          className="cursor-pointer	px-6 border border-[var(--round-card-border)] hover:border-[var(--color-border-primary-base)] py-4 rounded-xl bg-[var(--round-card-surface)] transition-all	flex flex-col gap-3"
        >
          {children}
        </div>
      )}
    </RoundCardContext.Provider>
  );
};

interface GrantsRoundCardHeaderProps {
  grantName: string;
  isLive?: boolean;
}

const GrantRoundCardHeader = ({ grantName }: GrantsRoundCardHeaderProps) => {
  const { eventStatus } = useContext(RoundCardContext);
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-between gap-4">
        <Text className="b2" color="primary">
          {grantName}
        </Text>
        {eventStatus === EVENT_STATUS.NOT_STARTED && (
          <Tag color="orange" variant="subtle">
            <TagRightIcon iconName={'search'} />
            <TagLabel>Registrations Live</TagLabel>
          </Tag>
        )}
      </div>
      <Button leftIconName="chevronRight" variant={'outline'} className="" />
      {/* <div className="border border-[var(--button-outline-border-default)] p-[11px] rounded-lg">
        <Icon name="chevronRight" height={16} width={16} />
      </div> */}
    </div>
  );
};

interface GrantsRoundCardFooterProps {
  matchingPool?: string;
  participants?: string;
  contributions?: string;
}

const GrantRoundCardFooter = ({
  matchingPool,
  participants,
  contributions,
}: GrantsRoundCardFooterProps) => {
  const { eventStatus } = useContext(RoundCardContext);
  console.log('event status - ', eventStatus);
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center w-full ">
        {matchingPool && (
          <div className="flex gap-[10px] items-center">
            <div className="bg-[var(--color-surface-alert-transparent)] rounded-lg p-[6px]">
              <Icon
                name="piggyBank"
                stroke="var(--color-bg-alert-base)"
                height={16}
                width={16}
              />
            </div>
            <div className="flex items-center gap-1">
              <Text className="l2" color="primary">
                50K
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
                  stroke="var(--color-bg-innovative-base)"
                  height={16}
                  width={16}
                />
              </div>
              <div className="flex items-center gap-1">
                <Text className="l2" color="primary">
                  300
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
                  stroke="var(--color-fg-success)"
                  height={16}
                  width={16}
                />
              </div>
              <div className="flex items-center gap-1">
                <Text className="l2" color="primary">
                  300
                </Text>
                <Text className="l2" color={'secondary'}>
                  Contributed
                </Text>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex w-[max-content] gap-1">
        <Text className="l2-light text-[var(--color-fg-primary-subdued)] w-[max-content]">
          Round starts in
        </Text>
        <Text className="l2-light text-[var(--color-fg-warning)] w-[max-content]">
          3 Days
        </Text>
      </div>
    </div>
  );
};

export { GrantsRoundCard, GrantRoundCardHeader, GrantRoundCardFooter };
