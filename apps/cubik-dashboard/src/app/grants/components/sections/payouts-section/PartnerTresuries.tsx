import React from 'react';
import {
  TransactionsCard,
  TransactionsCardBalance,
  TransactionsCardHeader,
  TransactionSection,
} from '@/app/grants/components/transaction-card/TransactionsCard';

import { SubHead } from '@cubik/ui';

const PartnerTresuries = () => {
  return (
    <div>
      <div className="py-11">
        <SubHead heading="Partner Treasuries" />
      </div>
      <TransactionsCard>
        <TransactionsCardHeader />
        <TransactionsCardBalance />
        <TransactionSection />
      </TransactionsCard>
    </div>
  );
};

export default PartnerTresuries;
