import React from 'react';
import { cookies } from 'next/headers';
import { ProjectTable } from '@/app/grants/components/sections/details-section/project-segment/projectTable';

export const ProjectSegment = () => {
  const event_id = cookies().get('access-scope');
  return (
    <>
      <ProjectTable eventId={event_id?.value || ' '} />
    </>
  );
};
