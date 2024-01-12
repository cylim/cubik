/* eslint-disable @typescript-eslint/ban-ts-comment */

// 'use client';

// import React, { useEffect, useState } from 'react';

// import { Icon } from '../../../icons/icon';
// import { iconLibrary } from '../../../icons/iconLibrary';

// interface ISearchSelectProps {
//   title: string;
//   rightIconName?: keyof typeof iconLibrary;
//   inputValue?: string;
//   setInputValue?: (value: string) => void;
// }

// const SearchSelect = ({
//   title,
//   rightIconName,
//   inputValue = '',
//   setInputValue,
// }: ISearchSelectProps) => {
//   const [countries, setCountries] = useState(null);

//   const [selected, setSelected] = useState('');
//   const [open, setOpen] = useState(false);

//   const options = [
//     { name: 'Afghanistan', independent: false },
//     { name: 'Åland Islands', independent: false },
//     { name: 'Albania', independent: false },
//     { name: 'Algeria', independent: false },
//     { name: 'American Samoa', independent: false },
//     { name: 'Andorra', independent: false },
//   ];
//   return (
//     <div className="w-72 font-medium ">
//       <div
//         onClick={() => setOpen(!open)}
//         className={`bg-[var(--form-input-surface-default)] text-[var(--form-input-fg-default)] w-full p-2 flex items-center justify-between rounded-lg border border-[var(form-input-border-default)] `}
//       >
//         {title}
//         {rightIconName && (
//           <Icon
//             name={'chevronDown'}
//             height={18}
//             width={18}
//             color="var(--form-input-fg-default)"
//           />
//         )}
//       </div>
//       <ul
//         className={`bg-white mt-2 overflow-y-auto ${
//           open ? 'max-h-60' : 'max-h-0'
//         } `}
//       >
//         {setInputValue && (
//           <div className="flex items-center px-2 sticky top-0 bg-white">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value.toLowerCase())}
//               placeholder="Search"
//               className="placeholder:text-gray-700 p-2 outline-none"
//             />
//             <Icon
//               name="search"
//               height={20}
//               width={20}
//               color="var(--menu-header-fg)"
//             />
//           </div>
//         )}

//         {options?.map((country) => (
//           <li
//             key={country?.name}
//             className={`p-2 text-sm hover:bg-sky-600 hover:text-white
//             ${
//               country?.name?.toLowerCase() === selected?.toLowerCase() &&
//               'bg-sky-600 text-white'
//             }
//             ${
//               country?.name?.toLowerCase().startsWith(inputValue)
//                 ? 'block'
//                 : 'hidden'
//             }`}
//             onClick={() => {
//               if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
//                 setSelected(country?.name);
//                 setOpen(false);
//                 setInputValue('');
//               }
//             }}
//           >
//             {country?.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export { SearchSelect };

'use client';

import React from 'react';
import Select from 'react-select';
import type { CSSObjectWithLabel, Options } from 'react-select';
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
      options={options}
      className="w-full"
      //@ts-ignore
      styles={{
        //@ts-ignore
        control: (baseStyles: CSSObjectWithLabel, state) => ({
          ...baseStyles,
          borderColor: state.isFocused
            ? 'var(--form-input-border-focused)'
            : 'var(--form-input-border-default)',
          backgroundColor: 'var(--form-input-surface-default)',
          borderRadius: '8px',
          width: '100% !important',
        }),
        //@ts-ignore
        placeholder: (baseStyles) => ({
          ...baseStyles,
          fontSize: '12px',
          fontWeight: 400,
          color: 'var(--form-input-border-default)',
        }),
        //@ts-ignore
        dropdownIndicator: (provided) => ({
          ...provided,
          background: '',
          borderColor: 'transparent !important',
          outline: '0px !important',
          boxShadow: '0',
          p: 0,
          w: '60px',
          color: 'var(--form-input-fg-default)',
          _hover: {
            color: 'var(--form-input-fg-default)',
          },
        }),
        //@ts-ignore
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none',
        }),
        //@ts-ignore
        menu: (provided) => ({
          ...provided,
          scroll: 'no-scrollbar',
          boxShadow:
            '0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
          backgroundColor: 'var(--menu-list-surface)',

          borderRadius: '12px',
        }),
        //@ts-ignore
        menuList: (provided) => ({
          ...provided,
          backgroundColor: 'var(--menu-list-surface)',
          border: '1px solid var(--menu-list-item-border)',
          borderRadius: '12px',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }),
        //@ts-ignore
        option: (provided) => ({
          ...provided,
          color: 'var(--menu-list-item-fg-default)',
          fontSize: '14px',
          fontWeight: '400',
          backgroundColor: 'transparent',
          _hover: {
            backgroundColor: 'var(--menu-list-item-surface-hovered)',
          },
          ':active': {
            backgroundColor: 'var(--menu-list-item-surface-hovered)',
          },
        }),
      }}
      // theme={(theme: ThemeConfig) => ({
      //   ...theme,
      //   borderRadius: '8px',
      //   colors: {
      //     neutral0: 'var(--form-input-surface-default)',
      //     neutral50: 'var(--form-input-border-default)',
      //     neutral80: 'var(--form-input-fg-default)',
      //     neutral20: 'var(--form-input-border-hovered)',
      //     neutral60: 'var(--form-input-border-default)',
      //     neutral90: '#F43F5E',
      //   },
      // })}
    />
  );
};

// className="text-[var(--form-input-fg-default)] w-full bg-[var(--form-input-surface-default)] placeholder:text-[var(--form-input-border-default)]  hover:outline-[var(--form-input-border-hovered)] hover:bg-[var(--form-input-surface-hovered)"
