'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';

import { Tag, TagAvatar, TagIcon, TagLabel, TagRightIcon } from '@cubik/ui';

import PageHOC from '../../../home-page-components/components/pageHOC';

const Tags = () => {
  return (
    <PageHOC
      pages={[
        { name: 'Component', href: '/components', current: false },
        { name: 'Tags', href: '/component/tags', current: true },
      ]}
      heading={'Tags'}
      description={
        'Use the label component to add contextual metadata to a design.'
      }
    >
      <div>
        <div>
          <CodeComponent codeString='import { Tag } from "@cubik/ui' />
        </div>
        <div className="mt-10">
          <Tag color="green" variant="solid" size="desktop" border={false}>
            <TagIcon iconName={'plus'} />
            <TagAvatar
              src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
              alt="avatar image"
            />
            <TagLabel>Hello World</TagLabel>
            <TagRightIcon iconName={'cross'} />
          </Tag>
        </div>

        <div className="mt-10">
          <Tag color="green" variant="solid" size="tablet" border={false}>
            <TagIcon iconName={'plus'} />
            <TagAvatar
              src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
              alt="avatar image"
            />
            <TagLabel>Hello World</TagLabel>
            <TagRightIcon iconName={'cross'} />
          </Tag>
        </div>

        <div className="mt-10">
          <Tag color="default" variant="solid" size="mobile" border={false}>
            <TagIcon iconName={'plus'} />
            <TagAvatar
              src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
              alt="avatar image"
            />
            <TagLabel>Hello World</TagLabel>
            <TagRightIcon iconName={'cross'} />
          </Tag>
        </div>
      </div>
    </PageHOC>
  );
};

export default Tags;
