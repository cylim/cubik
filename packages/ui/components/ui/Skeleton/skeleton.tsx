import React from 'react';
import { cva } from 'class-variance-authority';

import { cn, handleMediaQuery } from '../../../lib/utils';

const circularSkeltonVariants = cva('', {
  variants: {
    variant: {
      square: 'rounded-lg',
      circle: 'rounded-full',
    },
    size: {
      xs: 'w-[16px] h-[16px] md:w-[24px] md:h-[24px]', // [var(--size-sm)]
      sm: 'w-[24px] h-[24px] md:w-[32px] md:h-[32px] ',
      md: 'w-[32px] h-[32px] md:w-[44px] md:h-[44px] ',
      lg: 'w-[44px] h-[44px] md:w-[56px] md:h-[56px] ',
      xl: 'w-[56px] h-[56px] md:w-[72px] md:h-[72px] ',
      '2xl': 'w-[64px] h-[64px] md:w-[80px] md:h-[80px] ',
    },
  },
  defaultVariants: {
    variant: 'circle',
    size: 'md',
  },
});
const Skeleton = ({
  className,
  width,
  height,
  opacity,
}: {
  className?: string;
  width?: number | string;
  height?: number | string;
  opacity?: number;
}) => {
  return (
    <div
      className={cn(
        `animate-pulse rounded-lg bg-[var(--color-surface-cool-transparent)] min-h-[16px] h-${
          height ? height : 32
        }px w-${width ? width : 16}px opacity-${opacity}`,
        { className },
      )}
    />
  );
};

const CircularSkeleton = ({
  size,
  shape,
  opacity,
}: {
  opacity?: number;
  size: any;
  shape: any;
}) => {
  return (
    <span
      className={cn(
        'relative inline-block',
        handleMediaQuery([
          {
            className: circularSkeltonVariants({
              size: size,
              variant: shape,
            }),
            type: 'default',
          },
          {
            className: circularSkeltonVariants({
              size: 'sm',
              variant: shape,
            }),
            type: 'sm',
          },
        ]),
      )}
    >
      <div
        className={`opacity-${opacity} animate-pulse rounded-lg bg-[var(--color-surface-cool-transparent)] h-full w-full`}
      />
    </span>
  );
};

const TextSkeleton = ({
  opacity,
  lines,
  lineHeight,
}: {
  opacity?: number;
  lines?: number;
  lineHeight?: number;
}) => {
  const skeletonHeightClass = lineHeight ? `h-${lineHeight}px` : 'h-16px';
  const numberOfLines = lines ?? 2;

  return (
    <div className={`flex flex-col gap-[2px] md:gap-1 opacity-${opacity}`}>
      {Array.from({ length: numberOfLines }).map((_, index) => (
        <div
          key={index}
          className={`relative block bg-[var(--color-surface-cool-transparent)] rounded min-h-[6px] md:min-h-[8px] ${
            index === numberOfLines - 1 ? 'w-2/3' : 'w-full'
          } ${skeletonHeightClass} animate-pulse mb-2 last:mb-0`}
        />
      ))}
    </div>
  );
};

export { CircularSkeleton, TextSkeleton, Skeleton };
