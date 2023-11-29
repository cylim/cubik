import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../../../lib/utils';

const headingVariant = cva('', {
  variants: {
    color: {
      primary: 'text-[var(--color-fg-primary-depth)]',
      secondary: 'text-[var(--color-fg-primary-subdued)]',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

interface TextProps extends VariantProps<typeof headingVariant> {
  children: React.ReactNode;
  as: string;
  variant?: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  as,
  color,
  variant,
  className,
}) => {
  return (
    <p
      className={cn(
        className,
        headingVariant({ color }),
        variant ? `${as}-primary-${variant}` : `${as}-${color}`,
      )}
    >
      {children}
    </p>
  );
};

export { Text };
