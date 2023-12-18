import React from 'react';
import { cookies } from 'next/headers';
import { ProjectTable } from '@/app/grants/components/sections/details-section/project-segment/projectTable';

import { LineGraph } from '@cubik/ui';

interface Props {
  searchParams: { [key in string]: string };
}
export const ProjectSegment = ({ searchParams }: Props) => {
  const event_id = cookies().get('access-scope');
  const theme = 'light';
  return (
    <>
      <LineGraph
        theme={theme}
        color={['#1199FF', '#F4D03F', '#F43F5E']}
        chartData={[
          {
            name: 'Series 1',
            type: 'area',
            data: [
              [1680307200000, 172],
              [1680393600000, 47],
              [1680480000000, 117],
              [1680566400000, 192],
              [1680652800000, 323],
              [1680739200000, 251],
              [1680825600000, 195],
              [1680912000000, 359],
              [1680998400000, 9],
              [1681084800000, 211],
              [1681171200000, 277],
              [1681257600000, 242],
              [1681344000000, 292],
              [1681430400000, 87],
              [1681516800000, 70],
            ],
          },
          {
            name: 'Series 3',
            type: 'area',
            data: [
              [1680307200000, 9],
              [1680393600000, 148],
              [1680480000000, 115],
              [1680566400000, 197],
              [1680652800000, 79],
              [1680739200000, 175],
              [1680825600000, 192],
              [1680912000000, 82],
              [1680998400000, 99],
              [1681084800000, 177],
              [1681171200000, 29],
              [1681257600000, 147],
              [1681344000000, 147],
              [1681430400000, 142],
              [1681516800000, 167],
            ],
          },
        ]}
      />
      <ProjectTable
        searchParams={searchParams}
        eventId={event_id?.value || ' '}
      />
    </>
  );
};
