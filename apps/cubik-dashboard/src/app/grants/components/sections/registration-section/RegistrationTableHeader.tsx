'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button, SegmentContainer, SegmentItem, SubHead } from '@cubik/ui';

export const RegistrationTableHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const section = searchParams.get('section');
  return (
    <div className="mb-11 mt-16 flex items-center justify-between">
      <SubHead heading="All Registrations" />
      <div className="flex items-center justify-center gap-5">
        <div>
          <SegmentContainer size="md">
            <SegmentItem
              isActive={section ? section === 'pending' : true}
              onClick={() =>
                router.push(`${pathname}?section=pending`, {
                  scroll: false,
                })
              }
            >
              Pending
            </SegmentItem>
            <SegmentItem
              isActive={section === 'rejected'}
              onClick={() =>
                router.push(`${pathname}?section=rejected`, { scroll: false })
              }
            >
              Rejected
            </SegmentItem>
            <SegmentItem
              isActive={section === 'accepted'}
              onClick={() =>
                router.push(`${pathname}?section=accepted`, { scroll: false })
              }
            >
              Accepted
            </SegmentItem>
          </SegmentContainer>
        </div>
        <Button rightIconName="download">Download List</Button>
      </div>
    </div>
  );
};
