import React from 'react';

import { OverviewCard } from '../cubik-multisig/Overview';
import { TimelineCard } from '../cubik-multisig/Timeline';
import { MainMultisig } from './MainMultisig';

export const CubikMultisig = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-5  md:flex-row">
        <div className="md:flex-[0.7]">
          <MainMultisig />
        </div>
        <div className="flex w-full flex-col gap-5 md:flex-[0.3]">
          <OverviewCard />
          <TimelineCard />
        </div>
      </div>
    </>
  );
};
