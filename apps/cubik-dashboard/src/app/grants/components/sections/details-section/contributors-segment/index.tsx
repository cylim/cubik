import React from 'react';
import { cookies } from 'next/headers';
import { ContributorsTable } from '@/app/grants/components/sections/details-section/contributors-segment/contributorsTable';

interface Props {
  searchParams: { [key in string]: string };
}
export const ContributionSegment = ({ searchParams }: Props) => {
  const event_id = cookies().get('access-scope');
  return (
    <>
      <ContributorsTable
        searchParams={searchParams}
        eventId={event_id?.value || ' '}
      />
    </>
  );
};
