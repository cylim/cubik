import React from 'react';

import PageHOC from '../../../home-page-components/components/pageHOC';

const page = () => {
  return (
    <PageHOC
      pages={[
        { name: 'Component', href: '/components', current: false },
        { name: 'Segment', href: '/component/segment', current: true },
      ]}
      heading={'Segment'}
      description={
        'Segment Control'
      }
    >
      <>
      </>
    </PageHOC>
  );
};

export default page;
