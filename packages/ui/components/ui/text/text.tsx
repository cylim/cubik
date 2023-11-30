import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../../../lib/utils';

const headingVariant = cva('', {
  variants: {
    color: {
      primary: 'text-[var(--color-fg-primary-depth)]',
      secondary: 'text-[var(--color-fg-primary-subdued)]',
      inherit: '',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

interface TextProps extends VariantProps<typeof headingVariant> {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, color, className }) => {
  return <p className={cn(className, headingVariant({ color }))}>{children}</p>;
};

export { Text };
