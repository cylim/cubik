'use client';

import React from 'react';
import { AccessStore } from '@/context/scope';
import { useUser } from '@/context/user';

import { Text } from '@cubik/ui';

export const EventHeader = () => {
  const { scope } = AccessStore();
  const { user } = useUser();
  return (
    <>
      <div className="flex min-h-[12rem] w-full items-center  justify-center">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center">
          <div className="flex items-center justify-start gap-3">
            <Text color={'primary'} className="h5">
              {scope?.event_name}
            </Text>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
