import React from 'react';

import { Text } from '../text/text';

interface Props {
  label: string;
  subText?: string;
  changePercent?: string;
  children?: React.ReactNode;
}
export const MetricsItem = ({
  label,
  changePercent,
  subText,
  children,
}: Props) => {
  return (
    <div className="w-full bg-[var(--card-surface-primary)] rounded-lg p-4">
      <div className="flex flex-col justify-between items-start">
        <Text className="l2-light" color="secondary">
          {label}
        </Text>
        <div className="flex flex-row gap-14 justify-between align-bottom items-end w-full">
          <div className="flex flex-col gap-1 items-start justify-end">
            <Text className="h4" color="primary">
              {subText}
            </Text>
            <Text
              className="l2 text-[var(--card-fg-primary)] flex justify-start items-center"
              color="primary"
            >
              {changePercent}
            </Text>
          </div>
          {children && <div className="w-full min-h-[80px]">{children}</div>}
        </div>
      </div>
    </div>
  );
};
