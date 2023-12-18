'use client';

import React from 'react';
import { AccessStore } from '@/context/scope';
import { useUser } from '@/context/user';

import { ProjectTimelineCard, Text } from '@cubik/ui';

export const EventHeader = () => {
  const { scope } = AccessStore();
  const { user } = useUser();
  return (
    <>
      <div className="flex min-h-[10rem] w-full items-center justify-center bg-[var(--body-surface)] px-4 md:px-6">
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-start gap-4">
          <div className="flex items-center justify-start gap-3 ">
            <Text color={'primary'} className="h5">
              {scope?.event_name}
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="var(--body-fg-primary)"
              className="h5 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
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
