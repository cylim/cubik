import React from 'react';
import ProfilePictureAvatar from '@/app/components/common/profile-picture';
import { useQuery } from '@tanstack/react-query';

import type { NFTProfile } from '@cubik/common-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@cubik/ui';

import { useProjectEventStore } from '../store';
import { getTopEarner } from './getContributors';

export const TopEarner = () => {
  const { event } = useProjectEventStore();

  const topEarner = useQuery({
    queryFn: () => getTopEarner(event),
    queryKey: ['topEarner'],
    enabled: event ? true : false,
  });

  return (
    <div className="mt-4 flex w-full flex-col items-start">
      <div className="flex items-center gap-2">
        <div className="rounded-md border-[1.5px] border-[#2B1449] p-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5513 10.6167C13.5955 9.65712 14.25 8.27999 14.25 6.75C14.25 3.85051 11.8995 1.5 9 1.5C6.10051 1.5 3.75 3.85051 3.75 6.75C3.75 8.37266 4.48616 9.82338 5.64272 10.7864M12.5513 10.6167C11.6165 11.4736 10.3695 12 9 12C7.72316 12 6.55279 11.5442 5.64272 10.7864M12.5513 10.6167L13.875 16.5L13.606 16.3345C10.7988 14.6069 7.24266 14.6716 4.5 16.5L5.64272 10.7864"
              stroke="#9747FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="text-lg font-semibold text-white">Top Contributors</div>
      </div>
      <Table className="mt-4 w-full">
        <TableHeader className="font-inter text-md w-full text-[#515251]">
          <TableRow className="">
            <TableHead className=" font-semibole"> Rank</TableHead>
            <TableHead className=" font-semibole"> Contributor</TableHead>
            <TableHead className=" font-semibole">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="flex gap-3">
          {topEarner.data?.map((earner, index: number) => {
            return (
              <TableRow key={earner.id}>
                <TableCell className="p-1 text-center">
                  <span
                    style={{
                      color: '#3B3D3D',
                      fontWeight: 600,
                      fontSize: '16px',
                    }}
                  >
                    #
                  </span>
                  <span
                    style={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '20px',
                    }}
                  >
                    {index + 1}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-start gap-2">
                    <ProfilePictureAvatar
                      NFTProfile={
                        earner.user?.profileNft as unknown as NFTProfile
                      }
                      asNFT={earner.user?.profileNft ? true : false}
                      profilePicture={
                        earner.user?.profileNft
                          ? undefined
                          : earner.user?.profilePicture!
                      }
                      username={earner.user?.username as string}
                      width={{
                        base: '36px',
                        sm: '36px',
                        md: '36px',
                        lg: '36px',
                        xl: '36px',
                      }}
                      height={{
                        base: '36px',
                        sm: '36px',
                        md: '36px',
                        lg: '36px',
                        xl: '36px',
                      }}
                    />

                    <div className="text-md font-semibold text-white">
                      @{earner.user?.username}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold text-white">
                    ${earner.totalUsdAmount}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
