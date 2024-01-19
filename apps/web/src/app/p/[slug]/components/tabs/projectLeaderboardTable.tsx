import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { nFormatter } from '@cubik/common';
import { AvatarLabelGroup, CubikTable, Text } from '@cubik/ui';
import TitleWithIcon from '@cubik/ui/components/ui/Avatar/TitleWithIcon';

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
      donation: {
        totalUsdAmount: leader?.totalUsdAmount,
      },
    };
  });
  const columns: ColumnDef<tData>[] = [
    {
      accessorKey: 'leader',

      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <TitleWithIcon
              size="sm"
              text={`${row.index + 1}`}
              iconColor={
                row.index + 1 === 1
                  ? 'var(--tag-solid-surface-orange)'
                  : row.index + 1 === 2
                  ? 'var(--tag-solid-surface-green)'
                  : 'transparent'
              }
              icon={'awardMedal'}
            />
            <AvatarLabelGroup
              size="sm"
              avatarSrc={(row.getValue('leader') as { avatar: string }).avatar}
              shape="circle"
              title={(row.getValue('leader') as { name: string }).name}
            />
          </div>
        );
      },
    },
    {
      accessorKey: 'donation',
      header: '',
      cell: ({ row }) => {
        return (
          <div>
            <Text className="l3" color="secondary">
              {`$ ${nFormatter(
                (row.getValue('donation') as { totalUsdAmount: number })
                  .totalUsdAmount,
              )}`}
            </Text>
          </div>
        );
      },
    },
  ];

  return <CubikTable data={data} columns={columns} showHeader={false} />;
};

export default ProjectLeaderboardTable;
