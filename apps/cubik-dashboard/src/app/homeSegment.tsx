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
        <SegmentItem isActive={true} href={`${path}time=1W`}>
          All Events
        </SegmentItem>
        <SegmentItem isActive={false} href={`${path}time=2W`}>
          Grants
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
