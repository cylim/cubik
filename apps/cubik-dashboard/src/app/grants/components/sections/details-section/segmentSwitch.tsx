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
        <SegmentItems isActive={false} onClick={() => {}}>
          1W
        </SegmentItems>
        <SegmentItems isActive={true} onClick={() => {}}>
          2W
        </SegmentItems>
        <SegmentItems isActive={false} onClick={() => {}}>
          1M
        </SegmentItems>
        <SegmentItems isActive={false} onClick={() => {}}>
          2M
        </SegmentItems>
      </SegmentContainer>
    </div>
  );
};
