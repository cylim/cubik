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
              href={`${pathname}?section=pending`}
            >
              Pending
            </SegmentItem>
            <SegmentItem
              isActive={section === 'rejected'}
              href={`${pathname}?section=rejected`}
            >
              Rejected
            </SegmentItem>
            <SegmentItem
              isActive={section === 'accepted'}
              href={`${pathname}?section=accepted`}
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
