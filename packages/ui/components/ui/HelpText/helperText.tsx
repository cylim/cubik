import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '../../../lib/utils';
import { Text } from '../text/text';

const helperTextVariants = cva('transition-colors', {
  variants: {
    variant: {
      default: 'text-[var(--color-fg-primary-base)]',
      success: 'text-[var(--color-fg-positive-base)]',
      error: 'text-[var(--color-fg-negative-base)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof helperTextVariants> & { show?: boolean };

const HelperText = forwardRef<HTMLElement | null, TextProps>(
  ({ className, children, variant, show }) => {
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            layout
            layoutId={children?.toString()}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.4,
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <Text
              className={cn(
                helperTextVariants({
                  variant,
                }),
                className,
                'l2',
              )}
            >
              {children}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

HelperText.displayName = 'HelperText';

export { HelperText, helperTextVariants };
