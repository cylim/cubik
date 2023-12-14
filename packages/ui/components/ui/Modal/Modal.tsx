import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { cn } from '../../../lib/utils';

export const DialogSize = {
  sm: 'max-w-[408px]',
  md: 'max-w-[500px]',
  lg: 'max-w-[600px]',
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
            className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0"
          />
          <Dialog.Content
            className={cn(
              DialogSize[dialogSize],
              'text-white data-[state=open]:animate-contentShow fixed top-[40%] left-[50%] max-h-[85vh] w-full translate-x-[-50%] translate-y-[-50%] rounded-[12px] bg-[var(--color-bg-primary-base)] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none',
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
