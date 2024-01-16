import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { nFormatter } from '@cubik/common';
import { AvatarLabelGroup, CubikTable, Text } from '@cubik/ui';

type tData = {
  id: string;
  leader: {
    avatar: string;
    name: string;
  };
  donation: {
    totalUsdAmount: number;
  };
};

const ProjectLeaderboardTable = ({
  leaderboardData,
}: {
  leaderboardData: any;
}) => {
  console.log('leaderboardData', leaderboardData);
  if (!leaderboardData) {
    return <></>;
  }
  let data: tData[] = leaderboardData?.earners?.map((leader: any) => {
    return {
      id: leader.id,
      leader: {
        avatar: leader?.user?.profilePicture,
        name: leader?.user?.username,
      },

      totalUsdAmount: leader?.totalUsdAmount,
    };
  });

  // data.push({
  //   id:
  // })

  const columns: ColumnDef<tData>[] = [
    {
      accessorKey: 'leader',
      header: '',
      cell: ({ row }) => {
        return row.index + 1;
      },
    },
    {
      accessorKey: 'leader',
      header: '',

      cell: ({ row }) => {
        console.log('row', row);
        return (
          // <></>
          <AvatarLabelGroup
            size="sm"
            avatarSrc={(row.getValue('leader') as { avatar: string }).avatar}
            shape="circle"
            title={(row.getValue('leader') as { name: string }).name}
          />
        );
      },
    },
    {
      accessorKey: 'leader',
      header: '',
      cell: ({ row }) => {
        console.log('row', row);
        return (
          <div>
            {/* <Text className="l2" color="primary">
              {nFormatter(
                (row.getValue('donation') as { totalUsdAmount: number })
                  .totalUsdAmount,
              ).toString()}
            </Text> */}
          </div>
        );
      },
    },
  ];
  return <CubikTable data={data} columns={columns} />;
  // return <div>asdfs</div>;
};

export default ProjectLeaderboardTable;
