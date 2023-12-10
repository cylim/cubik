import React from 'react';

import { Icon, Text } from '@cubik/ui';
import { iconLibrary } from '@cubik/ui/icons/iconLibrary';

interface BalanceInfoProps {
  header: string;
  headerIconName?: keyof typeof iconLibrary;
  value: string;
}

const TreasuryInfoCard = ({
  header,
  headerIconName,
  value,
}: BalanceInfoProps) => {
  return (
    <div className="flex flex-col gap-1 p-4">
      <div className="flex items-center gap-1 text-[var(--color-fg-primary-base)]">
        <Text className="l2">{header}</Text>
        {headerIconName && (
          <Icon
            name={headerIconName}
            height={12}
            width={12}
            stroke="var(--color-fg-primary-subdued)"
          />
        )}
      </div>

      <Text className="h3-light" color="primary">
        {value}
      </Text>
    </div>
  );
};

export default TreasuryInfoCard;
