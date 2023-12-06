import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn } from '../../../lib/utils';
import { Avatar } from '../Avatar/Avatar';
import { Text } from '../text/text';

interface TagIconProps extends VariantProps<typeof tagIconVariants> {
  iconName: keyof typeof iconLibrary;
}
const tagIconVariants = cva('', {
  variants: {
    size: {
      desktop: 'w-[22px] h-[22px]',
      tablet: 'w-[18px] h-[18px]',
      mobile: 'w-[16px] h-[16px]',
    },
    color: {
      green: 'stroke-[var(--tag-solid-text-green)]',
      red: 'stroke-[var(--tag-solid-text-red)]',
      orange: 'stroke-[var(--tag-solid-text-orange)]',
      blue: 'stroke-[var(--tag-solid-text-blue)]',
      purple: 'stroke-[var(--tag-solid-text-purple)]',
      yellow: 'stroke-[var(--tag-solid-text-yellow)]',
      default: 'stroke-[var(--tag-solid-text-default)]',
      'subtle-green': 'stroke-[var(--tag-subtle-text-green)]',
      'subtle-red': 'stroke-[var(--tag-solid-text-red)]',
      'subtle-orange': 'stroke-[var(--tag-solid-text-orange)]',
      'subtle-blue': 'stroke-[var(--tag-solid-text-blue)]',
      'subtle-purple': 'stroke-[var(--tag-solid-text-purple)]',
      'subtle-yellow': 'stroke-[var(--tag-solid-text-yellow)]',
      'subtle-default': 'stroke-[var(--tag-solid-text-default)]',
    },
  },
  defaultVariants: {
    size: 'desktop',
  },
});

const TagIcon: React.FC<TagIconProps> = ({ iconName, size, color }) => {
  return (
    <Icon
      name={iconName}
      strokeWidth={1.5}
      stroke="#000"
      className={cn(tagIconVariants({ size, color }))}
    />
  );
};

interface TagAvatarProps extends VariantProps<typeof tagAvatarVariants> {
  src: string;
  alt?: string;
}

const tagAvatarVariants = cva('', {
  variants: {
    size: {
      desktop: '!w-[20px] !h-[20px]',
      tablet: '!w-[16px] !h-[16px]',
      mobile: '!w-[14px] !h-[14px]',
    },
  },
  defaultVariants: {
    size: 'desktop',
  },
});

const TagAvatar: React.FC<TagAvatarProps> = ({ src, alt, size }) => {
  return (
    <Avatar
      variant="circle"
      src={src}
      alt={alt ? alt : ''}
      className={cn(tagAvatarVariants({ size }))}
    />
  );
};

const tagLabelVariants = cva('l2', {
  variants: {
    color: {
      green: 'stroke-[var(--tag-solid-text-green)]',
      red: 'stroke-[var(--tag-solid-text-red)]',
      orange: 'stroke-[var(--tag-solid-text-orange)]',
      blue: 'stroke-[var(--tag-solid-text-blue)]',
      purple: 'stroke-[var(--tag-solid-text-purple)]',
      yellow: 'stroke-[var(--tag-solid-text-yellow)]',
      default: 'stroke-[var(--tag-solid-text-default)]',
      'subtle-green': 'stroke-[var(--tag-subtle-text-green)]',
      'subtle-red': 'stroke-[var(--tag-solid-text-red)]',
      'subtle-orange': 'stroke-[var(--tag-solid-text-orange)]',
      'subtle-blue': 'stroke-[var(--tag-solid-text-blue)]',
      'subtle-purple': 'stroke-[var(--tag-solid-text-purple)]',
      'subtle-yellow': 'stroke-[var(--tag-solid-text-yellow)]',
      'subtle-default': 'stroke-[var(--tag-solid-text-default)]',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

interface TagLabelProps extends VariantProps<typeof tagLabelVariants> {
  children: React.ReactNode;
}

const TagLabel: React.FC<TagLabelProps> = ({ children, color }) => {
  return (
    <div className="px-1">
      <Text className={tagLabelVariants({ color })}>{children}</Text>
    </div>
  );
};

interface TagRightIconProps extends VariantProps<typeof tagRightIconVariants> {
  iconName: keyof typeof iconLibrary;
}

const tagRightIconVariants = cva('', {
  variants: {
    size: {
      desktop: 'w-[18px] h-[18px]',
      tablet: 'w-[18px] h-[18px]',
      mobile: 'w-[16px] h-[16px]',
    },
  },
  defaultVariants: {
    size: 'desktop',
  },
});

const TagRightIcon: React.FC<TagRightIconProps> = ({ iconName, size }) => {
  return (
    <Icon
      name={iconName}
      strokeWidth={1.5}
      stroke="#808080"
      className={cn(tagRightIconVariants({ size }))}
    />
  );
};

interface TagProps extends VariantProps<typeof tagVariants> {
  children: React.ReactNode;
  variant: 'solid' | 'subtle';
  size: 'desktop' | 'tablet' | 'mobile';
  border: boolean;
}

const tagVariants = cva('', {
  variants: {
    color: {
      green: 'bg-[var(--tag-solid-surface-green)]',
      red: 'bg-[var(--tag-solid-surface-red)]',
      orange: 'bg-[var(--tag-solid-surface-orange)]',
      blue: 'bg-[var(--tag-solid-surface-blue)]',
      purple: 'bg-[var(--tag-solid-surface-purple)]',
      yellow: 'bg-[var(--tag-solid-surface-yellow)]',
      default: 'bg-[var(--tag-solid-surface-default)]',
      'subtle-green': 'bg-[var(--tag-subtle-surface-green)]',
      'subtle-red': 'bg-[var(--tag-solid-surface-red)]',
      'subtle-orange': 'bg-[var(--tag-solid-surface-orange)]',
      'subtle-blue': 'bg-[var(--tag-solid-surface-blue)]',
      'subtle-purple': 'bg-[var(--tag-solid-surface-purple)]',
      'subtle-yellow': 'bg-[var(--tag-solid-surface-yellow)]',
      'subtle-default': 'bg-[var(--tag-solid-surface-default)]',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

const Tag: React.FC<TagProps> = ({
  children,
  color,
  variant,
  size,
  border,
}) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking if the child is a valid element before cloning it to prevent errors
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        color,
        variant,
        size,
        border,
      } as Partial<typeof child.props>);
    }
    return child;
  });

  return (
    <div
      className={cn(
        tagVariants({ color }),
        'inline-flex justify-center items-center rounded-full py-2 px-2',
      )}
    >
      {childrenWithProps}
    </div>
  );
};

export { Tag, TagIcon, TagAvatar, TagLabel, TagRightIcon };
