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

  const roundMatchingPool = 30;
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
              type: 'area',
              data: [
                [1701388800000, 0],
                [1701475200000, 0],
                [1701561600000, 0],
                [1701648000000, 0],
                [1701734400000, 0],
                [1701820800000, 0],
                [1701907200000, 10],
              ],
            },
          ]}
          color={['#000000']}
        />
      </MetricsItem>
      <MetricsItem
        label="Contributors"
        changePercent="10%"
        subText={metrics.data?.contributors.toLocaleString() || '0'}
      >
        <MinimalColumnGraph
          theme={theme}
          color={['#000000']}
          chartData={[
            {
              name: 'Est Match',
              data: [
                [1701388800000, 24],
                [1701475200000, 42],
                [1701561600000, 15],
                [1701648000000, 35],
                [1701648000000, 35],
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
          color={['#000000']}
          annotations={{
            yaxis: [
              {
                y: roundMatchingPool,
                borderColor: '#c2c2c250',
                strokeDashArray: 6,
                label: {
                  show: false,
                },
              },
            ],
          }}
          chartData={[
            {
              name: 'Est Match',
              data: [
                [1701388800000, 0],
                [1701475200000, 0],
                [1701561600000, 0],
                [1701648000000, 25],
                [1701734100000, 25],
                [1701820800000, 25],
                [1701907200000, 25],
                [1702007200000, 25],
              ],
            },
          ]}
        />
      </MetricsItem>
    </>
  );
};
