'use client';

import React from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';
import TreasuryInfoCard from '@/components/explorer/TreasuryInfoCard';

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

const ProjectAdminStatsTab = () => {
  const { theme } = useTheme();
  const showEmptyState = false;
  const ChartData = [
    {
      name: 'Series 1',
      type: 'area',
      color: '#1199FF',
      data: [
        [1680307200000, 0],
        [1680393600000, 0],
        [1680480000000, 0],
        [1680566400000, 0],
        [1680652800000, 0],
        [1680739200000, 0],
        [1680825600000, 0],
        [1680912000000, 56],
        [1680998400000, 99],
        [1681084800000, 102],
        [1681171200000, 277],
        [1681257600000, 242],
        [1681344000000, 292],
        [1681430400000, 87],
        [1681516800000, 70],
      ],
    },
    {
      name: 'Series 3',
      type: 'area',
      color: '#F43F5E',
      data: [
        [1680307200000, 0],
        [1680393600000, 0],
        [1680480000000, 0],
        [1680566400000, 0],
        [1680652800000, 0],
        [1680739200000, 0],
        [1680825600000, 0],
        [1680912000000, 0],
        [1680998400000, 33],
        [1681084800000, 44],
        [1681171200000, 65],
        [1681257600000, 147],
        [1681344000000, 147],
        [1681430400000, 142],
        [1681516800000, 167],
      ],
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
          value="$44,546.8"
        />
        <Divider orientation="vertical" className="!h-auto" />
        <TreasuryInfoCard
          header="Contributions Received"
          headerIconName="infoCircle"
          value="$4,621.5"
        />
        <Divider orientation="vertical" className="!h-auto" />
        <TreasuryInfoCard
          header="Matched Grants Funds"
          headerIconName="infoCircle"
          value="$30,987.8"
        />
        <Divider orientation="vertical" className="!h-auto" />
        <TreasuryInfoCard
          header="Contributors"
          headerIconName="infoCircle"
          value="3,572"
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
        <StatsSwitch />
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
