import React, { createContext, useContext, useMemo } from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { v4 as uuid_v4 } from 'uuid';

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
  className?: string;
}

const SizeContext = createContext<{ size: 'sm' | 'md' | 'lg'; id: string }>({
  size: 'md',
  id: 'segment',
});

const segmentTextVariant = cva('whitespace-nowrap', {
  variants: {
    size: {
      sm: 'l2 md:l3',
      md: 'l2 md:l2',
      lg: 'l1 md:l1',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
const segmentContainerVariant = cva('', {
  variants: {
    size: {
      sm: 'h-[36px] rounded-lg',
      md: 'h-[40px] rounded-lg',
      lg: 'h-[44px] rounded-[10px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
const segmentItemVariant = cva('', {
  variants: {
    size: {
      sm: 'h-[28px] rounded-[6px]',
      md: 'h-[32px] rounded-[6px]',
      lg: 'h-[36px] rounded-[8px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const SegmentContainer = ({ children, size }: SegmentContainerProps) => {
  const id = useMemo(() => uuid_v4(), []);
  return (
    <SizeContext.Provider value={{ size, id }}>
      <div
        className={cn(
          segmentContainerVariant({ size }),
          'bg-[var(--segment-control-surface-inactive)] w-full p-1 gap-1 flex justify-center items-center',
        )}
      >
        {children}
      </div>
    </SizeContext.Provider>
  );
};

export const SegmentItem = ({
  children,
  onClick,
  isActive,
  href,
  className,
}: SegmentItemProps) => {
  const { size, id } = useContext(SizeContext);
  const content = (
    <Text
      className={cn(segmentTextVariant({ size }))}
      color={isActive ? 'primary' : 'tertiary'}
    >
      {children}
    </Text>
  );

  return href ? (
    <Link
      scroll={false}
      href={href}
      className={cn(
        'relative transition-all px-6 w-full h-full flex items-center justify-center gap-2 cursor-pointer text-center',
      )}
    >
      {isActive && (
        <motion.div
          layoutId={id}
          transition={{ type: 'spring', bounce: 0.1, duration: 0.05 }}
          className={cn(
            segmentItemVariant({ size }),
            'bg-[var(--segment-control-surface-active)] z-0 shadow-md absolute inset-0 w-full',
            className,
          )}
        />
      )}
      <span className="relative z-1">{content}</span>
    </Link>
  ) : (
    <motion.div
      onClick={onClick}
      className={cn(
        'relative transition-all px-6 w-full h-full flex items-center justify-center gap-2 cursor-pointer text-center rounded-[6px]',
      )}
    >
      {' '}
      {isActive && (
        <motion.div
          layoutId={id}
          transition={{ type: 'spring', bounce: 0.1 }}
          className={cn(
            segmentItemVariant({ size }),
            'bg-[var(--segment-control-surface-active)] shadow-md absolute inset-0 w-full rounded-[6px]',
            className,
          )}
        />
      )}
      <span className="relative z-10">{content}</span>
    </motion.div>
  );
};
