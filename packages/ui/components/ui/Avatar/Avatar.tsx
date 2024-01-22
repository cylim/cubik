import React from 'react';
import Image from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn, handleMediaQuery } from '../../../lib/utils';

const avatarVariants = cva('', {
  variants: {
    variant: {
      square: '',
      circle: 'rounded-full',
    },
    size: {
      xs: 'w-[20px] h-[20px] md:w-[24px] md:h-[24px]', // [var(--size-sm)]
      sm: 'w-[24px] h-[24px] md:w-[32px] md:h-[32px] ',
      md: 'w-[32px] h-[32px] md:w-[44px] md:h-[44px] ',
      lg: 'w-[44px] h-[44px] md:w-[56px] md:h-[56px] ',
      xl: 'w-[56px] h-[56px] md:w-[72px] md:h-[72px] ',
      '2xl': 'w-[64px] h-[64px] md:w-[84px] md:h-[84px] ',
    },
  },
  compoundVariants: [
    {
      variant: 'square',
      size: 'xs',
      class: 'rounded-sm w-[16px] h-[16px] md:w-[24px] md:h-[24px]',
    },
    {
      variant: 'square',
      size: 'sm',
      class: 'rounded-md w-[22px] h-[22px] md:w-[30px] md:h-[30px]',
    },
    {
      variant: 'square',
      size: 'md',
      class: 'rounded-md w-[30px] h-[30px] md:w-[44px] md:h-[44px]',
    },
    {
      variant: 'square',
      size: 'lg',
      class: 'rounded-lg w-[44px] h-[44px] md:w-[56px] md:h-[56px]',
    },
    {
      variant: 'square',
      size: 'xl',
      class: 'rounded-lg w-[56px] h-[56px] md:w-[72px] md:h-[72px]',
    },
    {
      variant: 'square',
      size: '2xl',
      class: 'rounded-lg w-[64px] h-[64px] md:w-[84px] md:h-[84px]',
    },
  ],
  defaultVariants: {
    variant: 'circle',
    size: 'md',
  },
});

const iconVariants = cva(
  'absolute block z-200 rounded-full  bg-[var(--avatar-status)] border border-[var(--avatar-status)]',
  {
    variants: {
      variant: {
        square: '-bottom-1 -right-1',
        circle: 'bottom-0 right-0',
      },
      size: {
        xs: 'w-[6px] h-[6px]',
        sm: 'w-[8px] h-[8px]',
        md: 'w-[10rem] h-[10rem]',
        lg: 'w-[16rem] h-[16rem]',
        xl: 'w-[64px] h-[64px]',
        '2xl': 'w-[80px] h-[80px]',
      },
    },
    defaultVariants: {
      size: 'sm',
      variant: 'circle',
    },
  },
);

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src: string;
  alt: string;
  className?: string;
  iconName?: keyof typeof iconLibrary;
  iconClick?: () => void;
}

const Avatar = ({
  src,
  alt,
  variant,
  size,
  className,
  iconName,
  iconClick,
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
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{
          objectFit: 'cover',
          background: 'transparent',
          borderRadius: variant === 'circle' ? '100%' : '8px',
        }}
        priority
      />
      {iconName && (
        <Icon
          name={iconName}
          className={cn(iconVariants({ variant, size }))}
          color="var(--avatar-status-icon)"
          onClick={iconClick}
        />
      )}
    </span>
  );
};

export { Avatar };
export type { AvatarProps };
