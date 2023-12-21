import React from 'react';
import { RegistrationEmailCards } from '@/app/grants/components/sections/registration-section/RegistrationEmailCards';
import { RegistrationTableHeader } from '@/app/grants/components/sections/registration-section/RegistrationTableHeader';

import { Button, SubHead } from '@cubik/ui';

export const RegistrationsSection = () => {
  const segments = [
    { color: 'bg-[var(--color-fg-positive-base)]', width: 10 },
    { color: 'bg-[var(--color-bg-negative-base)]', width: 10 },
    { color: 'bg-[var(--color-blue-400)]', width: 10 },
  ];
  return (
    <div>
      <div className="flex items-center justify-between pb-11 pt-16">
        {/* todo:- Need to fix mobile ui */}
        <SubHead heading="Registrations Overview" />
        <div className="flex items-center justify-center gap-5">
          <Button variant={'outline'} size={'md'}>
            Edit Capacity
          </Button>
          <Button variant={'danger'} size={'md'}>
            Close Registrations
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex h-6 w-full overflow-hidden rounded-lg bg-[var(--color-surface-tertiary)]">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={`h-full ${segment.color}`}
              style={{ width: `${segment.width}%` }}
            ></div>
          ))}
        </div>
      </div>
      <RegistrationEmailCards />
      <RegistrationTableHeader />
    </div>
  );
};
