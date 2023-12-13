import React from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';

import { DateInterval, IntervalsToDate } from '@cubik/common';
import { prisma } from '@cubik/database';
import dayjs from '@cubik/dayjs';
import { Button, EmptyState, MinimalLineGraph, SubHead } from '@cubik/ui';

const getProjectStats = async (projectId: string, date: DateInterval) => {
  try {
    const dateNow = dayjs();
    console.log(projectId);
    const data = await prisma.contribution.findMany({
      where: {
        projectId,
        isArchive: false,

        // createdAt: {
        //   gte: dateNow.subtract(IntervalsToDate[date], 'D').toDate(),
        // },
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        user: {
          select: { id: true },
        },
        totalUsdAmount: true,
        createdAt: true,
      },
    });
    const formattedData: {
      [key: string]: { users: Set<string>; total: number };
    } = {};
    data.forEach((item) => {
      const dayWithNoonTime = item.createdAt.toISOString().split('T')[0];
      // const dayUnixTimestamp = new Date(dayWithNoonTime).getTime() / 1000;

      const dayKey = dayWithNoonTime;
      console.log(dayKey);
      if (!formattedData[dayKey]) {
        formattedData[dayKey] = { users: new Set(), total: 0 };
      }
      formattedData[dayKey].users.add(item.user.id);
      formattedData[dayKey].total += item.totalUsdAmount;
    });

    return Object.keys(formattedData).map((dayKey) => ({
      day: dayKey,
      userCount: formattedData[dayKey].users.size,
      contributionCount: formattedData[dayKey].total,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

interface Props {
  projectId: string;
}
const ProjectAdminStatsTab = async ({ projectId }: Props) => {
  const data = await getProjectStats(projectId, '30D');
  console.log(data);
  return (
    <TabLayout>
      <SubHead heading={'Project Stats'}>
        <Button leftIconName="threeDots" variant={'secondary'} size="md" />
      </SubHead>
      <MinimalLineGraph
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
              [1701993600000, 37],
              [1702080000000, 36],
              [1702166400000, 85],
              [1702252800000, 83],
              [1702339200000, 19],
              [1702425600000, 100],
            ],
          },
        ]}
        xAxis={{
          // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'datetime',
          },
        }}
      />
      {/* <LineChart
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
              [1701993600000, 37],
              [1702080000000, 36],
              [1702166400000, 85],
              [1702252800000, 83],
              [1702339200000, 19],
              [1702425600000, 100],
              [1702512000000, 44],
              [1702598400000, 21],
              [1702684800000, 10],
              [1702771200000, 45],
              [1702857600000, 95],
              [1702944000000, 79],
              [1703030400000, 83],
              [1703116800000, 73],
              [1703203200000, 98],
              [1703289600000, 91],
              [1703376000000, 73],
              [1703462400000, 44],
              [1703548800000, 95],
              [1703635200000, 76],
              [1703721600000, 59],
              [1703808000000, 82],
              [1703894400000, 17],
              [1703980800000, 27],
            ],
          },
          {
            name: 'Contribution',
            data: [
              [1701388800000, 24],
              [1701475200000, 42],
              [1701561600000, 15],
              [1701648000000, 35],
              [1701734400000, 77],
              [1701820800000, 77],
              [1701907200000, 41],
              [1701993600000, 37],
              [1702080000000, 36],
              [1702166400000, 85],
              [1702252800000, 83],
              [1702339200000, 19],
              [1702425600000, 100],
              [1702512000000, 44],
              [1702598400000, 21],
              [1702684800000, 10],
              [1702771200000, 45],
              [1702857600000, 95],
              [1702944000000, 79],
              [1703030400000, 83],
              [1703116800000, 73],
              [1703203200000, 98],
              [1703289600000, 91],
              [1703376000000, 73],
              [1703462400000, 44],
              [1703548800000, 95],
              [1703635200000, 76],
              [1703721600000, 59],
              [1703808000000, 82],
              [1703894400000, 17],
              [1703980800000, 27],
            ],
          },
          //   {
          //     name: 'Contributions',
          //     data: [28, 29, 33, 36, 32, 32, 33],
          //   },
          //   {
          //     name: 'Contributors',
          //     data: [12, 11, 14, 18, 17, 13, 13],
          //   },
        ]}
        xAxis={{
          // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'datetime',
          },
        }}
      />
      <MinimalColumnGraph
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
              [1701993600000, 37],
              [1702080000000, 36],
              [1702166400000, 85],
              [1702252800000, 83],
              [1702339200000, 19],
              [1702425600000, 100],
              [1702512000000, 44],
              [1702598400000, 21],
              [1702684800000, 10],
              [1702771200000, 45],
              [1702857600000, 95],
              [1702944000000, 79],
              [1703030400000, 83],
              [1703116800000, 73],
              [1703203200000, 98],
              [1703289600000, 91],
              [1703376000000, 73],
              [1703462400000, 44],
              [1703548800000, 95],
              [1703635200000, 76],
              [1703721600000, 59],
              [1703808000000, 82],
              [1703894400000, 17],
              [1703980800000, 27],
            ],
          },
          {
            name: 'Contribution',
            data: [
              [1701388800000, 24],
              [1701475200000, 42],
              [1701561600000, 15],
              [1701648000000, 35],
              [1701734400000, 77],
              [1701820800000, 77],
              [1701907200000, 41],
              [1701993600000, 37],
              [1702080000000, 36],
              [1702166400000, 85],
              [1702252800000, 83],
              [1702339200000, 19],
              [1702425600000, 100],
              [1702512000000, 44],
              [1702598400000, 21],
              [1702684800000, 10],
              [1702771200000, 45],
              [1702857600000, 95],
              [1702944000000, 79],
              [1703030400000, 83],
              [1703116800000, 73],
              [1703203200000, 98],
              [1703289600000, 91],
              [1703376000000, 73],
              [1703462400000, 44],
              [1703548800000, 95],
              [1703635200000, 76],
              [1703721600000, 59],
              [1703808000000, 82],
              [1703894400000, 17],
              [1703980800000, 27],
            ],
          },
          //   {
          //     name: 'Contributions',
          //     data: [28, 29, 33, 36, 32, 32, 33],
          //   },
          //   {
          //     name: 'Contributors',
          //     data: [12, 11, 14, 18, 17, 13, 13],
          //   },
        ]}
        xAxis={{
          // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'datetime',
          },
        }}
      /> */}

      <EmptyState
        title={'No Grants Round Found'}
        description={
          'You havent applied for any grants round for the project. Apply for a grant to get started.'
        }
        icon={'cloudError'}
      />
    </TabLayout>
  );
};

export default ProjectAdminStatsTab;
