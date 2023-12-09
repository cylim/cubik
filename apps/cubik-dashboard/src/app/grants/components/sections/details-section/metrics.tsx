'use client';

import React from 'react';
import { getMetrics } from '@/app/grants/components/sections/details-section/helpers/getMetrics';
import { AccessStore } from '@/context/scope';
import { useQuery } from '@tanstack/react-query';

import { MetricsItem } from '@cubik/ui';

export const Metrics = () => {
  const { scope } = AccessStore();
  const metrics = useQuery({
    queryKey: ['metrics', scope?.event_id],
    queryFn: ({ queryKey }) => getMetrics(queryKey[1] || ''),
    enabled: !!scope,
  });
  return (
    <>
      <MetricsItem
        label="Contributions"
        changePercent="10%"
        subText={metrics.data?.contributions.toLocaleString() || '0'}
      />
      <MetricsItem
        label="Contributors"
        changePercent="10%"
        subText={metrics.data?.contributors.toLocaleString() || '0'}
      />
      <MetricsItem
        label="Matching Pool"
        changePercent=""
        subText={metrics.data?.matchingPool.toLocaleString() || '0'}
      />
    </>
  );
};
