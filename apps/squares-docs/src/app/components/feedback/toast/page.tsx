'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';

import { Alert, Button, Spinner, toast } from '@cubik/ui';

const AlertPage = () => {
  const promise = () => {
    try {
      new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sonner' }), 2000),
      );
      return true;
    } catch (error) {
      return null;
    }
  };

  return (
    <>
      <PageHOC
        pages={[
          { name: 'Component', href: '/components', current: false },
          { name: 'Toast', href: '/component/toast', current: true },
        ]}
        heading={'Toast'}
        description={
          'Use the alert component to display important messages to users.'
        }
      >
        <div className="border-[var(--color-border-primary) overflow-hidden rounded-[8px] border bg-[var(--white)] px-6 py-4">
          <CodeComponent codeString='import { Progress } from "@cubik/ui"' />
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex gap-2 flex-col-gap-4">
            <Button
              onClick={() => {
                toast.promise(
                  new Promise(async () => {
                    const a = promise();
                    if (!a) {
                      throw new Error('Error');
                    }
                    return a;
                  }),
                  {
                    loading: 'Signing Transaction',
                    success: (data) => {
                      return `${data.name} toast has been added`;
                    },
                    error: 'Error',
                    icon: <Spinner />,
                    action: {
                      label: 'View transaction',
                      onClick: () => console.log('View Transaction'),
                    },
                  },
                );
              }}
            >
              Promise
            </Button>
            <Button
              onClick={() => {
                toast.info('Be at the area 10 minutes before the event time');
              }}
            >
              Info
            </Button>
            <Button
              onClick={() => {
                toast.warning('Event start time cannot be earlier than 8am');
              }}
            >
              Warning
            </Button>
            <Button
              variant={'success'}
              onClick={() => {
                toast.success('Event has been created');
              }}
            >
              Warning
            </Button>
            <Button
              variant={'danger'}
              onClick={() => {
                toast.error('Error', {
                  description: 'Event has been created',
                });
              }}
            >
              Error
            </Button>
          </div>
        </div>
      </PageHOC>
    </>
  );
};

export default AlertPage;
