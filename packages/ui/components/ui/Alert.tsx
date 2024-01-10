import React, { useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { Icon } from '../../icons/icon';
import { iconLibrary } from '../../icons/iconLibrary';
import { cn } from '../../lib/utils';
// import { Button } from './Button/button';
import { Text } from './text/text';

const alertVariants = cva('', {
  variants: {
    type: {
      inline: 'items-center border-0 rounded-lg',
      text: 'items-center border-0 rounded-lg',
      border: 'border-l-2 rounded-r-lg',
    },
    contentSpacing: {
      inline: 'flex justify-between items-center w-full',
      text: 'flex justify-between items-center w-full',
      border: 'flex flex-col items-start gap-2 grow',
    },
    textSpacing: {
      inline: 'flex',
      text: '',
      border: 'flex-col',
    },
    variant: {
      loading: 'input-sm',
      success: '',
      info: '',
      warning: '',
      error: '',
    },
    color: {
      purple: 'var(--alert-loading-icon-fill)',
      green: 'var(--alert-success-icon-fill)',
      blue: 'var(--alert-info-icon-fill)',
      yellow: 'var(--alert-warning-icon-fill)',
      red: 'var(--alert-error-icon-fill)',
    },
    fill: {
      purple: 'none',
      green: 'none',
      blue: 'var(--alert-info-icon-stroke)',
      yellow: 'var(--alert-warning-icon-stroke)',
      red: 'var(--alert-error-icon-stroke)',
    },
    titleColor: {
      purple: '!text-[var(--alert-loading-title)]',
      green: '!text-[var(--alert-success-title)]',
      blue: '!text-[var(--alert-info-title)]',
      yellow: '!text-[var(--alert-warning-title)]',
      red: '!text-[var(--alert-error-title)]',
    },
    textColor: {
      purple: 'text-[var(--alert-loading-text)]',
      green: 'text-[var(--alert-success-text)]',
      blue: 'text-[var(--alert-info-text)]',
      yellow: 'text-[var(--alert-warning-text)]',
      red: 'text-[var(--alert-error-text)]',
    },
    bgColor: {
      purple:
        'bg-[var(--alert-loading-surface)] border-[var(--alert-loading-border)]',
      green:
        'bg-[var(--alert-success-surface)]  border-[var(--alert-success-border)]',
      blue: 'bg-[var(--alert-info-surface)] border-[var(--alert-info-border)]',
      yellow:
        'bg-[var(--alert-warning-surface)] border-[var(--alert-warning-border)]',
      red: 'bg-[var(--alert-error-surface)] border-[var(--alert-error-border)]',
    },
  },
});

interface AlertProps extends VariantProps<typeof alertVariants> {
  iconName?: keyof typeof iconLibrary;
  content?: string;
  // button?: string;
  // buttonClick?: string;
  closeIcon: boolean;
  className?: string;
}

const Alert = ({
  iconName,
  color,
  content,
  // button,
  className,
  type,
  // buttonClick,
  closeIcon = false,
}: AlertProps) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return showAlert ? (
    <div
      className={cn(
        'flex gap-2 p-2',
        className,
        alertVariants(
          type === 'inline' || type === 'border'
            ? { type, bgColor: color }
            : { type },
        ),
      )}
    >
      <div className="flex items-start pt-[2px]">
        {iconName && (
          <Icon
            name={iconName}
            height={20}
            width={20}
            // stroke={cn(alertVariants({ color }))}
            strokeWidth={1}
          />
        )}
      </div>

      <div
        className={cn('items-center', alertVariants({ contentSpacing: type }))}
      >
        <div className={cn('gap-1 flex', alertVariants({ textSpacing: type }))}>
          <Text
            className={cn('l2-light', alertVariants({ titleColor: color }))}
          >
            {content}
          </Text>
        </div>

        {/* <Button
          variant="outline"
          className={cn(
            'border-0 text-sm font-semibold !px-0',
            alertVariants({ titleColor: color }),
          )}
          onClick={() => buttonClick}
        >
          {button}
        </Button> */}
      </div>
      {closeIcon && (
        <div onClick={handleClose}>
          <Icon
            name="cross"
            // stroke="#999999"
            strokeWidth={1.5}
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  ) : null;
};

export { Alert };
