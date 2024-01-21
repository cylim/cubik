import React, { forwardRef } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Text } from '../text/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip';

type TextProps = React.HTMLAttributes<HTMLLabelElement> & {
  counterValue?: number; // current value for the counter
  maxCounterValue?: number; // max value for the counter and set to show the counter in UI
  isRequired?: boolean;
  infoText?: string;
  icon?: React.ReactNode;
};

export interface InputLabelProps extends TextProps {
  requiredIndicator?: React.ReactNode;
  optionalIndicator?: React.ReactNode;
}

const InputLabel = forwardRef<HTMLElement | null, TextProps>(
  ({ className, children, ...props }) => {
    const isSmallerDevice = useMediaQuery('(max-width: 768px)');
    const tooltipIconSize = isSmallerDevice ? 14 : 18;

    return (
      <div className="flex justify-between items-start w-full">
        <div className="flex justify-start items-start gap-1">
          <label
            className={cn(
              'transition-colors text-[var(--color-fg-primary)]',
              className,
            )}
            {...props}
          >
            <Text className="b2-light md:l1-light">{children}</Text>
          </label>
          {props.isRequired && (
            <span
              className={cn('text-[var(--color-red-500)] transition-colors')}
            >
              *
            </span>
          )}
          {props.infoText && tooltipIconSize && (
            <div className="my-auto pb-[2px]">
              <Tooltip>
                <TooltipTrigger>
                  <Icon
                    name="infoCircleFilled"
                    height={tooltipIconSize}
                    width={tooltipIconSize}
                    color="var(--color-fg-cool-muted)"
                    strokeWidth={1.2}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <Text className="l1 md:l3-heavy">{props.infoText}</Text>
                </TooltipContent>
              </Tooltip>
            </div>
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
    );
  },
);

InputLabel.displayName = 'InputLabel';

export { InputLabel };
