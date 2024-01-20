import React from 'react';
import { cookies } from 'next/headers';
import {
  TransactionsCard,
  TransactionsCardBalance,
  TransactionsCardHeader,
  TransactionSection,
} from '@/app/grants/components/transaction-card/TransactionsCard';
import { IsUserLoginServer } from '@/utils/helpers/isUserLogin';

import { prisma } from '@cubik/database';
import { SubHead } from '@cubik/ui';

const getSponsorInfo = async () => {
  try {
    const token = cookies().get('authToken');
    const user = token && (await IsUserLoginServer(token.value));
    if (!token || !user) {
      return [];
    }
    const event_id = cookies().get('access-scope');

    return await prisma.sponsor.findFirst({
      where: {
        id: 'e430ac3a-e7c6-4487-b75d-0dbd00256c40',
        isArchive: false,
      },
      select: {
        id: true,
        name: true,
        logo: true,
        type: true,
        User: true,
        team: true,
        treasuryAssets: true,
      },
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};

const PartnerTresuries = async () => {
  const sponsorInfo = await getSponsorInfo();
  console.log('getSponsorInfo', sponsorInfo);

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
