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
          <p className="text-2xl">l3 - primary</p>
          <Text as="l3" color="primary" variant="heavy">Label Text</Text>
          <Text as="l3" color="primary">Label Text</Text>
          <Text as="l3" color="primary" variant="light">Label Text</Text>
        </div>
        <div className="mt-10">
          <p className="text-2xl">l3 - primary</p>
          <Text as="l2" color="primary" variant="heavy">Label Text</Text>
          <Text as="l2" color="primary">Label Text</Text>
          <Text as="l2" color="primary" variant="light">Label Text</Text>
        </div>
        <div className="mt-10">
          <p className="text-2xl">l1 - primary</p>
          <Text as="l1" color="primary" variant="heavy">Label Text</Text>
          <Text as="l1" color="primary">Label Text</Text>
          <Text as="l1" color="primary" variant="light">Label Text</Text>
        </div>
        <div className="mt-10">
          <p className="text-2xl">b4 - primary</p>
          <Text as="b4" color="primary" variant="heavy">Label Text</Text>
          <Text as="b4" color="primary">Label Text</Text>
          <Text as="b4" color="primary" variant="light">Label Text</Text>
        </div>
        <div className="mt-10">
          <p className="text-2xl">b3 - primary</p>
          <Text as="b3" color="primary" variant="heavy">Label Text</Text>
          <Text as="b3" color="primary">Label Text</Text>
          <Text as="b3" color="primary" variant="light">Label Text</Text>
        </div>
        <div className="mt-10">
          <p className="text-2xl">b2 - primary</p>
          <Text as="b2" color="primary" variant="heavy">Label Text</Text>
          <Text as="b2" color="primary">Label Text</Text>
          <Text as="b2" color="primary" variant="light">Label Text</Text>
        </div>
        <div className="mt-10">
          <p className="text-2xl">b1 - primary</p>
          <Text as="b1" color="primary" variant="heavy">Label Text</Text>
          <Text as="b1" color="primary">Label Text</Text>
          <Text as="b1" color="primary" variant="light">Label Text</Text>
        </div>
        <div className="mt-10">
          <p className="text-2xl">h6 - primary</p>
          <Text as="h6" color="primary" variant="heavy">Label Text</Text>
          <Text as="h6" color="primary">Label Text</Text>
          <Text as="h6" color="primary" variant="light">Label Text</Text>
        </div>{' '}
        <div className="mt-10">
          <p className="text-2xl">h5 - primary</p>
          <Text as="h5" color="primary" variant="heavy">Label Text</Text>
          <Text as="h5" color="primary">Label Text</Text>
          <Text as="h5" color="primary" variant="light">Label Text</Text>
        </div>{' '}
        <div className="mt-10">
          <p className="text-2xl">h4 - primary</p>
          <Text as="h4" color="primary" variant="heavy">Label Text</Text>
          <Text as="h4" color="primary">Label Text</Text>
          <Text as="h4" color="primary" variant="light">Label Text</Text>
        </div>{' '}
        <div className="mt-10">
          <p className="text-2xl">h3 - primary</p>
          <Text as="h3" color="primary" variant="heavy">Label Text</Text>
          <Text as="h3" color="primary">Label Text</Text>
          <Text as="h3" color="primary" variant="light">Label Text</Text>
        </div>{' '}
        <div className="mt-10">
          <p className="text-2xl">h2 - primary</p>
          <Text as="h2" color="primary" variant="heavy">Label Text</Text>
          <Text as="h2" color="primary">Label Text</Text>
          <Text as="h2" color="primary" variant="light">Label Text</Text>
        </div>{' '}
        <div className="mt-10">
          <p className="text-2xl">h1 - primary</p>
          <Text as="h1" color="primary" variant="heavy">Label Text</Text>
          <Text as="h1" color="secondary" variant="heavy" className='h1-primary-light'>Label Text</Text>
          <Text as="h1" color="primary">Label Text</Text>
          <Text as="h1" color="primary" variant="light">Label Text</Text>
        </div>
      </div>
    </PageHOC>
  );
};

export default TextPage;
