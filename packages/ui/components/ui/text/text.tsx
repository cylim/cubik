import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

import { cn } from '../../../lib/utils';

const headingVariant = cva('antialiased', {
  variants: {
    color: {
      primary: 'text-[var(--color-fg-primary-depth)]',
      secondary: 'text-[var(--color-fg-primary-base)]',
      tertiary: 'text-[var(--color-fg-primary-subdued)]',
      positive: 'text-[var(--color-fg-positive-emphasis)]',
      negative: 'text-[var(--color-fg-negative-emphasis)]',
      info: 'text-[var(--color-fg-info-base)]',
      inherit: '',
      inverse: 'text-[var(--color-fg-primary-inverse)]',
    },
  },
  defaultVariants: {
    color: 'inherit',
  },
});

interface TextProps extends VariantProps<typeof headingVariant> {
  children: React.ReactNode;
  className?: ClassValue;
}

const Text = ({ children, color, className }: TextProps) => {
  return <p className={cn(className, headingVariant({ color }))}>{children}</p>;
};

export { Text };
