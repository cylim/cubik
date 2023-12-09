import React from 'react';
import { cookies } from 'next/headers';
import { ProjectTable } from '@/app/grants/components/sections/details-section/project-segment/projectTable';

interface Props {
  searchParams: { [key in string]: string };
}
export const ProjectSegment = ({ searchParams }: Props) => {
  const event_id = cookies().get('access-scope');
  return (
    <>
      <ProjectTable
        searchParams={searchParams}
        eventId={event_id?.value || ' '}
      />
    </>
  );
};
