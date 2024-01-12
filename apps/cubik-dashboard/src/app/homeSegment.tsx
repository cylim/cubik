'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

interface Props {
  event: string | undefined;
}
export const GrantsSegmentControlSwitch = ({ event }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  let path = pathname;

  return (
    <div className="flex flex-row gap-4">
      <SegmentContainer size="sm">
        <SegmentItem
          isActive={!event || event === 'all'}
          onClick={() => {
            router.push(`${path}?event=all`);
          }}
        >
          All Events
        </SegmentItem>
        <SegmentItem
          isActive={event === 'grants'}
          href={`${path}?event=grants`}
        >
          Grants
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
