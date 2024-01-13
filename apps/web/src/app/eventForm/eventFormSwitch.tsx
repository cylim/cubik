'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SegmentContainer, SegmentItem } from '@cubik/ui';

interface Props {
  event: string | undefined;
}
export const EventFormSwitch = ({ event }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  let path = pathname;

  return (
    <div className="flex flex-row gap-4">
      <SegmentContainer size="sm">
        <SegmentItem
          isActive={!event || event === 'funding'}
          onClick={() => {
            router.push(`${path}?event=funding`);
          }}
        >
          Quadratic Funding Round
        </SegmentItem>
        <SegmentItem
        // isActive={event === 'grants'}
        // href={`${path}?event=grants`}
        >
          RPGF
        </SegmentItem>
        <SegmentItem
        // isActive={event === 'grants'}
        // href={`${path}?event=grants`}
        >
          Hackathon
        </SegmentItem>
      </SegmentContainer>
    </div>
  );
};
