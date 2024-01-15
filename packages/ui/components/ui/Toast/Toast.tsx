import React from 'react';
import { toast, Toaster } from 'sonner';

const CubikToaster = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          error: 'bg-[var(--toast-error-surface)]',
          success: 'bg-[var(--toast-success-surface)] text-green-400',
          warning: 'bg-[var(--toast-warning-surface)] text-yellow-400',
          info: 'bg-[var(--toast-info-surface)]',
          toast:
            'bg-red-500 p-2 rounded-md min-w-[300px] flex flex-row gap-2 items center',
          title: '',
          loader: '',
          description: 'text-red-400',
          actionButton: 'bg-zinc-400',
          cancelButton: 'bg-orange-400',
          closeButton: 'bg-lime-400',
        },
      }}
    />
  );
};

export { toast, CubikToaster };
