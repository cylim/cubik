import React, { useState } from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';
import TreasuryInfoCard from '@/components/explorer/TreasuryInfoCard';

import {
  Button,
  Divider,
  EmptyState,
  LineGraph,
  SubHead,
  Text,
} from '@cubik/ui';

import { StatsSwitch } from './statsSwitch';

const ProjectAdminStatsTab = () => {
  const theme = 'light';
  const showEmptyState = false;
  const ChartData = [
    {
      name: 'Series 1',
      type: 'area',
      color: '#1199FF',
      data: [
        [1680307200000, 172],
        [1680393600000, 47],
        [1680480000000, 117],
        [1680566400000, 192],
        [1680652800000, 323],
        [1680739200000, 251],
        [1680825600000, 195],
        [1680912000000, 359],
        [1680998400000, 9],
        [1681084800000, 211],
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
      color: '#F4D03F',
      data: [
        [1680307200000, 9],
        [1680393600000, 148],
        [1680480000000, 115],
        [1680566400000, 197],
        [1680652800000, 79],
        [1680739200000, 175],
        [1680825600000, 192],
        [1680912000000, 82],
        [1680998400000, 99],
        [1681084800000, 177],
        [1681171200000, 29],
        [1681257600000, 147],
        [1681344000000, 147],
        [1681430400000, 142],
        [1681516800000, 167],
      ],
    },
  ];

  const [activeRange, setActiveRange] = useState('one_year');

  const handleRangeChange = (newRange: React.SetStateAction<string>) => {
    setActiveRange(newRange);
    // onRangeChange(newRange);
    const now = new Date().getTime();
    console.log(newRange, now);
    switch (newRange) {
      case 'one_week':
        ApexCharts.exec(
          'project-chart',
          'zoomX',
          now - 7 * 24 * 60 * 60 * 1000, // 7 days ago
          now
        )
        break;
      case 'two_weeks':
        ApexCharts.exec(
          'project-chart',
          'zoomX',
          now - 14 * 24 * 60 * 60 * 1000, // 14 days ago
          now
        )
        break;
      case 'one_month':
        ApexCharts.exec(
          'project-chart',
          'zoomX',
          now - 30 * 24 * 60 * 60 * 1000, // 30 days ago
          now
        )
        break;
      case 'two_months':
        ApexCharts.exec(
          'project-chart',
          'zoomX',
          now - 60 * 24 * 60 * 60 * 1000, // 60 days ago
          now
        )
        break;
      default:
    }
  };

  return (
    <TabLayout>
      <SubHead heading={'Project Stats'}>
        <Button leftIconName="threeDots" variant={'secondary'} size="md" />
      </SubHead>
      <div className="flex justify-between p-6">
        <TreasuryInfoCard
          header="Outstanding Balance"
          headerIconName="infoCircle"
          tooltipText="Outstanding Balance is the amount of balance that is outstanding
          for this project."
          value="$456.8"
        />
        <Divider orientation="vertical" className=" !h-auto" />
        <TreasuryInfoCard
          header="Current Treasury Balance"
          headerIconName="infoCircle"
          value="$4,621.5"
        />
        <Divider orientation="vertical" className=" !h-auto" />
        <TreasuryInfoCard
          header="Previous Withdrawals"
          headerIconName="infoCircle"
          value="$30,987.8"
        />
        <Divider orientation="vertical" className=" !h-auto" />
        <TreasuryInfoCard
          header="Threshold"
          headerIconName="infoCircle"
          value="2/2"
        />
      </div>
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center justify-between gap-5">
          {ChartData.map((item, key) => {
            return (
              <div
                className="flex flex-row items-center justify-start gap-2"
                key={key}
              >
                <div
                  className={`h-3 w-3 rounded-lg`}
                  style={{
                    backgroundColor: item.color,
                  }}
                ></div>
                <Text className="l1" color="primary">
                  {item.name}
                </Text>
              </div>
            );
          })}
        </div>
        <StatsSwitch activeRange={activeRange} onRangeChange={handleRangeChange} />
      </div>
      <LineGraph
        options={{
          selection: activeRange,
        }}
        chart_id='project-chart'
        theme={theme}
        color={['#1199FF', '#F4D03F', '#F43F5E']}
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
