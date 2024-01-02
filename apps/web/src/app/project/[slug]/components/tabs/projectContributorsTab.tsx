"use client";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'
import TabLayout from '@/components/common/tabs/TabLayout';
import { AvatarLabelGroup, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@cubik/ui';
import { Text } from '@cubik/ui';
import { TokenList } from '@cubik/common';
import { formatDistanceToNow } from 'date-fns';
import { getContributions, getTopEarner } from "@/app/project/[slug]/actions";
import { useProjectEventStore } from "@/app/project/[slug]/store";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";


function isUrlFromDomain(url: string, domain: string): boolean {
  // Create a regular expression pattern to match the domain
  const domainPattern = new RegExp(`^https?://${domain.replace('.', '\\.')}`, 'i');

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
    queryKey: ["contribs", slug, event?.eventId, 1, 10], queryFn: async ({ queryKey, pageParam = 1 }) => {
      const [_key, slug, eventId, page, limit] = queryKey;
      // console.log(event, page, limit);
      const c = await getContributions(slug as string, eventId as string, pageParam, limit as number);
      setPage(pageParam);
      if (page === 1) {
        setLastPage(c.totalPages);
      }
      return c;
    },
    getNextPageParam: (_, pages) => pages.length + 1,
    refetchOnWindowFocus: false,
  })

  const _contribs = contribsQuery.data?.pages?.flatMap((page) => page.data)
  console.log(page);
  const topContributorsQuery = useQuery({
    queryKey: ["topContribs", slug, event?.eventId, 1, 10], queryFn: async ({ queryKey }) => {
      const [_key, slug, eventId, page, limit] = queryKey;
      console.log(event, page, limit);
      const c = await getTopEarner(slug as string, eventId as string);
      console.log('c - ', c);
      return c;
    }, refetchOnWindowFocus: false,
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
  }, [contribsQuery, inView, lastPage, page])
  return (
    <TabLayout>
      <div>
        <div className="flex flex-col">
          <Text className="h6" color="primary">
            Contributors
          </Text>
          <div className="flex flex-row gap-4">
            <Table>
              <TableHeader>
                <TableRow className='text-white'>
                  <TableHead>User</TableHead>
                  <TableHead>Amount Contributed</TableHead>
                  <TableHead>Contributed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contribsQuery.isSuccess && _contribs?.map((contribution, idx) => {
                  const token = TokenList.find((token) => token.address === contribution.token);
                  const isImageDelivery = isUrlFromDomain(token!.logoURI, 'imagedelivery.net');
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
                          avatarSrc={isImageDelivery ? token!.logoURI : "https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/81d956af-6d69-4346-3ef3-feb755f92a00/public"}
                          shape="circle"
                          title={`${contribution.totalAmount} ${token?.name}`}
                          size="sm"
                          description={`$${contribution.totalUsdAmount}`}
                        />
                      </TableCell>
                      <TableCell>
                        <Text color='primary' className='h-8'>
                          {formatDistanceToNow(contribution.createdAt)} ago
                        </Text>
                      </TableCell>
                    </TableRow>
                  )
                })}
                <div
                  ref={ref}
                  hidden={page === lastPage}
                  className='col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4'
                >
                  <svg
                    aria-hidden='true'
                    className='h-10 w-10 animate-spin fill-sky-600 text-gray-200 dark:text-gray-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                  <span className='sr-only'>Loading...</span>
                </div>
              </TableBody>
            </Table>
            <div className="flex max-w-md flex-col">
              <Text color='primary'>Top Contributors</Text>
              <Table>
                <TableBody>
                  {topContributorsQuery.isSuccess ? topContributorsQuery.data?.map((contribution, idx) => {
                    return (
                      <TableRow key={idx}>
                        <TableCell className="text-white">{idx + 1}</TableCell>
                        <TableCell>
                          <AvatarLabelGroup
                            avatarSrc={contribution.user!.profilePicture}
                            shape="circle"
                            title={`@${contribution.user!.username}`}
                            size="sm"
                            description={contribution.user!.mainWallet.slice(0, 6) + '...' + contribution.user!.mainWallet.slice(-4)}
                          />
                        </TableCell>
                        <TableCell>
                          <Text color='primary' className='h-8'>
                            ${contribution.totalUsdAmount}
                          </Text>
                        </TableCell>
                      </TableRow>
                    )
                  }) : <Text color="primary">Loading</Text>}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </TabLayout>
  );
};
