'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SegmentContainer, SegmentItems } from '@cubik/ui';

export const SegmentSwitch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  return (
    <SegmentContainer size="l2">
      <SegmentItems
        isActive={
          searchParams.get('section') === 'projects' ||
          !searchParams.get('section')
        }
        onClick={() =>
          router.push(`${pathname}?section=projects`, {
            scroll: false,
          })
        }
      >
        Projects
      </SegmentItems>
      <SegmentItems
        isActive={searchParams.get('section') === 'contributors'}
        onClick={() =>
          router.push(`${pathname}?section=contributors`, {
            scroll: false,
          })
        }
      >
        Contributors
      </SegmentItems>
    </SegmentContainer>
  );
};
