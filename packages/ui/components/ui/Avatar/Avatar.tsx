import React from 'react';
import Image from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn, handleMediaQuery } from '../../../lib/utils';

const avatarVariants = cva('', {
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

const iconVariants = cva(
  'absolute block h-3 w-3 z-200 rounded-full bg-[var(--avatar-status)] border border-[var(--avatar-status)]',
  {
    variants: {
      variant: {
        square: '-bottom-1 -right-1',
        circle: 'bottom-0 right-0',
      },
      size: {
        xs: 'w-[0.375rem] h-[0.375rem]',
        sm: 'w-2 h-2',
        md: 'w-[0.625rem] h-[0.625rem]',
        lg: 'w-[0.875rem] h-[0.875rem]',
        xl: 'w-4 h-4',
        '2xl': 'w-5 h-5',
      },
    },
  },
);

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src: string;
  alt: string;
  className?: string;
  iconName?: keyof typeof iconLibrary;
}

const Avatar = ({
  src,
  alt,
  variant,
  size,
  className,
  iconName,
}: AvatarProps) => {
  return (
    <span
      className={cn(
        'relative inline-block',
        handleMediaQuery([
          {
            className: avatarVariants({
              size: size,
              variant,
              className,
            }),
            type: 'default',
          },
          {
            className: avatarVariants({
              size: 'sm',
              variant,
              className,
            }),
            type: 'sm',
          },
        ]),
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{
          objectFit: 'cover',
          background: 'transparent',
          borderRadius: variant === 'circle' ? '100%' : '8px',
        }}
        priority
      />
      {iconName && (
        <Icon name={iconName} className={cn(iconVariants({ variant, size }))} />
      )}
    </span>
  );
};

export { Avatar };
export type { AvatarProps };
