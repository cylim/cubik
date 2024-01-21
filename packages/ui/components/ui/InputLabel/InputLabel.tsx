import React, { forwardRef } from 'react';

import { cn } from '../../../lib/utils';
import { Text } from '../text/text';

type TextProps = React.HTMLAttributes<HTMLElement> & {
  counterValue?: number; // current value for the counter
  maxCounterValue?: number; // max value for the counter and set to show the counter in UI
  isRequired?: boolean;
  icon?: React.ReactNode;
};

const InputLabel = forwardRef<HTMLElement | null, TextProps>(
  ({ className, children, ...props }) => {
    return (
      <>
        <div className="flex justify-between items-start w-full">
          <div className="flex justify-start items-start gap-1">
            <label
              className={cn(
                'transition-colors text-[var(--color-fg-primary)]',
                className,
              )}
              {...props}
            >
              <Text className="l1">{children}</Text>
            </label>
            {props.isRequired && (
              <span
                className={cn('text-[var(--color-red-500)] transition-colors')}
              >
                *
              </span>
            )}
            {props.icon}
          </div>
          {props.maxCounterValue && (
            <Text
              className={'transition-colors l2'}
              color={
                Number(props?.counterValue) > Number(props.maxCounterValue)
                  ? 'negative'
                  : 'tertiary'
              }
            >
              {props.counterValue}/{props.maxCounterValue}
            </Text>
          )}
        </div>
      </>
    );
  },
);

InputLabel.displayName = 'InputLabel';

export { InputLabel };
