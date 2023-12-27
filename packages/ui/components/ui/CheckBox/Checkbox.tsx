/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
'use client';

import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-[var(--form-checkbox-border-default)] shadow focus-visible:outline-none focus-visible:ring-1 hover:border-[var(--form-checkbox-border-hovered)] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[var(--form-checkbox-surface-hovered)] disabled:border-[var(--form-checkbox-border-disabled)] disabled:bg-[var(--form-checkbox-surface-disabled)] data-[state=checked]:bg-[var(--form-checkbox-surface-default-checked)] data-[state=checked]:border-[var(--form-checkbox-surface-default-checked)]',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Icon name="check" className="w-4 h-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
