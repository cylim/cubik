import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { cn } from '../../../lib/utils';

interface TooltipProps {
  children: React.ReactNode;
}

const Tooltip = ({ children }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>{children}</RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

interface TooltipTriggerProps {
  children: React.ReactNode;
}
const TooltipTrigger = ({ children }: TooltipTriggerProps) => {
  return <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>;
};

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
}
const TooltipContent = ({ children, className }: TooltipContentProps) => {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className={cn(
          'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-lg bg-[var(--color-bg-info)] text-white px-[12px] py-[8px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] max-w-xs',
          className,
        )}
        sideOffset={5}
      >
        {children}
        <RadixTooltip.Arrow className="fill-[var(--color-bg-info)]" />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
};

export { Tooltip, TooltipTrigger, TooltipContent };
