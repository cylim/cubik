'use client';

import React, { useState } from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import DocsTabsHOC from '@/app/home-page-components/components/Tabs';

import { SegmentContainer, SegmentItem, Text } from '@cubik/ui';

import PageHOC from '../../../home-page-components/components/pageHOC';

const Page = () => {
  const [firstSegment, setFirstSegment] = useState(1);
  return (
    <PageHOC
      pages={[
        { name: 'Component', href: '/components', current: false },
        { name: 'Segment Control', href: '/component/segment', current: true },
      ]}
      heading={'Segment Control'}
      description={'Segment Control'}
    >
      <DocsTabsHOC>
        <div className="py-12">
          <div className="flex min-h-[14rem] items-center justify-center gap-10 rounded-lg border bg-[var(--color-surface-primary-base)]">
            <div className="max-w-[50rem]">
              <SegmentContainer size="md">
                <SegmentItem
                  isActive={firstSegment === 1}
                  onClick={() => setFirstSegment(1)}
                >
                  Segment Item 1
                </SegmentItem>
                <SegmentItem
                  isActive={firstSegment === 2}
                  onClick={() => setFirstSegment(2)}
                >
                  Segment Item 2
                </SegmentItem>
                <SegmentItem
                  isActive={firstSegment === 3}
                  onClick={() => setFirstSegment(3)}
                >
                  Segment Item 3
                </SegmentItem>
                <SegmentItem
                  isActive={firstSegment === 4}
                  onClick={() => setFirstSegment(4)}
                >
                  Segment Item 4
                </SegmentItem>
                <SegmentItem
                  isActive={firstSegment === 5}
                  onClick={() => setFirstSegment(5)}
                >
                  Segment Item 5
                </SegmentItem>
              </SegmentContainer>
            </div>
          </div>
        </div>
        <></>
      </DocsTabsHOC>
    </PageHOC>
  );
};

export default Page;
