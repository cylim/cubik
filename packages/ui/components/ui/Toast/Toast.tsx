import React from 'react';
import { toast, Toaster } from 'sonner';
import { useMediaQuery } from 'usehooks-ts';

const CubikToaster = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <Toaster
      position={isMobile ? 'top-center' : 'bottom-center'}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'bg-[var(--toast-primary-surface)] border border-[var(--color-border-primary-transparent)] text-[var(--toast-primary-text)] py-3 px-4 rounded-xl min-w-[340px] flex flex-row gap-2 items-center ',
          title: 'text-sm !font-normal',
          description: 'text-sm !font-light',
          actionButton:
            'underline underline-offset-4 !bg-transparent !border-none !text-[var(--color-fg-primary-base)]',
          cancelButton: 'bg-orange-400',
          closeButton: 'bg-lime-400',
          loader:
            '!bg-[var(--toast-loading-surface)] !dark:border-[var(--toast-primary-transparent)] !text-[var(--toast-loading-text)]',
          error:
            'border-[var(--toast-error-border)] !dark:border-[var(--toast-primary-transparent)] !bg-[var(--toast-error-surface)] !text-[var(--toast-error-text)]',
          success:
            'border-[var(--toast-success-border)] dark:border-[var(--toast-primary-transparent)] bg-[var(--toast-success-surface)] text-[var(--toast-success-text)]',
          warning:
            'border-[var(--toast-warning-border)] dark:border-[var(--toast-primary-transparent)] bg-[var(--toast-warning-surface)] text-[var(--toast-warning-text)] border border-[var(--color-border-primary-transparent)]',
          info: 'border-[var(--toast-info-border)] dark:border-[var(--toast-primary-transparent)] !bg-[var(--toast-info-surface)] text-[var(--toast-info-text)]',
        },
      }}
    />
  );
};

export { toast, CubikToaster };
