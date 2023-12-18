'use client';

import React from 'react';
import { AccessStore } from '@/context/scope';
import { useUser } from '@/context/user';

import { Icon, ProjectTimelineCard, Text } from '@cubik/ui';

export const EventHeader = () => {
  const { scope } = AccessStore();
  const { user } = useUser();
  return (
    <>
      <div className="flex w-full items-center justify-center bg-[var(--body-surface)]">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-start gap-12 px-4 py-12 md:px-8">
          <div className="flex items-center justify-start gap-3 ">
            <Text color={'primary'} className="h5">
              {scope?.event_name}
            </Text>
            <Icon name={'chevronDown'} />
          </div>
          <ProjectTimelineCard
            subElement={
              <Text className="l2" color={'tertiary'}>
                Round ends in 5 Days
              </Text>
            }
            date={new Date()}
            type="Voting"
          />
        </div>
      </div>
    </>
  );
};
