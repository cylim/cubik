import React, { createContext, useContext, useState } from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';

import { cn } from '../../../lib/utils';
import { Text } from '../../ui/text/text';

interface SegmentContainerProps {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
}
interface SegmentItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  href?: string;
}

const SizeContext = createContext<'sm' | 'md' | 'lg'>('md');

const segmentTextVariant = cva('whitespace-nowrap', {
  variants: {
    size: {
      sm: 'l3',
      md: 'l2',
      lg: 'l1',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
const segmentContainerVariant = cva('', {
  variants: {
    size: {
      sm: 'h-[36px]',
      md: 'h-[40px]',
      lg: 'h-[44px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const SegmentContainer = ({ children, size }: SegmentContainerProps) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <SizeContext.Provider value={size}>
      <div
        className={cn(
          segmentContainerVariant({ size }),
          'bg-[var(--segment-control-surface-inactive)] w-full p-1 gap-1 flex justify-center items-center rounded-[8px]',
        )}
      >
        {React.Children.map(children, (child, index) => {
          // Clone the child and pass down isActive and onClick props
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return React.cloneElement(child, {
            isActive: index === activeItem,
            onClick: () => setActiveItem(index),
          });
        })}
      </div>
    </SizeContext.Provider>
  );
};

export const SegmentItem = ({
  children,
  onClick,
  isActive,
  href,
}: SegmentItemProps) => {
  const size = useContext(SizeContext);

  const content = (
    <Text
      className={cn(segmentTextVariant({ size }))}
      color={isActive ? 'primary' : 'tertiary'}
    >
      {children}
    </Text>
  );

  return href ? (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <Link
      href={href}
      className={cn(
        'px-6 w-full h-full flex items-center justify-center gap-2 cursor-pointer text-center rounded-[6px]',
        isActive
          ? 'bg-[var(--segment-control-surface-active)] shadow-md'
          : 'bg-[var(--segment-control-surface-inactive)]',
      )}
    >
      {content}
    </Link>
  ) : (
    <div
      onClick={onClick}
      className={cn(
        'px-6 w-full h-full flex items-center justify-center gap-2 cursor-pointer text-center rounded-[6px]',
        isActive
          ? 'bg-[var(--segment-control-surface-active)] shadow-md'
          : 'bg-[var(--segment-control-surface-inactive)]',
      )}
    >
      {content}
    </div>
  );
};
