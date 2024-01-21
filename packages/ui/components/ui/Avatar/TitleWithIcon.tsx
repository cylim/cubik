import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn } from '../../../lib/utils';
import { Text } from '../text/text';

const titleVariants = cva(
  'flex relative font-semibold text-[var(--avatar-label-title)]',
  {
    variants: {
      size: {
        xs: 'l1 md:l2',
        sm: 'b2 md:l1',
        md: 'h5',
        lg: 'h4',
        xl: 'h4',
        '2xl': 'h4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface TitleWithIconProps extends VariantProps<typeof titleVariants> {
  text: string;
  icon?: keyof typeof iconLibrary;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  iconColor?: string;
}

const TitleWithIcon: React.FC<TitleWithIconProps> = ({
  text,
  icon,
  size,
  iconColor,
}) => {
  return (
    <div className={cn('flex items-center gap-2')}>
      <Text className={cn(titleVariants({ size }))}>{text}</Text>
      {icon && <Icon name={icon} color={iconColor} height={18} width={18} />}
    </div>
  );
};

export default TitleWithIcon;
