import React, { useContext } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn } from '../../../lib/utils';
import { Avatar } from '../Avatar/Avatar';
import { Text } from '../text/text';

interface TagIconProps extends VariantProps<typeof tagIconVariants> {
  iconName: keyof typeof iconLibrary;
}

interface TagLabelProps extends VariantProps<typeof tagLabelVariants> {
  children: React.ReactNode;
}

interface TagRightIconProps {
  iconName: keyof typeof iconLibrary;
}

interface TagAvatarProps {
  src: string;
  alt?: string;
}

interface TagRightIconProps {
  iconName: keyof typeof iconLibrary;
}
interface TagProps extends VariantProps<typeof tagVariants> {
  children: React.ReactNode;
  color?: 'default' | 'green' | 'red' | 'orange' | 'blue' | 'purple' | 'yellow';
  variant?: 'solid' | 'subtle';
  border?: boolean;
}

type TagContextType = {
  color: 'default' | 'green' | 'red' | 'orange' | 'blue' | 'purple' | 'yellow';
  variant: 'solid' | 'subtle';
};

const TagContext = React.createContext<TagContextType>({
  color: 'default',
  variant: 'solid',
});

const tagIconVariants = cva('w-[16px] h-[16px] md:w-[22px] md:h-[22px]', {
  variants: {
    color: {
      default: 'stroke-[var(--tag-solid-text-default)]',
      green: 'stroke-[var(--tag-solid-text-green)]',
      red: 'stroke-[var(--tag-solid-text-red)]',
      orange: 'stroke-[var(--tag-solid-text-orange)]',
      blue: 'stroke-[var(--tag-solid-text-blue)]',
      purple: 'stroke-[var(--tag-solid-text-purple)]',
      yellow: 'stroke-[var(--tag-solid-text-yellow)]',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

const TagIcon: React.FC<TagIconProps> = ({ iconName, color }) => {
  return (
    <Icon
      name={iconName}
      strokeWidth={1.5}
      stroke="#000"
      className={cn(tagIconVariants({ color }))}
    />
  );
};

const TagAvatar: React.FC<TagAvatarProps> = ({ src, alt }) => {
  return <Avatar size="sm" variant="circle" src={src} alt={alt ? alt : ''} />;
};

const tagLabelVariants = cva('l2', {
  variants: {
    color: {
      green: 'text-[var(--tag-solid-text-green)]',
      red: 'text-[var(--tag-solid-text-red)]',
      orange: 'text-[var(--tag-solid-text-orange)]',
      blue: 'text-[var(--tag-solid-text-blue)]',
      purple: 'text-[var(--tag-solid-text-purple)]',
      yellow: 'text-[var(--tag-solid-text-yellow)]',
      default: 'text-[var(--tag-solid-text-default)]',
    },
    variant: {
      solid: '',
      subtle: '',
    },
  },
  compoundVariants: [
    {
      color: 'default',
      variant: 'solid',
      class: 'text-[var(--tag-solid-text-default)]',
    },
    {
      color: 'green',
      variant: 'solid',
      class: 'text-[var(--tag-solid-text-green)]',
    },
    {
      color: 'orange',
      variant: 'solid',
      class: 'text-[var(--tag-solid-text-orange)]',
    },
    {
      color: 'red',
      variant: 'solid',
      class: 'text-[var(--tag-solid-text-red)]',
    },
    {
      color: 'blue',
      variant: 'solid',
      class: 'text-[var(--tag-solid-text-blue)]',
    },
    {
      color: 'purple',
      variant: 'solid',
      class: 'text-[var(--tag-solid-text-purple)]',
    },
    {
      color: 'yellow',
      variant: 'solid',
      class: 'text-[var(--tag-solid-text-yellow)]',
    },
    {
      color: 'default',
      variant: 'subtle',
      class: 'text-[var(--tag-subtle-text-default)]',
    },
    {
      color: 'green',
      variant: 'subtle',
      class: 'text-[var(--tag-subtle-text-green)]',
    },
    {
      color: 'orange',
      variant: 'subtle',
      class: 'text-[var(--tag-subtle-text-orange)]',
    },
    {
      color: 'red',
      variant: 'subtle',
      class: 'text-[var(--tag-subtle-text-red)]',
    },
    {
      color: 'blue',
      variant: 'subtle',
      class: 'text-[var(--tag-subtle-text-blue)]',
    },
    {
      color: 'purple',
      variant: 'subtle',
      class: 'text-[var(--tag-subtle-text-purple)]',
    },
    {
      color: 'yellow',
      variant: 'subtle',
      class: 'text-[var(--tag-subtle-text-yellow)]',
    },
  ],
  defaultVariants: {
    color: 'default',
  },
});

const TagLabel = ({ children }: TagLabelProps) => {
  const { color, variant } = useContext(TagContext);

  return (
    <div className="px-1">
      <Text className={tagLabelVariants({ color, variant })}>{children}</Text>
    </div>
  );
};

const TagRightIconVariant = cva('', {
  variants: {
    color: {
      green: 'stroke-[var(--tag-solid-text-green)]',
      red: 'stroke-[var(--tag-solid-text-red)]',
      orange: 'stroke-[var(--tag-solid-text-orange)]',
      blue: 'stroke-[var(--tag-solid-text-blue)]',
      purple: 'stroke-[var(--tag-solid-text-purple)]',
      yellow: 'stroke-[var(--tag-solid-text-yellow)]',
      default: 'stroke-[var(--tag-solid-text-default)]',
    },
    variant: {
      solid: '',
      subtle: '',
    },
  },
  compoundVariants: [
    {
      color: 'default',
      variant: 'solid',
      class: 'stroke-[var(--tag-solid-text-default)]',
    },
    {
      color: 'green',
      variant: 'solid',
      class: 'stroke-[var(--tag-solid-text-green)]',
    },
    {
      color: 'orange',
      variant: 'solid',
      class: 'stroke-[var(--tag-solid-text-orange)]',
    },
    {
      color: 'red',
      variant: 'solid',
      class: 'stroke-[var(--tag-solid-text-red)]',
    },
    {
      color: 'blue',
      variant: 'solid',
      class: 'stroke-[var(--tag-solid-text-blue)]',
    },
    {
      color: 'purple',
      variant: 'solid',
      class: 'stroke-[var(--tag-solid-text-purple)]',
    },
    {
      color: 'yellow',
      variant: 'solid',
      class: 'stroke-[var(--tag-solid-text-yellow)]',
    },
    {
      color: 'default',
      variant: 'subtle',
      class: 'stroke-[var(--tag-subtle-text-default)]',
    },
    {
      color: 'green',
      variant: 'subtle',
      class: 'stroke-[var(--tag-subtle-text-green)]',
    },
    {
      color: 'orange',
      variant: 'subtle',
      class: 'stroke-[var(--tag-subtle-text-orange)]',
    },
    {
      color: 'red',
      variant: 'subtle',
      class: 'stroke-[var(--tag-subtle-text-red)]',
    },
    {
      color: 'blue',
      variant: 'subtle',
      class: 'stroke-[var(--tag-subtle-text-blue)]',
    },
    {
      color: 'purple',
      variant: 'subtle',
      class: 'stroke-[var(--tag-subtle-text-purple)]',
    },
    {
      color: 'yellow',
      variant: 'subtle',
      class: 'stroke-[var(--tag-subtle-text-yellow)]',
    },
  ],
  defaultVariants: {
    color: 'default',
  },
});

const TagRightIcon: React.FC<TagRightIconProps> = ({ iconName }) => {
  const { color, variant } = useContext(TagContext);

  return (
    <div>
      <Icon
        name={iconName}
        className={cn(TagRightIconVariant({ color, variant }))}
        strokeWidth={1.5}
        width={16}
        height={16}
      />
    </div>
  );
};

const tagVariants = cva('h-[24px] md:h-[28px]', {
  variants: {
    color: {
      green: 'bg-[var(--tag-solid-surface-green)]',
      red: 'bg-[var(--tag-solid-surface-red)]',
      orange: 'bg-[var(--tag-solid-surface-orange)]',
      blue: 'bg-[var(--tag-solid-surface-blue)]',
      purple: 'bg-[var(--tag-solid-surface-purple)]',
      yellow: 'bg-[var(--tag-solid-surface-yellow)]',
      default: 'bg-[var(--tag-solid-surface-default)]',
    },
    variant: {
      solid: '',
      subtle: '', // todo: make this work
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'default',
      class:
        'bg-[var(--tag-solid-surface-default)] border-[var(--tag-solid-border-default)]',
    },
    {
      variant: 'subtle',
      color: 'default',
      class:
        'bg-[var(--tag-subtle-surface-default)] border-[var(--tag-subtle-border-default)]',
    },
    {
      variant: 'solid',
      color: 'green',
      class:
        'bg-[var(--tag-solid-surface-green)] border-[var(--tag-solid-border-green)]',
    },
    {
      variant: 'subtle',
      color: 'green',
      class:
        'bg-[var(--tag-subtle-surface-green)] border-[var(--tag-subtle-border-green)]',
    },
    {
      variant: 'solid',
      color: 'orange',
      class:
        'bg-[var(--tag-solid-surface-orange)] border-[var(--tag-solid-border-orange)]',
    },
    {
      variant: 'subtle',
      color: 'orange',
      class:
        'bg-[var(--tag-subtle-surface-orange)] border-[var(--tag-subtle-border-orange)]',
    },
    {
      variant: 'solid',
      color: 'red',
      class:
        'bg-[var(--tag-solid-surface-red)] border-[var(--tag-solid-border-red)]',
    },
    {
      variant: 'subtle',
      color: 'red',
      class:
        'bg-[var(--tag-subtle-surface-red)] border-[var(--tag-subtle-border-red)]',
    },
    {
      variant: 'solid',
      color: 'blue',
      class:
        'bg-[var(--tag-solid-surface-blue)] border-[var(--tag-solid-border-blue)]',
    },
    {
      variant: 'subtle',
      color: 'blue',
      class:
        'bg-[var(--tag-subtle-surface-blue)] border-[var(--tag-subtle-border-blue)]',
    },
    {
      variant: 'solid',
      color: 'purple',
      class:
        'bg-[var(--tag-solid-surface-purple)] border-[var(--tag-solid-border-purple)]',
    },
    {
      variant: 'subtle',
      color: 'purple',
      class:
        'bg-[var(--tag-subtle-surface-purple)] border-[var(--tag-subtle-border-purple)]',
    },
    {
      variant: 'solid',
      color: 'yellow',
      class:
        'bg-[var(--tag-solid-surface-yellow)] border-[var(--tag-solid-border-yellow)]',
    },
    {
      variant: 'subtle',
      color: 'yellow',
      class:
        'bg-[var(--tag-subtle-surface-yellow)] border-[var(--tag-subtle-border-yellow)]',
    },
  ],
  defaultVariants: {
    color: 'default',
  },
});

const Tag = ({ children, color, variant, border }: TagProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking if the child is a valid element before cloning it to prevent errors
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        color,
        variant,
        border,
      } as Partial<typeof child.props>);
    }
    return child;
  });

  return (
    <TagContext.Provider
      value={{
        color: color ? color : 'default',
        variant: variant ? variant : 'solid',
      }}
    >
      <div
        className={cn(
          tagVariants({ color, variant }),
          'inline-flex justify-center items-center rounded-md px-2',
          border ? `border` : '',
        )}
      >
        {childrenWithProps}
      </div>{' '}
    </TagContext.Provider>
  );
};

export { Tag, TagIcon, TagAvatar, TagLabel, TagRightIcon };
