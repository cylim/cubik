import React from 'react';
import TabLayout from '@/components/common/tabs/TabLayout';

import { Text } from '@cubik/ui';

export const ProjectContributorsTab = () => {
  return (
    <TabLayout>
      <div>
        <div className="flex flex-col">
          <Text className="h6" color="primary">
            Live Round Stats
          </Text>
          <div className="flex flex-col gap-4">hello</div>
        </div>
      </div>
    </TabLayout>
  );
};
