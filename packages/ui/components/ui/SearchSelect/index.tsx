'use client';

import React from 'react';
import Select from 'react-select';
import type { Options } from 'react-select';
import makeAnimated from 'react-select/animated';

export type { Options } from 'react-select';
export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
interface Props {
  options: Options<Option>[];
  value: Options<Option>[];
  onChange: (value: Options<Option>[]) => void;
  isMulti?: boolean;
  placeholder?: string;
  onInputChange?: (newValue: string) => void;
}
const animatedComponents = makeAnimated();
export const SearchSelect = ({
  options,
  value,
  onChange,
  isMulti,
  placeholder,
  onInputChange,
}: Props) => {
  return (
    <Select
      defaultValue={value}
      isMulti={isMulti}
      components={animatedComponents}
      onChange={(e) => {
        if (isMulti) {
          onChange(e as Options<Option>[]);
        } else {
          onChange([e as Options<Option>]);
        }
      }}
      onInputChange={(e, a) => {
        if (a.action === 'input-change' && onInputChange) {
          onInputChange(e);
        }
      }}
      value={value}
      placeholder={placeholder}
      className="text-[var(--form-input-fg-default)] w-full bg-[var(--form-input-surface-default)] placeholder:text-[var(--form-input-border-default)]  hover:outline-[var(--form-input-border-hovered)] hover:bg-[var(--form-input-surface-hovered)"
      options={options}
    />
  );
};
