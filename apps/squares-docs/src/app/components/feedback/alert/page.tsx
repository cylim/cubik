'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';

import { Alert } from '@cubik/ui';

const AlertPage = () => {
  return (
    <>
      <PageHOC
        pages={[
          { name: 'Component', href: '/components', current: false },
          { name: 'Alert', href: '/component/alert', current: true },
        ]}
        heading={'Alert'}
        description={
          'Use the alert component to display important messages to users.'
        }
      >
        <div className="border-[var(--color-border-primary) overflow-hidden rounded-[8px] border bg-[var(--white)] px-6 py-4">
          <CodeComponent codeString='import { Progress } from "@cubik/ui"' />
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <Alert
            type="inline"
            iconName="spinner"
            color="purple"
            content="alert content"
            closeIcon
            className="w-[26.75rem]"
          />
          <Alert
            type={'border'}
            iconName="doubleTick"
            color="green"
            content="alert content"
            closeIcon
            className="w-[26.75rem]"
          />
          <Alert
            type="text"
            iconName="alertInfoCircle"
            color="blue"
            content="alert content"
            closeIcon
            className="w-[26.75rem]"
          />
          <Alert
            type={'border'}
            iconName="infoTriangle"
            color="yellow"
            content="You have Grant Manger Role. You can view all the grant details and manage the grant round."
            closeIcon
            className="w-[26.75rem]"
          />
          <Alert
            type={'border'}
            iconName="danger"
            color="red"
            content="You have Grant Manger Role. You can view all the grant details and manage the grant round."
            closeIcon
            className="w-[26.75rem]"
          />
        </div>
      </PageHOC>
    </>
  );
};

export default AlertPage;
