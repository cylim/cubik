import React from 'react';
import useGetProjectStats from '@/hooks/events/getProjectStats';

import { StatsCard, Text } from '@cubik/ui';

interface Props {
  slug: string;
  eventId: string;
}
export const ProjectStatsCards = async ({ eventId, slug }: Props) => {
  const { data: stats } = useGetProjectStats({
    eventId,
    slug,
  });

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Text className="h5" color={'primary'}>
        Live Round Stats
      </Text>
      <div className="flex flex-col gap-4">
        <StatsCard
          title="Estimated Match"
          value={stats?.estimatedMatch.toString() || '0'}
          iconName="piggyBank"
          iconColor="var(--color-bg-positive-base)"
          iconBg="var(--color-surface-positive-transparent)"
        />
        <StatsCard
          title="Community Contributions"
          value={stats?.communityContributions.toString() || '0'}
          iconName="vector"
          iconColor="var(--color-bg-caution-base)"
          iconBg="var(--color-surface-caution-transparent)"
        />
        <StatsCard
          title="Contributors"
          value={stats?.contributors.toString() || '0'}
          iconName="userLove"
          iconColor="var(--color-bg-innovative-base)"
          iconBg="var(--color-surface-innovative-transparent)"
        />
      </div>
    </div>
  );
};
