'use client';

import React from 'react';
import { useCreateProject } from '@/hooks/useCreateProject';

import { Button } from '@cubik/ui';

export const CreateProjectButton = () => {
  const { onOpen } = useCreateProject();
  return (
    <Button onClick={onOpen} rightIconName="plus" variant={'primary'}>
      Create Project
    </Button>
  );
};
