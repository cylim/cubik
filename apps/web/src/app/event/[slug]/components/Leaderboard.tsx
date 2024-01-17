'use client';

import React, { useState } from 'react';
import { LeaderboardSwitch } from '@/app/event/[slug]/components/LeaderboardSwitch';

import { EmptyState, Text } from '@cubik/ui';

export type leaderboardSwitchOptions = 'contributors' | 'projects';

const Leaderboard = () => {
  const [leaderboardSwitch, setLeaderboardSwitch] =
    useState<leaderboardSwitchOptions>('contributors');
  return (
    <div>
      <div className="flex justify-between">
        <Text className="h6" color={'primary'}>
          LeaderBoard
        </Text>
        <div>
          <LeaderboardSwitch
            isActive={leaderboardSwitch}
            change={setLeaderboardSwitch}
          />
        </div>
      </div>
      {leaderboardSwitch === 'contributors' && (
        <EmptyState
          title={"Voting haven't started yet"}
          description={
            'You can see teh top contributors and top projects choose by the community once the voting goes live'
          }
          icon={'poll'}
          iconColor="#E1BA1D"
          bgColor="bg-[var(--empty-state-icon-orange-fill)]"
          border={true}
        ></EmptyState>
      )}
    </div>
  );
};

export default Leaderboard;
