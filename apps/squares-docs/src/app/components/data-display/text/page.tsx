'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';

import { Tag, Text } from '@cubik/ui';

import PageHOC from '../../../home-page-components/components/pageHOC';

const TextPage = () => {
  return (
    <PageHOC
      pages={[
        { name: 'Component', href: '/component', current: false },
        { name: 'Text', href: '/component/text', current: true },
      ]}
      heading={'Text'}
      description={
        'Use the label component to add contextual metadata to a design.'
      }
    >
      <div>
        <div>
          <CodeComponent codeString='import { Tag } from "@cubik/ui' />
        </div>
        <div className="mt-10">
          <p className="text-2xl">b1 - primary</p>
          <Text color="primary" className="b1-heavy">
            Label Text
          </Text>
          <Text color="primary" className="b1">
            Label Text
          </Text>
          <Text color="primary" className="b1-light">
            Label Text
          </Text>
        </div>
        <div className="mt-10">
          <p className="text-2xl">h1 - primary</p>
          <Text color="primary" className="h1-heavy">
            Label Text
          </Text>
          <Text color="secondary" className="h1-heavy">
            Label Text
          </Text>
          <Text color="primary" className="h1">
            Label Text
          </Text>
          <Text color="primary" className="h1-light">
            Label Text
          </Text>
        </div>
      </div>
    </PageHOC>
  );
};

export default TextPage;
