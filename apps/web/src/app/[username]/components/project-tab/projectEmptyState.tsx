import React from 'react';

import { Button, EmptyState } from '@cubik/ui';

export const AdminProjectEmptyState = () => {
  return (
    <EmptyState
      title={'Your Project Awaits!'}
      description={
        'Share your vision and get the support you need. Create a project and connect with people ready to back you up'
      }
      icon={'cloudError'}
    >
      <Button
        className="w-full md:w-fit"
        variant="outline"
        rightIconName="plus"
      >
        Create a Project
      </Button>
    </EmptyState>
  );
};