'use client';

import React from 'react';
import Link from 'next/link';
import { EmptyStateHOC } from '@/app/components/common/empty-state/EmptyStateHOC';
import { Spinner } from '@/utils/chakra';

import { Button } from '@cubik/ui';

import { ContributionTable } from './ContributionTable';
import type { ContributionRowType } from './index';

interface Props {
  contributions: ContributionRowType[];
  isLoading: boolean;
}

export const Contributions = ({ contributions, isLoading }: Props) => {
  if (isLoading && !contributions) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (contributions?.length === 0) {
    return (
      <div className="flex w-full items-center justify-center rounded-xl border border-dashed border-neutral-300">
        <EmptyStateHOC
          heading={'No Contributions Yet'}
          subHeading={
            'This project hasn`t received any contributions yet. Be the first to support this project!'
          }
          CTA={
            <Link href="/projects">
              <Button variant={'primary'}>Make a contribution</Button>
            </Link>
          }
        />
      </div>
    );
  }
  return <ContributionTable contribution={contributions ?? []} />;
};
