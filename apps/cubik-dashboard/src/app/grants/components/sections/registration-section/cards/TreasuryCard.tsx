import React from 'react';

import { Avatar, Icon } from '@cubik/ui';
import { iconLibrary } from '@cubik/ui/icons/iconLibrary';
import { cn } from '@cubik/ui/lib/utils';

type Props = {
  iconName: keyof typeof iconLibrary;
  title: string;
  amount: string;
  symbol: string;
  classname: string;
};

const TreasuryCard = ({
  iconName,
  title,
  amount,
  symbol,
  classname,
}: Props) => {
  return (
    <div className="flex items-center space-x-3 rounded-lg border border-[#333333] bg-[#262626] p-4">
      <div className={cn(classname, 'p-3 rounded')}>
        <Icon
          className="fill-none stroke-[var(--color-neutral-980)]"
          name={iconName}
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-xs text-white opacity-60">{title}</p>
        <h3 className="flex items-baseline justify-start gap-1 font-mono text-xl text-[var(--color-fg-primary)]">
          <h6 className="text-sm">{symbol}</h6> {amount}
        </h3>
      </div>
    </div>
  );
};

export default TreasuryCard;
