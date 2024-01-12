import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '../../../lib/utils';

export const DialogSize = {
  sm: `w-[410px] left-[calc(50%-205px)]`,
  md: 'w-[500px] left-[calc(50%-250px)] ',
  lg: 'w-[600px] left-[calc(50%-300px)] ',
  xl: 'w-[1152px] left-[calc(50%-576px)] ',
};

const modalContentVariants = cva('', {
  variants: {
    dialogSize: DialogSize,
  },
  defaultVariants: {
    dialogSize: 'sm',
  },
});

interface Props {
  open: boolean;
  onClose: () => void;
  dialogSize: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode | React.JSX.Element;
}

const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentAnimation = {
  initial: { opacity: 0, y: -15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

const layoutTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export const Modal = ({
  open,
  onClose,
  dialogSize = 'sm',
  children,
}: Props) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              <Dialog.Overlay forceMount asChild>
                <motion.div
                  variants={overlayAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="bg-gradient-to-b from-white from-0% dark:from-[#272727] dark:from-0% to-[#E5E5E510] to-10% dark:to-[#27272705] dark:to-10% backdrop-blur-[4px] fixed inset-0"
                  onClick={onClose}
                />
              </Dialog.Overlay>
              <Dialog.Content forceMount asChild>
                <motion.div
                  layout
                  transition={{
                    ...layoutTransition,
                    ...{ duration: 5, ease: 'easeInOut' },
                  }}
                  variants={contentAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={cn(
                    `fixed top-[15vh] m-auto max-h-[85vh] h-fit rounded-[12px] bg-[var(--color-bg-primary-base)] shadow-[none] focus:outline-none `,
                    modalContentVariants({ dialogSize }),
                  )}
                >
                  {children}
                </motion.div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
