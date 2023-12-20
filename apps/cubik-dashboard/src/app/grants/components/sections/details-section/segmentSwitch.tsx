'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SegmentContainer, SegmentItems } from '@cubik/ui';

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
        <SegmentItems
          isActive={
            !searchParams.get(urlKey) ? true : searchParams.get(urlKey) === '1W'
          }
          onClick={() => {
            router.push(`${path}${urlKey}=1W`, {
              scroll: false,
            });
          }}
        >
          1W
        </SegmentItems>
        <SegmentItems
          isActive={searchParams.get(urlKey) === '2W'}
          onClick={() => {
            router.push(`${path}${urlKey}=2W`, { scroll: false });
          }}
        >
          2W
        </SegmentItems>
        <SegmentItems
          isActive={searchParams.get(urlKey) === '1M'}
          onClick={() => {
            router.push(`${path}${urlKey}=1M`, { scroll: false });
          }}
        >
          1M
        </SegmentItems>
        <SegmentItems
          isActive={searchParams.get(urlKey) === '2M'}
          onClick={() => {
            router.push(`${path}${urlKey}=2M`, { scroll: false });
          }}
        >
          2M
        </SegmentItems>
      </SegmentContainer>
    </div>
  );
};
