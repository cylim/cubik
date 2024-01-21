import React from 'react';
import { PartnerTreasuries } from '@/app/grants/components/sections/payouts-section/PartnerTreasuries';
import ProjectTransactions from '@/app/grants/components/sections/payouts-section/ProjectTransactions';

const PayoutsSection = () => {
  return (
    <div>
      <ProjectTransactions />
      <PartnerTreasuries />
    </div>
  );
};

export default PayoutsSection;
