import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn } from '../../../lib/utils';
import { Text } from '../text/text';

const bgVariants = cva('transition ease-in-out delay-250', {
  variants: {
    variant: {
      primary:
        'bg-[var(--button-primary-surface-default)] hover:bg-[var(--button-primary-surface-hovered)] !text-[var(--button-primary-text-default)] hover:!text-[var(--button-primary-text-hovered)] !stroke-[var(--button-primary-text-default)] hover:!stroke-[var(--button-primary-text-hovered)]  focus:!text-[var(--button-primary-text-focused)] disabled:bg-[var(--button-primary-surface-disabled)] disabled:!text-[var(--button-primary-text-disabled)] disabled:!stroke-[var(--button-primary-text-disabled)] disabled:cursor-not-allowed  focus-visible:ring-1 focus-visible:ring-[var(--button-primary-border-focused)] focus-visible:ring-offset-[var(--btn-primary-offset)] focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none',
      secondary:
        'bg-[var(--button-secondary-surface-default)] hover:bg-[var(--button-secondary-surface-hovered)] !text-[var(--button-secondary-text-default)] hover:!text-[var(--button-secondary-text-hovered)] !stroke-[var(--button-secondary-text-default)] hover:!stroke-[var(--button-secondary-text-hovered)] focus:border-2 focus:border-[var(--button-secondary-border-focused)] focus:!text-[var(--button-secondary-text-focused)] disabled:bg-[var(--button-secondary-surface-disabled)] disabled:!text-[var(--button-secondary-text-disabled)] disabled:!stroke-[var(--button-secondary-text-disabled)] disabled:cursor-not-allowed focus-visible:ring-1 focus-visible:ring-[var(--button-secondary-border-focused)] focus-visible:ring-offset-[var(--button-secondary-offset)] focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none',
      outline:
        'bg-[var(--button-secondary-outline-default)] border border-[var(--button-outline-border-default)] hover:bg-[var(--button-outline-surface-hovered)] !text-[var(--button-outline-text-default)] hover:!text-[var(--button-outline-text-hovered)] !stroke-[var(--button-outline-text-default)] hover:!stroke-[var(--button-outline-text-hovered)] focus-visible:outline-none focus-visible:border focus-visible:border-[var(--button-outline-border-default)] focus:!text-[var(--button-outline-text-focused)] disabled:bg-[var(--button-outline-surface-disabled)] disabled:!text-[var(--button-outline-text-disabled)] disabled:!stroke-[var(--button-outline-text-disabled)] disabled:cursor-not-allowed focus-visible:ring-1 focus-visible:ring-[var(--button-outline-border-focused)] focus-visible:ring-offset-[var(--button-outline-offset)] focus-visible:ring-offset-1',
      link: 'bg-transparent hover:bg-transparent underline underline-offset-4 decoration-[var(--button-link-text-default)] !text-[var(--button-link-text-default)] hover:!text-[var(--button-link-text-hovered)]!stroke-[var(--button-link-text-default)] hover:!stroke-[var(--button-link-text-hovered)] focus:!text-[var(--button-link-text-focused)] disabled:bg-[var(--button-link-surface-disabled)] disabled:!text-[var(--button-link-text-disabled)] disabled:!stroke-[var(--button-link-text-disabled)] disabled:cursor-not-allowed focus-visible:ring-transparent focus-visible:ring-offset-[var(--button-link-offset)] focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none',
      danger:
        'bg-[var(--button-danger-surface-default)] hover:bg-[var(--button-danger-surface-hovered)] !text-[var(--button-danger-text-default)] hover:!text-[var(--button-danger-text-hovered)] !stroke-[var(--button-danger-text-default)] hover:!stroke-[var(--button-danger-text-hovered)] focus:border-2 focus:border-[var(--button-danger-border-focused)] focus:!text-[var(--button-danger-text-focused)] disabled:bg-[var(--button-danger-surface-disabled)] disabled:!text-[var(--button-danger-text-disabled)] disabled:!stroke-[var(--button-danger-text-disabled)] disabled:cursor-not-allowed focus:ring-[var(--button-danger-border-focused)] focus:ring-offset-[var(--color-fg-danger-base)] focus:ring-offset-2 focus:outline-none focus:border-none focus-visible:ring-1 focus-visible:ring-[var(--button-danger-border-focused)] focus-visible:ring-offset-[var(--button-danger-offset)] focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none',
      success:
        'bg-[var(--button-success-surface-default)] hover:bg-[var(--button-success-surface-hovered)] !text-[var(--button-success-text-default)] hover:!text-[var(--button-success-text-hovered)] !stroke-[var(--button-success-text-default)] hover:!stroke-[var(--button-success-text-hovered)] focus:border-2 focus:border-[var(--button-success-border-focused)] focus:!text-[var(--button-success-text-focused)] disabled:bg-[var(--button-success-surface-disabled)] disabled:!text-[var(--button-success-text-disabled)] disabled:!stroke-[var(--button-success-text-disabled)] disabled:cursor-not-allowed focus-visible:ring-[var(--button-success-border-focused)] focus-visible:ring-offset-[var(--color-fg-success-base)] focus-visible:ring-offset-2 focus-visible:outline-none focus:border-none focus-outline:border-none focus-visible:ring-1 focus-visible:ring-[var(--button-success-border-focused)] focus-visible:ring-offset-[var(--button-success-offset)] focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none',
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
      secondary: 'stroke-[var(--button-secondary-text-default)]',
      outline:
        'stroke-[var(--button-outline-text-default)] !text-[var(--button-outline-text-default)] ',
      link: 'stroke-[var(--button-link-text-default)] !text-[var(--button-link-text-default)] ',
      danger:
        'stroke-[var(--button-danger-text-default)] !text-[var(--button-danger-text-default)] ',
      success:
        'stroke-[var(--button-success-text-default)] !text-[var(--button-success-text-default)] ',
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
const buttonTextVariants = cva('', {
  variants: {
    size: {
      xl: 'l2-heavy md:l2-heavy',
      lg: 'l2-heavy md:l2-heavy',
      md: 'l2-heavy md:l2-heavy',
      sm: 'l2-heavy md:l2-heavy',
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
  isLoading?: boolean;
}

const Button = ({
  children,
  variant,
  size,
  leftIconName,
  rightIconName,
  className,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading}
      className={cn(
        bgVariants({ variant, size }),
        'rounded-md whitespace-nowrap flex items-center justify-center  w-[fit-content]  gap-[6px] px-[14px] md:px-[16px]',
        className,
      )}
      {...props}
    >
      {!isLoading ? (
        <>
          {leftIconName && (
            <Icon
              name={leftIconName}
              stroke="#000"
              height={16}
              width={16}
              className={cn(
                buttonVariants({ variant }),
                iconVariants({ size }),
              )}
            />
          )}
          {children && (
            <Text className={buttonTextVariants({ size })} color="inherit">
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
        </>
      ) : (
        <Icon
          name={'spinner'}
          stroke="#000"
          height={18}
          width={18}
          className={cn(buttonVariants({ variant }), 'animate-spin')}
        />
      )}
    </button>
  );
};

export { Button };
