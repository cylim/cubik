import React from 'react';

import { cn } from '../../../lib/utils';

interface Props extends React.HTMLProps<HTMLInputElement> {
  helperText?: React.ReactNode;
  InputLabel?: React.ReactNode;
  isError?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  isHttps?: boolean;
  inputVariant?: 'md' | 'sm';
  className?: string;
}
export const InputContainer = (props: Props) => {
  return (
    <>
      <div
        className={cn(
          'flex justify-center w-full flex-col items-start gap-3 focus:ring-blue-[--color-surface-info-transparent]',
          props.className,
        )}
      >
        {props.children}
      </div>
    </>
  );
};
