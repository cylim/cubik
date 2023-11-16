import React from 'react';

import { SponsorMultisigCard } from './SponsorMultisigCard';

export const SponsorMultisig = () => {
  return (
    <>
      <div className="mt-10 flex flex-col gap-8">
        <SponsorMultisigCard />
        <SponsorMultisigCard />
        <SponsorMultisigCard />
        <SponsorMultisigCard />
        <SponsorMultisigCard />
        <SponsorMultisigCard />
        <SponsorMultisigCard />
      </div>
    </>
  );
};
