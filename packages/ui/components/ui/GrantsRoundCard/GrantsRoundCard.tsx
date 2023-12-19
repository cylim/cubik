import React from 'react';

import { Icon } from '../../../icons/icon';
import { Alert } from '../Alert';
import { Text } from '../text/text';

interface GrantsRoundCardProps {
  children: React.ReactNode;
  grantManager: boolean;
}

const GrantsRoundCard = ({ children, grantManager }: GrantsRoundCardProps) => {
  return (
    <>
      {!grantManager ? (
        <div className="p-1 bg-[var(--color-surface-info-transparent)] rounded-2xl flex flex-col gap-3">
          <div className="px-6 py-4 rounded-xl bg-[var(--round-card-surface)] flex flex-col gap-3">
            {children}
          </div>
          <div>
            <Alert
              type="text"
              fill={'blue'}
              color="blue"
              title="Grant Application Under Review"
              content="You will receive an update before the grant round starts"
              closeIcon={false}
              button="Contact Team"
              className=""
            />
          </div>
        </div>
      ) : (
        <div className="px-6 py-4 rounded-xl bg-[var(--round-card-surface)] flex flex-col gap-3">
          {children}
        </div>
      )}
    </>
  );
};

interface GrantsRoundCardHeaderProps {
  grantName: string;
  isLive?: boolean;
}

const GrantRoundCardHeader = ({ grantName }: GrantsRoundCardHeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <Text className="b2">{grantName}</Text>
      <div className="border border-[var(--button-outline-border-default)] p-[11px] rounded-lg">
        <Icon name="chevronRight" height={16} width={16} />
      </div>
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
              <Text className="l2">50K</Text>
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
                <Text className="l2">300</Text>
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
                <Text className="l2">300</Text>
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
