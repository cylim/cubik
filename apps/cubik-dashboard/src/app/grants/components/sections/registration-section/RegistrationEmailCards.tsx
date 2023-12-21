'use client';

import React from 'react';

import { RegistrationsCard } from '@cubik/ui';
import { useToggle } from '@cubik/ui/hooks/index';

export const RegistrationEmailCards = () => {
  const acceptedCardOpen = useToggle(false);
  const rejectedCardOpen = useToggle(false);
  const pendingCardOpen = useToggle(false);
  return (
    <div className="flex flex-wrap items-start justify-center gap-7 md:flex-nowrap">
      <RegistrationsCard
        subText="All the projects which are accepted into the have been sent a custom email."
        open={acceptedCardOpen[0]}
        text="Accepted"
        toggle={acceptedCardOpen[1]}
      />
      <RegistrationsCard
        subText="All the projects which are accepted into the have been sent a custom email."
        open={rejectedCardOpen[0]}
        text="Rejected"
        toggle={rejectedCardOpen[1]}
      />
      <RegistrationsCard
        subText="All the projects which are accepted into the have been sent a custom email."
        open={pendingCardOpen[0]}
        text="Pending"
        toggle={pendingCardOpen[1]}
      />
    </div>
  );
};
