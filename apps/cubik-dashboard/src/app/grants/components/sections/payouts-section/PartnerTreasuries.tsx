import React from 'react';
import { cookies } from 'next/headers';
import {
  TransactionsCard,
  TransactionsCardBalance,
  TransactionsCardHeader,
  TransactionSection,
} from '@/app/grants/components/sections/payouts-section/transaction-card/TransactionsCard';
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

    if (!event_id?.value) {
      return [];
    }
    return await prisma.sponsor.findMany({
      where: {
        eventId: event_id?.value,
        isArchive: false,
      },
      select: {
        id: true,
        name: true,
        logo: true,
        type: true,
        totalCommitted: true,
        user: {
          select: {
            username: true,
            profilePicture: true,
          },
        },
        // team: true,
        treasuryAssets: {
          select: {
            tokenAddress: true,
            amount: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const PartnerTreasuries = async () => {
  const sponsors = await getSponsorInfo();

  return (
    <div>
      <div className="py-11">
        <SubHead heading="Partner Treasuries" />
      </div>
      <div className="flex flex-col gap-6">
        {sponsors.map((sponsor) => {
          return (
            <TransactionsCard key={sponsor.id}>
              <TransactionsCardHeader
                logo={sponsor.logo || ''}
                name={sponsor.name}
                username={sponsor.user.username}
              />
              <TransactionsCardBalance
                assets={
                  sponsor.treasuryAssets.map((asset) => ({
                    amount: asset.amount,
                    token: asset.tokenAddress,
                  })) || []
                }
                totalCommitted={sponsor.totalCommitted || 0}
              />
              <TransactionSection />
            </TransactionsCard>
          );
        })}
      </div>
    </div>
  );
};
