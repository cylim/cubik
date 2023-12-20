import React from 'react';

import { Button, RegistrationsCard, SubHead } from '@cubik/ui';

export const RegistrationsSection = () => {
  const segments = [
    { color: 'bg-surface-orange-500', width: 10 },
    { color: 'bg-surface-blue-400', width: 10 },
    { color: 'bg-surface-red-600', width: 10 },
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
      <div className="flex flex-wrap items-start justify-center gap-7 md:flex-nowrap">
        <RegistrationsCard
          subText="All the projects which are accepted into the have been sent a custom email."
          open={true}
          text="Accepted"
        />
        <RegistrationsCard
          subText="All the projects which are accepted into the have been sent a custom email."
          open={false}
          text="Rejected"
        />
        <RegistrationsCard
          subText="All the projects which are accepted into the have been sent a custom email."
          open={false}
          text="Pending"
        />
      </div>
    </div>
  );
};
