import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { cn } from '../../../lib/utils';

export const DialogSize = {
  sm: 'max-w-[410px]',
  md: 'max-w-[500px]',
  lg: 'max-w-[600px]',
  xl: '!w-[90vw] max-w-6xl',
  '2xl': 'w-[95vw] max-w-screen-2xl',
};

interface Props {
  open: boolean;
  onClose: () => void;
  dialogSize: keyof typeof DialogSize;
  children: ReactNode | React.JSX.Element;
}

export const Modal = ({
  open,
  onClose,
  dialogSize = 'sm',
  children,
}: Props) => {
  return (
    <>
      <Dialog.Root open={open}>
        <Dialog.Portal>
          <Dialog.Overlay
            onClick={onClose}
            className="bg-[#E8E8E8]/5 dark:bg-black/10 backdrop-blur-[5px] data-[state=open]:animate-overlayShow fixed inset-0"
          />
          <Dialog.Content
            className={cn(
              DialogSize[dialogSize],
              'text-white data-[state=open]:animate-contentShow fixed top-[46%] left-[50%] max-h-[85vh] w-full translate-x-[-50%] translate-y-[-50%] rounded-[12px] bg-[var(--color-bg-primary-base)] shadow-[none] focus:outline-none',
            )}
          >
            <Dialog.Content className="z-50 relative">
              {children}
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
