import React from 'react';

import { Icon } from '../../../icons/icon';
import { Text } from '../text/text';

export const EmptyState = ({
  title,
  description,
  icon,
  children,
  border,
}: {
  title: string;
  description: string;
  icon:
    | 'cloudError'
    | 'alertInfoCircle'
    | 'alertTriangle'
    | 'danger'
    | 'lock'
    | 'key';
  children?: React.ReactNode;
  border?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-[8px] py-10 md:py-16 ${
        border && 'border border-[var(--empty-state-border-primary)]'
      }`}
    >
      <div className="item-center mx-auto flex max-w-[280px] flex-col items-center justify-center gap-4 text-center md:max-w-[360px] md:gap-6">
        <div className="flex w-fit items-center justify-center rounded-full bg-[var(--color-surface-negative-transparent)] p-3 md:p-6">
          <div>
            <Icon
              name={icon}
              fill="none"
              stroke="var(--color-fg-negative-base)"
              width={32}
              height={32}
              strokeWidth={2}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
          <Text color="primary" className="b1-heavy md:b2-heavy">
            {title}
          </Text>
          <Text color="tertiary" className="b3-light">
            {description}
          </Text>
        </div>
        {children}
      </div>
    </div>
  );
};
