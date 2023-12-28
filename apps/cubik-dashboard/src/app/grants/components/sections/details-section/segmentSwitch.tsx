'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

interface Props {
  urlKey: string;
}
export const SegmentSwitch = ({ urlKey }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  let path = pathname;
  if (searchParams.get('project_page')) {
    path = `${path}?project_page=${searchParams.get('project_page')}&`;
  } else if (searchParams.get('contributors_page')) {
    path = `${path}?contributors_page=${searchParams.get(
      'contributors_page',
    )}&`;
  } else {
    path = `${path}?`;
  }
  return (
    <div className="flex flex-row gap-4">
      <SegmentContainer size="sm">
        <SegmentItem
          isActive={
            !searchParams.get(urlKey) ? true : searchParams.get(urlKey) === '1W'
          }
          href={`${path}${urlKey}=1W`}
        >
          1W
        </SegmentItem>
        <SegmentItem
          isActive={searchParams.get(urlKey) === '2W'}
          href={`${path}${urlKey}=2W`}
        >
          2W
        </SegmentItem>
        <SegmentItem
          isActive={searchParams.get(urlKey) === '1M'}
          href={`${path}${urlKey}=1M`}
        >
          1M
        </SegmentItem>
        <SegmentItem
          isActive={searchParams.get(urlKey) === '2M'}
          href={`${path}${urlKey}=2M`}
        >
          2M
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
