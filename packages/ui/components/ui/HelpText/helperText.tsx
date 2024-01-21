import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '../../../lib/utils';
import { Text } from '../text/text';

const helperTextVariants = cva('transition-colors', {
  variants: {
    variant: {
      success: 'text-[var(--color-fg-success)]',
      default: 'text-[var(--color-fg-tertiary)]',
      error: 'text-[var(--color-fg-error)]',
    },
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
