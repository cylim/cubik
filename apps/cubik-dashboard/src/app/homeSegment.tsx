'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

export const GrantsSegmentControlSwitch = () => {
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
          isActive={true}
          onClick={() => {
            router.push(`${path}time=1W`, {
              scroll: false,
            });
          }}
        >
          All Events
        </SegmentItem>
        <SegmentItem
          isActive={false}
          onClick={() => {
            router.push(`${path}time=2W`, { scroll: false });
          }}
        >
          Grants
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
