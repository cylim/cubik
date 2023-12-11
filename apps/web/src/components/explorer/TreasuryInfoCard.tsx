import React from 'react';

import { Icon, Text, Tooltip, TooltipContent, TooltipTrigger } from '@cubik/ui';
// import { TooltipDemo } from '@cubik/ui/components/ui/Tooltip/Tooltip';
import { iconLibrary } from '@cubik/ui/icons/iconLibrary';

interface BalanceInfoProps {
  header: string;
  headerIconName?: keyof typeof iconLibrary;
  tooltipText?: React.ReactNode;
  value: string;
}

const TreasuryInfoCard = ({
  header,
  headerIconName,
  tooltipText,
  value,
}: BalanceInfoProps) => {
  return (
    <div className="flex flex-col gap-1 p-4">
      <div className="flex items-center gap-1 text-[var(--color-fg-primary-base)]">
        <Text className="l2">{header}</Text>
        <Tooltip>
          <TooltipTrigger>
            {headerIconName && (
              <Icon
                name={headerIconName}
                height={12}
                width={12}
                stroke="var(--color-fg-primary-subdued)"
                className=" hidden hover:stroke-[var(--color-bg-info)] md:block"
              />
            )}
          </TooltipTrigger>
          <TooltipContent>
            <Text className="l3-light">{tooltipText}</Text>
          </TooltipContent>
        </Tooltip>
      </div>

      <Text className="h3-light" color="primary">
        {value}
      </Text>
    </div>
  );
};

export default TreasuryInfoCard;
