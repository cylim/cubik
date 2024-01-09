import React from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

import { Icon, IconName } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Text } from '../text/text';

export const EmptyState = ({
  title,
  description,
  icon,
  children,
  border,
  iconColor,
  bgColor,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  border?: boolean;
  iconColor?: string;
  bgColor?: string;
  icon: IconName;
}) => {
  const isSmallDevice = useMediaQuery('(max-width: 768px)');

  return (
    <div
      className={`flex items-center justify-center rounded-[8px] py-10 md:py-16 ${
        border && 'border border-[var(--empty-state-border-secondary)]'
      }`}
    >
      <div className="item-center mx-auto flex max-w-[280px] flex-col items-center justify-center gap-4 text-center md:max-w-[360px] md:gap-4">
        <div
          className={cn(
            'flex w-fit items-center justify-center rounded-full p-2 md:p-6',
            bgColor || 'bg-[var(--color-surface-negative-transparent)]',
          )}
        >
          <Icon
            name={icon}
            color={iconColor || 'var(--color-fg-negative-base)'}
            width={isSmallDevice ? 24 : 44}
            height={isSmallDevice ? 24 : 44}
            strokeWidth={2}
            // initial={{ pathLength: 0 }}
            // animate={{ pathLength: 1 }}
            // transition={{
            //   duration: 1,
            //   ease: 'easeInOut',
            //   repeatDelay: 1,
            // }}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
          <Text color="primary" className="b1-heavy md:b2-heavy">
            {title}
          </Text>
          {description && (
            <Text color="tertiary" className="b4-light">
              {description}
            </Text>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
