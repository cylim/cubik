import React from 'react';

import { Text } from '../text/text';

interface Props {
  label: string;
  subText?: string;
  changePercent?: string;
}
export const MetricsItem = ({ label, changePercent, subText }: Props) => {
  return (
    <div className="w-full bg-[var(--card-surface-primary)]  rounded-lg p-4">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-8">
          <Text className="l2" color="secondary">
            {label}
          </Text>
          <div>
            <Text className="h4" color="primary">
              {subText}
            </Text>
            <Text
              className="l2 text-[var(--card-fg-primary)] flex justify-start items-center"
              color="primary"
            >
              {/* <Icon
              name="swap"
              width={10}
              height={10}
              className="stroke-[var(--card-fg-primary)] stroke-1"
            /> */}
              {/* @todo - Fix the swap icon */}
              {changePercent}
            </Text>
          </div>
        </div>
        <div className="w-40 bg-red-500 h-20"></div>
      </div>
    </div>
  );
};
