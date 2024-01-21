import React from 'react';

import { Button } from '@cubik/ui';

export const ProjectDrawerFooter = () => {
  const acceptProject = () => {};
  const rejectProject = () => {};
  return (
    <div className="absolute bottom-0 flex w-full gap-6 bg-[var(--color-surface-primary-base)] px-9 py-7">
      <Button onClick={rejectProject} variant={'danger'} className="w-full">
        Decline
      </Button>
      <Button onClick={acceptProject} variant={'success'} className="w-full">
        Accept
      </Button>
    </div>
  );
};
