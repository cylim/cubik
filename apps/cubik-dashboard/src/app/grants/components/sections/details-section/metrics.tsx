'use client';

import React from 'react';
import { getMetrics } from '@/app/grants/components/sections/details-section/helpers/getMetrics';
import { AccessStore } from '@/context/scope';
import { useQuery } from '@tanstack/react-query';

import {
  MetricsItem,
  MinimalColumnGraph,
  MinimalLineGraph,
  useTheme,
} from '@cubik/ui';

export const Metrics = () => {
  const { scope } = AccessStore();
  const { theme } = useTheme();

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
        subText={'$' + metrics.data?.contributions.toLocaleString() || '0'}
      >
        <MinimalLineGraph
          theme={theme}
          chartData={[
            {
              name: 'Est Match',
              data: [
                [1701388800000, 24],
                [1701475200000, 42],
                [1701561600000, 15],
                [1701648000000, 35],
                [1701734400000, 77],
                [1701820800000, 77],
                [1701907200000, 41],
              ],
            },
          ]}
          color={['#1199FF']}
        />
      </MetricsItem>
      <MetricsItem
        label="Contributors"
        changePercent="10%"
        subText={metrics.data?.contributors.toLocaleString() || '0'}
      >
        <MinimalColumnGraph
          color={['#F53D6B']}
          chartData={[
            {
              name: 'Est Match',
              data: [
                [1701388800000, 24],
                [1701475200000, 42],
                [1701561600000, 15],
                [1701648000000, 35],
                [1701734400000, 77],
                [1701820800000, 77],
                [1701907200000, 41],
                [1702007200000, 18],
              ],
            },
          ]}
        />
      </MetricsItem>
      <MetricsItem
        label="Matching Pool"
        changePercent={
          metrics.data?.remaingMatchingPool.toLocaleString() ||
          '0' + 'Pending to add'
        }
        subText={metrics.data?.matchingPool.toLocaleString() || '0'}
      >
        <MinimalLineGraph
          theme={theme}
          color={['#F53D6B']}
          chartData={[
            {
              name: 'Est Match',
              data: [
                [1701388800000, 12],
                [1701475200000, 19],
                [1701561600000, 16],
                [1701648000000, 35],
                [1701734400000, 21],
                [1701820800000, 44],
                [1701907200000, 16],
              ],
            },
          ]}
        />
      </MetricsItem>
    </>
  );
};
