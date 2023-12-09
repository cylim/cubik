import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn } from '../../../lib/utils';
import { Text } from '../text/text';

const bgVariants = cva('', {
  variants: {
    variant: {
      primary:
        'bg-[var(--button-primary-surface-default)] hover:bg-[var(--button-primary-surface-hovered)] !text-[var(--button-primary-text-default)] hover:!text-[var(--button-primary-text-hovered)] !stroke-[var(--button-primary-text-default)] hover:!stroke-[var(--button-primary-text-hovered)] focus:border-2 focus:border-[var(--button-primary-border-focused)] focus:!text-[var(--button-primary-text-focused)] disabled:bg-[var(--button-primary-surface-disabled)] disabled:!text-[var(--button-primary-text-disabled)] disabled:!stroke-[var(--button-primary-text-disabled)] disabled:cursor-not-allowed',
      secondary:
        'bg-[var(--button-secondary-surface-default)] hover:bg-[var(--button-secondary-surface-hovered)] !text-[var(--button-secondary-text-default)] hover:!text-[var(--button-secondary-text-hovered)] !stroke-[var(--button-secondary-text-default)] hover:!stroke-[var(--button-secondary-text-hovered)] focus:border-2 focus:border-[var(--button-secondary-border-focused)] focus:!text-[var(--button-secondary-text-focused)] disabled:bg-[var(--button-secondary-surface-disabled)] disabled:!text-[var(--button-secondary-text-disabled)] disabled:!stroke-[var(--button-secondary-text-disabled)] disabled:cursor-not-allowed',
      outline:
        'bg-[var(--button-secondary-outline-default)]  border border-[var(--button-outline-border-default)] hover:bg-[var(--button-outline-surface-hovered)] !text-[var(--button-outline-text-default)] hover:!text-[var(--button-outline-text-hovered)] !stroke-[var(--button-outline-text-default)] hover:!stroke-[var(--button-outline-text-hovered)] focus:border-2 focus:border-[var(--button-outline-border-focused)] focus:!text-[var(--button-outline-text-focused)] disabled:bg-[var(--button-outline-surface-disabled)] disabled:!text-[var(--button-outline-text-disabled)] disabled:!stroke-[var(--button-outline-text-disabled)] disabled:cursor-not-allowed',
      tertiary:
        'bg-[var(--button-tertiary-surface-default)] hover:bg-[var(--button-tertiary-surface-hovered)] !text-[var(--button-tertiary-text-default)] hover:!text-[var(--button-tertiary-text-hovered)] focus:border-2 focus:border-[var(--button-tertiary-border-focused)] focus:!text-[var(--button-tertiary-text-focused)] disabled:bg-[var(--button-tertiary-surface-disabled)] disabled:!text-[var(--button-tertiary-text-disabled)] disabled:!stroke-[var(--button-tertiary-text-disabled)] disabled:cursor-not-allowed',
      link: 'bg-transparent hover:bg-transparent !text-[var(--button-link-text-default)] hover:!text-[var(--button-link-text-hovered)]!stroke-[var(--button-link-text-default)] hover:!stroke-[var(--button-link-text-hovered)] focus:!text-[var(--button-link-text-focused)] disabled:bg-[var(--button-link-surface-disabled)] disabled:!text-[var(--button-link-text-disabled)] disabled:!stroke-[var(--button-link-text-disabled)] disabled:cursor-not-allowed',
      danger:
        'bg-[var(--button-danger-surface-default)] hover:bg-[var(--button-danger-surface-hovered)] !text-[var(--button-danger-text-default)] hover:!text-[var(--button-danger-text-hovered)] !stroke-[var(--button-danger-text-default)] hover:!stroke-[var(--button-danger-text-hovered)] focus:border-2 focus:border-[var(--button-danger-border-focused)] focus:!text-[var(--button-danger-text-focused)] disabled:bg-[var(--button-danger-surface-disabled)] disabled:!text-[var(--button-danger-text-disabled)] disabled:!stroke-[var(--button-danger-text-disabled)] disabled:cursor-not-allowed',
      success:
        'bg-[var(--button-success-surface-default)] hover:bg-[var(--button-success-surface-hovered)] !text-[var(--button-success-text-default)] hover:!text-[var(--button-success-text-hovered)] !stroke-[var(--button-success-text-default)] hover:!stroke-[var(--button-success-text-hovered)] focus:border-2 focus:border-[var(--button-success-border-focused)] focus:!text-[var(--button-success-text-focused)] disabled:bg-[var(--button-success-surface-disabled)] disabled:!text-[var(--button-success-text-disabled)] disabled:!stroke-[var(--button-success-text-disabled)] disabled:cursor-not-allowed',
    },
    size: {
      xl: 'h-[44px] md:h-[48px]',
      lg: 'h-[40px] md:h-[44px]',
      md: 'h-[36px] md:h-[40px]',
      sm: 'h-[32px] md:h-[36px]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

const buttonVariants = cva('', {
  variants: {
    variant: {
      primary: 'stroke-inherit l2-heavy',
      secondary: 'stroke-[var(--button-secondary-text-default)] l2-heavy',
      outline:
        'stroke-[var(--button-outline-text-default)] !text-[var(--button-outline-text-default)] l2-heavy',
      tertiary:
        'stroke-[var(--button-tertiary-text-default)] !text-[var(--button-tertiary-text-default)] l2-heavy',
      link: 'stroke-[var(--button-link-text-default)] !text-[var(--button-link-text-default)] l2-heavy',
      danger:
        'stroke-[var(--button-danger-text-default)] !text-[var(--button-danger-text-default)] l2-heavy',
      success:
        'stroke-[var(--button-success-text-default)] !text-[var(--button-success-text-default)] l2-heavy',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const iconVariants = cva('', {
  variants: {
    size: {
      xl: 'h-[16px]',
      lg: 'h-[16px]',
      md: 'h-[16px]',
      sm: 'h-[12px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof bgVariants> {
  children?: React.ReactNode;
  className?: string;
  leftIconName?: keyof typeof iconLibrary;
  rightIconName?: keyof typeof iconLibrary;
}

const Button = ({
  children,
  variant,
  size,
  leftIconName,
  rightIconName,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        bgVariants({ variant, size }),
        'rounded-md whitespace-nowrap flex items-center justify-center w-[fit-content] gap-[6px] px-[14px] md:px-[16px]',
        className,
      )}
      {...props}
    >
      {leftIconName && (
        <Icon
          name={leftIconName}
          stroke="#000"
          height={16}
          width={16}
          className={cn(buttonVariants({ variant }), iconVariants({ size }))}
        />
      )}
      {children && (
        <Text className={buttonVariants({ variant })} color="inherit">
          {children}
        </Text>
      )}
      {rightIconName && (
        <Icon
          name={rightIconName}
          stroke="#000"
          height={16}
          width={16}
          className={buttonVariants({ variant })}
        />
      )}
    </button>
  );
};

export { Button };
