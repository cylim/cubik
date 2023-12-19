'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SegmentContainer, SegmentItems } from '@cubik/ui';

export const SegmentSwitch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex flex-row gap-4">
      <SegmentContainer size="sm">
        <SegmentItems
          isActive={searchParams.get('time') === '1W'}
          onClick={() => {
            router.push(`${pathname}?time=1W`, {
              scroll: false,
            });
          }}
        >
          1W
        </SegmentItems>
        <SegmentItems
          isActive={searchParams.get('time') === '2W'}
          onClick={() => {
            router.push(`${pathname}?time=2W`, { scroll: false });
          }}
        >
          2W
        </SegmentItems>
        <SegmentItems
          isActive={searchParams.get('time') === '1M'}
          onClick={() => {
            router.push(`${pathname}?time=1M`, { scroll: false });
          }}
        >
          1M
        </SegmentItems>
        <SegmentItems
          isActive={searchParams.get('time') === '2M'}
          onClick={() => {
            router.push(`${pathname}?time=2M`, { scroll: false });
          }}
        >
          2M
        </SegmentItems>
      </SegmentContainer>
    </div>
  );
};
