import React, { useState } from 'react';

import { Icon } from '../../../icons/icon';
import {
  InputField,
  InputFieldContainer,
  InputLeftElement,
} from '../../ui/InputField';
import { Tag } from '../../ui/Tag';
import { Text } from '../../ui/text/text';

interface OptionsType {
  label: string;
  value: string;
}
interface Props {
  options: OptionsType[];
  value: OptionsType[];
  onChange: (value: OptionsType[]) => void;
}
export const MultiSelect = ({ options, value, onChange }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <div className="relative">
      <InputFieldContainer variant="md">
        {value.length === 0 && (
          <InputLeftElement withBorder={false}>
            <Icon className="w-4 h-4" name="search" />
          </InputLeftElement>
        )}
        {value.length > 0 &&
          value.map((option) => (
            <Tag key={option.value} variant="solid">
              {option.label}
            </Tag>
          ))}
        <InputField
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          placeholder="Search Category here"
        />
      </InputFieldContainer>
      {isFocused && (
        <div className="h-40 mt-2 sticky bottom-0 left-0 right-0 z-50 overflow-y-scroll  w-full bg-[var(--form-input-surface-default)] rounded-lg">
          {options.map((option) => {
            return (
              <div
                onClick={() => {
                  onChange([...value, option]);
                }}
                key={option.label}
                className="px-2 hover:bg-white/10"
              >
                <Text color={'secondary'} className="l1">
                  {option.label}
                </Text>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
