/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { createContext, useContext, useState } from 'react';

import { cn } from '../../../lib/utils';

type InputContextType = {
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputContext = createContext<InputContextType>({
  isFocused: false,
  setIsFocused: () => {},
});

export const InputLeftElement = ({
  children,
  withBorder,
  isDisabled,
}: {
  children: React.ReactNode;
  withBorder: boolean;
  isDisabled?: boolean;
}) => {
  return (
    <div
      className={cn(
        isDisabled
          ? 'text-[var(--form-input-fg-disabled)]'
          : 'text-[var(--form-input-fg-default)]',
        'inline-flex items-center rounded-l-[8px] px-3',
        withBorder && 'border-r  border-[var(--form-input-border-default)]',
      )}
    >
      {children}
    </div>
  );
};
export const InputRightElement = ({
  children,
  withBorder,
  isDisabled,
}: {
  children: React.ReactNode;
  withBorder?: boolean;
  isDisabled?: boolean;
}) => {
  return (
    <div
      className={cn(
        isDisabled
          ? 'text-[var(--form-input-fg-disabled)]'
          : 'text-[var(--form-input-fg-default)]',
        'relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-[8px] px-3 py-2 text-sm font-semibold border-0 border-l-0',
        withBorder && 'border-r  border-[var(--form-input-border-default)]',
      )}
    >
      {children}
    </div>
  );
};

export const InputFieldContainer = ({
  children,
  isError,
  isDisabled,
  variant,
}: {
  children: React.ReactNode;
  isDisabled?: boolean;
  isError?: boolean;
  variant: 'md' | 'sm';
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking if the child is a valid element before cloning it to prevent errors
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isError,
        isDisabled,
        isFocused,
        variant,
        setIsFocused,
        disabled: isDisabled,
      } as Partial<typeof child.props>);
    }
    return child;
  });
  return (
    <InputContext.Provider
      value={{
        isFocused,
        setIsFocused,
      }}
    >
      <div
        className={cn(
          isDisabled && 'cursor-not-allowed',
          variant === 'md' ? 'h-[40px]' : 'h-[36px]',
          'flex rounded-[8px] w-full px-1 transition-all bg-[var(--form-input-surface-default)] hover:text-[var(--form-input-fg-hovered)] border hover:ring-4  ring-[var(--color-surface-primary-transparent)] hover:bg-[var(--form-input-surface-hovered)',
          isFocused &&
            'border border-[var(--form-input-border-focused)] ring-4 ring-[var(--color-surface-primary-transparent)] bg-[var(--form-input-surface-focused)] text-[var(--form-input-fg-focused)]',
          isError
            ? 'border border-[var(--form-input-border-error)] hover:border-[var(--form-input-border-error)] ring-4 ring-[var(--color-surface-negative-transparent)] bg-[var(--form-input-surface-error)] text-[var(--form-input-fg-error)]'
            : 'border-[var(--form-input-border-default)]',
          isDisabled &&
            'border-[var(--form-input-border-disabled)] bg-[var(--form-input-surface-disabled)',
        )}
      >
        {childrenWithProps}
      </div>
    </InputContext.Provider>
  );
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onFocus, onBlur, ...props }, ref) => {
    const { setIsFocused } = useContext(InputContext);
    return (
      <input
        className={cn(
          'bg-[var(--form-input-surface-default)] text-[var(--form-input-fg-default)]',
          'disabled:text-[var(--form-input-fg-disabled)] disabled:cursor-not-allowed disabled:opacity-50 disabled:border-[var(--form-input-border-disabled)] disabled:bg-[var(--form-input-surface-disabled)]',
          'block w-full flex-1 rounded-[8px] border-0 p-3 outline-none font-regular text-md ',
          'placeholder:text-[var(--form-input-border-default)] placeholder:text-sm ',
        )}
        type={type}
        ref={ref}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onFocus && onFocus(e);
        }}
        {...props}
        autoComplete="off"
      />
    );
  },
);
