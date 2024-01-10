'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidV4 } from 'uuid';

import { Button } from '@cubik/ui';

export const SelectionSection = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 md:flex-row">
      <div className="flex h-72 w-full items-center justify-center rounded-lg bg-[var(--card-bg-primary)] md:w-[25rem]">
        <Button
          variant={'primary'}
          onClick={() => {
            const id = uuidV4();
            localStorage.setItem('latest-draft-project', id);
            router.replace(`/create/project?id=${id}`, { scroll: false });
          }}
        >
          Create New
        </Button>
      </div>
      <div className="flex h-72 w-full items-center justify-center rounded-lg bg-[var(--card-bg-primary)] md:w-[25rem]">
        <Button
          disabled={localStorage.getItem('latest-draft-project') ? false : true}
          variant={'primary'}
          onClick={() => {
            router.replace(
              `/create/project?id=${localStorage.getItem(
                'latest-draft-project',
              )}`,
              { scroll: false },
            );
          }}
        >
          Load Latest Save
        </Button>
      </div>
    </div>
  );
};
