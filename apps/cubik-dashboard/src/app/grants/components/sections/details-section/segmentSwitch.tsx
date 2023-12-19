'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SegmentContainer, SegmentItems } from '@cubik/ui';

export const SegmentSwitch = () => {
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
            !searchParams.get('time') ? true : searchParams.get('time') === '1W'
          }
          onClick={() => {
            router.push(`${path}time=1W`, {
              scroll: false,
            });
          }}
        >
          1W
        </SegmentItems>
        <SegmentItems
          isActive={searchParams.get('time') === '2W'}
          onClick={() => {
            router.push(`${path}time=2W`, { scroll: false });
          }}
        >
          2W
        </SegmentItems>
        <SegmentItems
          isActive={searchParams.get('time') === '1M'}
          onClick={() => {
            router.push(`${path}time=1M`, { scroll: false });
          }}
        >
          1M
        </SegmentItems>
        <SegmentItems
          isActive={searchParams.get('time') === '2M'}
          onClick={() => {
            router.push(`${path}time=2M`, { scroll: false });
          }}
        >
          2M
        </SegmentItems>
      </SegmentContainer>
    </div>
  );
};
