import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../../../lib/utils';
import { Text } from '../text/text';
import { Avatar, AvatarProps } from './Avatar';

const avatarGroupVariants = cva('flex relative', {
  variants: {
    variant: {
      squared: '',
      circular: '',
      'squared-horizontal': 'grid grid-cols-2 gap-1 grid-rows-2 items-center',
    },
    size: {
      xs: '-space-x-[0.625rem]',
      sm: '-space-x-4',
      md: '-space-x-5',
      lg: '-space-x-6',
      xl: '-space-x-7',
      '2xl': '-space-x-9',
    },
  },
  defaultVariants: {
    variant: 'circular',
  },
});

export interface AvatarGroupProps
  extends VariantProps<typeof avatarGroupVariants> {
  avatars: AvatarProps[];
  shape?: 'circle' | 'square';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'circular' | 'squared' | 'squared-horizontal';
  maxCount?: number;
}

export const AvatarGroup = ({
  avatars,
  shape,
  size,
  variant = 'circular',
  maxCount = 3,
}: AvatarGroupProps) => {
  const overflowCount = avatars?.length > 3 ? true : false;
  // calculate the height of the container

  return (
    <div className="flex items-center w-auto flex-2">
      <div
        className={cn(
          avatarGroupVariants(
            variant === 'squared-horizontal' ? { variant } : { size, variant },
          ),
        )}
      >
        {avatars
          ?.slice(0, maxCount)
          .map((avatar, index) => (
            <Avatar
              key={index}
              src={avatar.src}
              alt={avatar.alt}
              variant={shape}
              size={size}
            />
          ))}
        {variant === 'squared-horizontal' && overflowCount && (
          <div className="w-[100%] h-full flex items-center justify-center">
            <Text className="l1 m-auto" color="primary">
              +{avatars?.length - 3}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};
