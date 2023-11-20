'use client';

import React, { Suspense, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { Prisma } from '@cubik/database';

import { useProjectEventStore } from '../store';
import { Contributions } from './Contributions';
import { getContributions } from './getContributors';
import { TopEarner } from './TopEarner';
import { VaultInfo } from './VaultInfo';

export type ContributionRowType = Prisma.ContributionGetPayload<{
  select: {
    id: true;
    totalAmount: true;
    totalUsdAmount: true;
    createdAt: true;
    token: true;
    user: {
      select: {
        id: true;
        mainWallet: true;
        username: true;
        profileNft: true;
        profilePicture: true;
      };
    };
  };
}>;

export const ContributionSection = () => {
  const { event } = useProjectEventStore();
  const [page] = useState<number>(0);

  const contributions = useQuery({
    queryFn: () => getContributions(event, page),
    queryKey: ['contributions'],
    enabled: event ? true : false,
  });

  return (
    <>
      <Suspense fallback={'Loading...'}>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="flex w-full flex-col">
            <Contributions
              isLoading={contributions.isLoading}
              contributions={contributions.data ?? []}
            />
          </div>

          <div className="flex w-full max-w-full flex-col lg:max-w-sm">
            <VaultInfo />
            <TopEarner />
          </div>
        </div>
      </Suspense>
    </>
  );
};
