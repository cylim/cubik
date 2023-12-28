import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Text } from '../text/text';
import { DialogSize } from './Modal';

const ModalTitleVariants = cva('text-[var(--avatar-label-title)]', {
  variants: {
    size: {
      sm: 'b4-heavy',
      md: 'h6',
      lg: 'h5',
      xl: 'h5',
      '2xl': 'h5',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

const ModalTitleContainerVariants = cva(
  'pointer-events-auto flex justify-between items-center',
  {
    variants: {
      size: {
        sm: 'h-[32px] md:h-[40px] px-[16px]',
        md: 'h-[44px] md:h-[48px] px-[16px] md:px-[24px]',
        lg: 'h-[48px] md:h-[64px] px-[24px]',
        xl: 'h-[48px] md:h-[64px] px-[24px]',
        '2xl': 'h-[48px] md:h-[64px] px-[24px]',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
);

interface Props {
  heading?: string;
  children?: JSX.Element;
  size?: keyof typeof DialogSize;
  onClose: () => void;
  background?: boolean;
  className?: string;
}
export const ModalHeader = ({
  heading,
  size,
  className,
  background,
  onClose,
  children,
}: Props) => {
  return (
    <>
      <Dialog.Title
        className={cn(
          className,
          background ? 'var(--modal-header-surface)' : background,
          ModalTitleContainerVariants({ size }),
        )}
      >
        <Text className={cn(ModalTitleVariants({ size }))}>
          {heading ? heading : ''}
        </Text>
        {children}
        <button className="pointer-events-auto" onClick={onClose}>
          <Icon
            name="cross"
            width={20}
            stroke="var(--modal-header-cancel-icon)"
            height={20}
          />
        </button>
      </Dialog.Title>
    </>
  );
};
