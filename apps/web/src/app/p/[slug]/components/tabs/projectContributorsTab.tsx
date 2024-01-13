'use client';

import React, { useEffect, useState } from 'react';
import { getContributions, getTopEarner } from '@/app/p/[slug]/actions';
import { useProjectEventStore } from '@/app/p/[slug]/store';
import TabLayout from '@/components/common/tabs/TabLayout';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import { TokenList } from '@cubik/common';
import dayjs from '@cubik/dayjs';
import {
  AvatarLabelGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@cubik/ui';

function isUrlFromDomain(url: string, domain: string): boolean {
  // Create a regular expression pattern to match the domain
  const domainPattern = new RegExp(
    `^https?://${domain.replace('.', '\\.')}`,
    'i',
  );

  // Test if the URL matches the domain pattern
  return domainPattern.test(url);
}

// type Contributors = {
//   id: string;
//   token: string;
//   totalAmount: number;
//   totalUsdAmount: number;
//   createdAt: Date;
//   user: {
//     id: string;
//     username: string;
//     mainWallet: string;
//     profilePicture: string;
//   }
// }[]

interface Props {
  // contributors: Contributors;
  slug: string;
}

export const ProjectContributorsTab = ({ slug }: Props) => {
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const { event } = useProjectEventStore();
  const [lastPage, setLastPage] = useState<number>();
  const contribsQuery = useInfiniteQuery({
    queryKey: ['contribs', slug, event?.eventId, 1, 10],
    queryFn: async ({ queryKey, pageParam = 1 }) => {
      const [_key, slug, eventId, page, limit] = queryKey;
      const c = await getContributions(
        slug as string,
        eventId as string,
        pageParam,
        limit as number,
      );
      setPage(pageParam);
      if (page === 1) {
        setLastPage(c.totalPages);
      }
      return c;
    },
    getNextPageParam: (_, pages) => pages.length + 1,
    refetchOnWindowFocus: false,
    initialPageParam: 1,
  });

  const _contribs = contribsQuery.data?.pages?.flatMap((page) => page.data);
  console.log(page);
  const topContributorsQuery = useQuery({
    queryKey: ['topContribs', slug, event?.eventId, 1, 10],
    queryFn: async ({ queryKey }) => {
      const [_key, slug, eventId, page, limit] = queryKey;
      console.log(event, page, limit);
      const c = await getTopEarner(slug as string, eventId as string);
      console.log('c - ', c);
      return c;
    },
    refetchOnWindowFocus: false,
  });
  console.log('contributors - ', contribsQuery.data);
  // const [contributors, setContributors] = useState<Contributors>();
  // console.log('contributors - ', contributors);
  // const loadMoreContributors = useCallback(async () => {
  //   const next = page + 1
  //   const cntribs = await getContributions(slug, event!.eventId, next, 10)
  //   if (cntribs.data?.length) {
  //     setPage(next)
  //     setContributors((prev) => [
  //       ...(prev?.length ? prev : []),
  //       ...cntribs.data,
  //     ])
  //   }
  // }, [event, page, slug])

  useEffect(() => {
    if (inView && page < lastPage!) {
      contribsQuery.fetchNextPage();
    }
  }, [contribsQuery, inView, lastPage, page]);
  return (
    <TabLayout>
      <div className="border border-red-500">
        <div className="flex flex-col">
          <Text className="h6" color="primary">
            Contributors
          </Text>
          <div className="flex flex-row gap-4">
            <Table>
              <TableHeader>
                <TableRow className="text-white">
                  <TableHead>User</TableHead>
                  <TableHead>Amount Contributed</TableHead>
                  <TableHead>Contributed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contribsQuery.isSuccess &&
                  _contribs?.map((contribution, idx) => {
                    const token = TokenList.find(
                      (token) => token.address === contribution.token,
                    );
                    const isImageDelivery = isUrlFromDomain(
                      token!.logoURI,
                      'imagedelivery.net',
                    );
                    return (
                      <TableRow key={idx}>
                        <TableCell>
                          <AvatarLabelGroup
                            avatarSrc={contribution.user.profilePicture}
                            shape="circle"
                            title={`@${contribution.user.username}`}
                            size="sm"
                            // description={contribution.user.mainWallet.slice(0, 6) + '...' + contribution.user.mainWallet.slice(-4)}
                          />
                        </TableCell>
                        <TableCell>
                          <AvatarLabelGroup
                            avatarSrc={
                              isImageDelivery
                                ? token!.logoURI
                                : 'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/81d956af-6d69-4346-3ef3-feb755f92a00/public'
                            }
                            shape="circle"
                            title={`${contribution.totalAmount} ${token?.name}`}
                            size="sm"
                            description={`$${contribution.totalUsdAmount}`}
                          />
                        </TableCell>
                        <TableCell>
                          <Text color="primary" className="h-8">
                            {dayjs(contribution.createdAt).fromNow()}
                          </Text>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <div className="flex max-w-md flex-col">
              <Text color="primary">Top Contributors</Text>
              <Table>
                <TableBody>
                  {topContributorsQuery.isSuccess ? (
                    topContributorsQuery.data?.map((contribution, idx) => {
                      return (
                        <TableRow key={idx}>
                          <TableCell className="text-white">
                            {idx + 1}
                          </TableCell>
                          <TableCell>
                            <AvatarLabelGroup
                              avatarSrc={contribution.user!.profilePicture}
                              shape="circle"
                              title={`@${contribution.user!.username}`}
                              size="sm"
                              description={
                                contribution.user!.mainWallet.slice(0, 6) +
                                '...' +
                                contribution.user!.mainWallet.slice(-4)
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <Text color="primary" className="h-8">
                              ${contribution.totalUsdAmount}
                            </Text>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <Text color="primary">Loading</Text>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </TabLayout>
  );
};
