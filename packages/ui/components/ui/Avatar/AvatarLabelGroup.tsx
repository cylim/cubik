import React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '../../../lib/utils';
import { Text } from '../text/text';
import { Avatar, AvatarProps } from './Avatar';
import { AvatarGroup } from './AvatarGroup';
import TitleWithIcon from './TitleWithIcon';

interface AvatarLabelProps {
  avatarSrc: string | AvatarProps[];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'square' | 'circle';
  title?: string;
  subtitle?: string;
  description?: string;
  avatarShape?: 'circle' | 'square';
  className?: string;
  children?: React.ReactNode;
}

const subTitleVariants = cva('flex relative', {
  variants: {
    size: {
      xs: 'l2',
      sm: 'l1',
      md: 'h5',
      lg: 'h4',
      xl: 'h4',
      '2xl': 'h4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const descriptionVariants = cva(
  'flex relative text-[var(--avatar-label-description)] font-normal overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-inline-box]',
  {
    variants: {
      size: {
        xs: 'l3-light',
        sm: 'l3-light',
        md: 'b4-light',
        lg: 'b4-light',
        xl: 'b3-light',
        '2xl': 'b2-light',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const gapVariants = cva('text-[var(--avatar-label-subtitle)] font-normal', {
  variants: {
    size: {
      xs: 'gap-[0px]',
      sm: 'gap-[0px]',
      md: 'gap-[0px]',
      lg: 'gap-[0px]',
      xl: 'gap-[2px]',
      '2xl': 'gap-[2px] md:gap-[4px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const avatarLabelContainerVariants = cva('flex items-center w-full', {
  variants: {
    size: {
      xs: 'gap-[8px]',
      sm: 'gap-[8px]',
      md: 'gap-[12px]',
      lg: 'gap-[12px]',
      xl: 'gap-[16px]',
      '2xl': 'gap-[16px] md:gap-[20px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const AvatarLabelGroup: React.FC<AvatarLabelProps> = ({
  avatarSrc,
  shape,
  title,
  subtitle,
  description,
  size,
  className,
  children,
}) => {
  return (
    <div className={cn(avatarLabelContainerVariants({ size }), className)}>
      {/* Image Container */}
      <div className="flex-shrink-0 flex">
        {typeof avatarSrc === 'string' ? (
          <Avatar src={avatarSrc} alt="sample" size={size} variant={shape} />
        ) : (
          <AvatarGroup
            variant={'squared-horizontal'}
            shape="square"
            avatars={avatarSrc}
            size={size}
          />
        )}
      </div>
      {/* Text Container */}
      <div className={cn(gapVariants({ size }), '')}>
        {!children && title && (
          <>
            <div className="flex items-center">
              <TitleWithIcon text={title} size={size} />
              {subtitle && (
                <span className={cn(subTitleVariants({ size }), 'ml-1')}>
                  {subtitle}
                </span>
              )}
            </div>
            {description && (
              <Text
                color="secondary"
                className={cn(descriptionVariants({ size }), 'break-all')}
              >
                {description}
              </Text>
            )}
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export { AvatarLabelGroup };
