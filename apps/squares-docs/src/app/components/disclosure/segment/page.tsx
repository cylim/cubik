'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';

import { SegmentContainer, SegmentItem, Text } from '@cubik/ui';
import PageHOC from '../../../home-page-components/components/pageHOC';

const page = () => {

  return (
    <PageHOC
      pages={[
        { name: 'Component', href: '/components', current: false },
        { name: 'Segment Control', href: '/component/segment', current: true },
      ]}
      heading={'Segment Control'}
      description={
        'Segment Control'
      }
    >
      <div className="">
        <CodeComponent codeString="import { SegmentContainer, SegmentItem } from '@cubik/ui'" />
        <div className="mt-12">
          <Text className="text-xs">Default</Text>
          <SegmentContainer size='sm'>
            <SegmentItem>
              TabItem1
            </SegmentItem>
            <SegmentItem>
              TabItem2
            </SegmentItem>
          </SegmentContainer>
        </div>
        <div className="mt-12">
          <Text className="text-xs">Link</Text>
          <SegmentContainer size='sm'>
            <SegmentItem href='/ok'>
              TabItem1 (Link)
            </SegmentItem>
            <SegmentItem>
              TabItem2
            </SegmentItem>
          </SegmentContainer>
        </div>
      </div>
    </PageHOC>
  );
};

export default page;
