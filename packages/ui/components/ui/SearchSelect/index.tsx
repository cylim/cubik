'use client';

import React from 'react';
import Select from 'react-select';
import type { Options } from 'react-select';
import makeAnimated from 'react-select/animated';

import { CustomComponents } from './customComponents';

export type { Options } from 'react-select';

type OptionType = {
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
  errorMessage?: string;
};

interface Props {
  options: Options<OptionType>[];
  value: Options<OptionType>[];
  onChange: (value: Options<OptionType>[]) => void;
  isMulti?: boolean;
  placeholder?: string;
  isSearchable?: boolean;
  onInputChange?: (newValue: string) => void;
  withoutBorder?: boolean;
  errorMessage?: string;
  defaultValue?: OptionType;
}

export const SearchSelect = ({
  options,
  value,
  onChange,
  isMulti,
  placeholder,
  isSearchable,
  onInputChange,
  defaultValue,
}: Props) => {
  const animatedComponents = makeAnimated(CustomComponents as any);

  return (
    <Select
      isMulti={isMulti}
      defaultValue={defaultValue}
      openMenuOnFocus={true}
      components={animatedComponents}
      isClearable={false}
      isSearchable={isSearchable}
      onChange={(e) => {
        if (isMulti) {
          onChange(e);
        } else {
          onChange(e);
        }
      }}
      onInputChange={(e, a) => {
        if (a.action === 'input-change' && onInputChange) {
          onInputChange(e);
        }
      }}
      value={value}
      placeholder={placeholder}
      options={options}
      unstyled={true}
      className="w-full"
    />
  );
};
