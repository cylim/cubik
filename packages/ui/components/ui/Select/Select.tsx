'use client';

import React from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import ReactAsyncSelect from 'react-select/async';
import { v4 as uuidV4 } from 'uuid';

import { Options, SelectOptionsType } from '@cubik/common-types';

import { CustomComponents } from './customComponents';

interface Props {
  options: SelectOptionsType[];
  onChange: (e: string) => void;
  value?: SelectOptionsType[];
  size?: 'sm' | 'md' | 'lg';
  isMulti?: boolean;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  onInputChange?: (newValue: string) => void;
  withoutBorder?: boolean;
  errorMessage?: string;
  loadingMessage?: string;
  defaultValue?: SelectOptionsType;
}

export const Select = ({
  options,
  value,
  onChange,
  isMulti,
  placeholder,
  isSearchable,
  onInputChange,
  defaultValue,
  errorMessage,
  loadingMessage,
  isClearable,
  size = 'sm',
}: Props) => {
  const animatedComponents = makeAnimated(CustomComponents as any);
  const isSmallerDevice = useMediaQuery('(max-width: 768px)');
  const randomId = uuidV4();
  return (
    <ReactSelect
      id={randomId}
      isMulti={isMulti}
      defaultValue={defaultValue}
      openMenuOnFocus={true}
      components={animatedComponents}
      isClearable={isClearable}
      isSearchable={isSearchable}
      loadingMessage={() => {
        return loadingMessage || 'Loading...';
      }}
      onChange={(e) => {
        if (isMulti) {
          onChange(e as any);
        } else {
          if (e) {
            console.log('on change - ', e.value);
            onChange(e.value);
          }
        }
      }}
      onInputChange={(e, a) => {
        console.log('on input change');
        if (a.action === 'input-change' && onInputChange) {
          onInputChange(e);
        }
      }}
      value={value}
      placeholder={placeholder}
      options={options}
      unstyled={true}
      styles={{
        control: () => ({
          size: size,
        }),
        option: () => ({
          size: size,
        }),
        singleValue: () => ({
          size: size,
        }),
        valueContainer: () => ({
          size: size,
        }),
        placeholder: () => ({
          size: size,
        }),
        dropdownIndicator: () => ({
          size: isSmallerDevice ? 16 : 20,
        }),
      }}
      className="w-full"
    />
  );
};
// async pops extends props
interface asyncProps extends Props {
  loadOptions: (inputValue: string, callback: any) => void;
}
export const AsyncSelect = ({
  options,
  loadOptions,
  value,
  onChange,
  isMulti,
  placeholder,
  isSearchable,
  onInputChange,
  defaultValue,
  errorMessage,
  loadingMessage,
  isClearable,
  size = 'sm',
}: asyncProps) => {
  const animatedComponents = makeAnimated(CustomComponents as any);
  const randomId = uuidV4();
  const isSmallerDevice = useMediaQuery('(max-width: 768px)');

  return (
    <ReactAsyncSelect
      cacheOptions={true}
      loadOptions={loadOptions}
      id={randomId}
      isMulti={isMulti}
      defaultValue={defaultValue}
      openMenuOnFocus={true}
      components={animatedComponents}
      isClearable={isClearable}
      isSearchable={isSearchable}
      loadingMessage={() => {
        return loadingMessage || 'Loading...';
      }}
      onChange={(e) => {
        console.log('on change');
        if (isMulti) {
          onChange(e as any);
        } else {
          onChange(e as any);
        }
      }}
      onInputChange={(e, a) => {
        console.log('on input change');
        if (a.action === 'input-change' && onInputChange) {
          onInputChange(e);
        }
      }}
      value={value}
      placeholder={placeholder}
      options={options}
      unstyled={true}
      styles={{
        control: () => ({
          size: size,
        }),
        option: () => ({
          size: size,
        }),
        singleValue: () => ({
          size: size,
        }),
        valueContainer: () => ({
          size: size,
        }),
        placeholder: () => ({
          size: size,
        }),
        dropdownIndicator: () => ({
          size: isSmallerDevice ? 16 : 20,
        }),
      }}
      className="w-full"
    />
  );
};
