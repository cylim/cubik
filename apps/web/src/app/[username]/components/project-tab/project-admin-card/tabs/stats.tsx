'use client';

import React, { useMemo, useState } from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';
import TreasuryInfoCard from '@/components/explorer/TreasuryInfoCard';
import useProjectStats from '@/hooks/project/useProjectStats';

import {
  Button,
  Divider,
  EmptyState,
  LineGraph,
  SubHead,
  Text,
  useTheme,
} from '@cubik/ui';

import { StatsSwitch } from './statsSwitch';

interface Props {
  id: string;
}
export type StatsIsActive = '1W' | '2W' | '1M' | '2M';
const ProjectAdminStatsTab = ({ id }: Props) => {
  const { theme } = useTheme();
  const stats = useProjectStats({ id });
  const [statsIsActive, setStatsIsActive] = useState<StatsIsActive>('1W');
  const showEmptyState = false;

  const formattedChartData = useMemo(() => {
    return {
      contributions: [],
      contributors: [],
    };
  }, []);
  const ChartData = [
    {
      name: 'Contributions',
      type: 'area',
      color: '#1199FF',
      data: formattedChartData.contributions,
    },
    {
      name: 'Contributors',
      type: 'area',
      color: '#F43F5E',
      data: formattedChartData.contributions,
    },
  ];

  return (
    <TabLayout>
      <SubHead heading={'Project Stats'}>
        <Button leftIconName="threeDots" variant={'secondary'} size="md" />
      </SubHead>
      <div className="flex flex-col flex-wrap justify-between p-0 md:flex-row lg:p-6">
        <TreasuryInfoCard
          header="Lifetime Funds Raised"
          headerIconName="infoCircle"
          tooltipText="Outstanding Balance is the amount of balance that is outstanding
          for this project."
          value={
            stats.data
              ? `$${(
                  stats.data?.totalContributions + stats.data?.matchGrantAmount
                ).toLocaleString()}`
              : '$0'
          }
        />
        <Divider orientation="vertical" className="!h-auto" />
        <TreasuryInfoCard
          header="Contributions Received"
          headerIconName="infoCircle"
          value={
            stats.data
              ? `$${(stats.data?.totalContributions).toLocaleString()}`
              : '$0'
          }
        />
        <Divider orientation="vertical" className="!h-auto" />
        <TreasuryInfoCard
          header="Matched Grants Funds"
          headerIconName="infoCircle"
          value={
            stats.data
              ? `$${(stats.data?.matchGrantAmount).toLocaleString()}`
              : '$0'
          }
        />
        <Divider orientation="vertical" className="!h-auto" />
        <TreasuryInfoCard
          header="Contributors"
          headerIconName="infoCircle"
          value={
            stats.data ? (stats.data?.totalContributors).toLocaleString() : '0'
          }
        />
      </div>
      <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center ">
        <div className="flex flex-row items-center justify-between gap-5">
          {ChartData.map((item, key) => {
            return (
              <div
                className="flex flex-row items-center justify-start gap-2"
                key={key}
              >
                <div
                  className={`h-[10px] w-[10px] rounded-lg`}
                  style={{
                    backgroundColor: item.color,
                  }}
                ></div>
                <Text className="l2 md:l2" color="tertiary">
                  {item.name}
                </Text>
              </div>
            );
          })}
        </div>
        <StatsSwitch change={setStatsIsActive} isActive={statsIsActive} />
      </div>
      <LineGraph
        theme={theme}
        color={['#1199FF', '#F43F5E']}
        chartData={ChartData}
      />
      {showEmptyState && (
        <EmptyState
          title={'No Grants Round Found'}
          description={
            'You havent applied for any grants round for the project. Apply for a grant to get started.'
          }
          icon={'cloudError'}
        />
      )}
    </TabLayout>
  );
};

export default ProjectAdminStatsTab;
