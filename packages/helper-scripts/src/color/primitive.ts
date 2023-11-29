import { writeFileSync } from 'fs';

import { data } from '../..';

export const primitiveColors = {
  '--white-white-50': '#FFFFFF',
  '--white-white-100': '#FAFAFA',
  '--white-white-200': '#F0F0F0',
  '--white-white-300': '#E0E0E0',
  '--white-white-400': '#C2C2C2',
  '--white-white-500': '#A8A8A8',
  '--white-white-600': '#8F8F8F',
  '--': '#FFFFFF',
  '--white-white-700': '#757575',
  '--white-grey-800': '#5C5C5C',
  '--black-black-50': '#ABABAB',
  '--black-black-100': '#919191',
  '--black-black-200': '#787878',
  '--black-black-300': '#5E5E5E',
  '--black-black-400': '#444444',
  '--black-black-500': '#333333',
  '--black-black-600': '#272727',
  '--black-black-700': '#1F1F1F',
  '--black-black-800': '#1A1A1A',
  '--black-black-900': '#0A0A0A',
  '--grey-grey-50': '#F7F7F8',
  '--grey-grey-100': '#E8E8ED',
  '--grey-grey-200': '#D1D1DB',
  '--grey-grey-300': '#A9A9BC',
  '--grey-grey-400': '#8A8AA3',
  '--grey-grey-500': '#6C6C89',
  '--grey-grey-600': '#55556D',
  '--grey-grey-700': '#3F3F50',
  '--grey-grey-800': '#282833',
  '--grey-grey-900': '#121217',
  '--blue-blue-50': '#F3FAFF',
  '--blue-blue-100': '#E7F5FF',
  '--blue-blue-200': '#CAE6FF',
  '--blue-blue-300': '#A0D6FF',
  '--blue-blue-400': '#5DB8FF',
  '--blue-blue-500': '#1199FF',
  '--blue-blue-500\\10': '#1199FF1A',
  '--blue-blue-600': '#0F8AE6',
  '--blue-blue-700': '#0B73BF',
  '--blue-blue-800': '#0A5C99',
  '--blue-blue-900': '#084B7D',
  '--purple-purple-50': '#F7F0FF',
  '--purple-purple-100': '#EEE1FF',
  '--purple-purple-200': '#E3CDFE',
  '--purple-purple-300': '#CFA7FF',
  '--purple-purple-400': '#B578FD',
  '--purple-purple-500': '#9946FC',
  '--purple-purple-500\\10': '#9946FC1A',
  '--purple-purple-600': '#8122F1',
  '--purple-purple-700': '#6A10D5',
  '--purple-purple-800': '#5F17B5',
  '--purple-purple-900': '#450F85',
  '--red-red-50': '#FFF1F2',
  '--red-red-100': '#FFE4E6',
  '--red-red-200': '#FECDD3',
  '--red-red-300': '#FDA4AF',
  '--red-red-400': '#FB7185',
  '--red-red-500': '#F43F5E',
  '--red-red-500\\10': '#F43F5E1A',
  '--red-red-600': '#E11D48',
  '--red-red-700': '#BE123C',
  '--red-red-800': '#9F1239',
  '--red-red-900': '#881337',
  '--yellow-yellow-50': '#FFFCF1',
  '--yellow-yellow-100': '#FFFAE4',
  '--yellow-yellow-200': '#FEF4CD',
  '--yellow-yellow-300': '#FDEBA4',
  '--yellow-yellow-400': '#FBDF71',
  '--yellow-yellow-500': '#F4D03F',
  '--yellow-yellow-500\\10': '#F4D03F1A',
  '--yellow-yellow-600': '#E1BA1D',
  '--yellow-yellow-700': '#BE9C12',
  '--yellow-yellow-800': '#9F8312',
  '--yellow-yellow-900': '#886E13',
  '--green-green-50': '#EBFFEE',
  '--green-green-100': '#E4FFED',
  '--green-green-200': '#CDFEDE',
  '--green-green-300': '#A4FDC3',
  '--green-green-400': '#71FBA1',
  '--green-green-500': '#3FF47E',
  '--green-green-500\\10': '#3FF47E1A',
  '--green-green-600': '#1DE162',
  '--green-green-700': '#12BE4E',
  '--green-green-800': '#129F43',
  '--green-green-900': '#13883C',
  '--orange-orange-50': '#FFF6F1',
  '--orange-orange-100': '#FFEDE4',
  '--orange-orange-200': '#FEDDCD',
  '--orange-orange-300': '#FDC2A4',
  '--orange-orange-400': '#FB9F71',
  '--orange-orange-500': '#F47B3F',
  '--orange-orange-500\\10': '#F47B3F1A',
  '--orange-orange-600': '#E15E1D',
  '--orange-orange-700': '#BE4B12',
  '--orange-orange-800': '#9F4112',
  '--orange-orange-900': '#883A13',
  '--pink-pink-50': '#FFF1FB',
  '--pink-pink-100': '#FFE4F8',
  '--pink-pink-200': '#FECDF1',
  '--pink-pink-300': '#FDA4E5',
  '--pink-pink-400': '#FB71D6',
  '--pink-pink-500': '#F43FC4',
  '--pink-pink-500\\10': '#F43FC41A',
  '--pink-pink-600': '#E11DAD',
  '--pink-pink-700': '#BE1290',
  '--pink-pink-800': '#9F1279',
  '--pink-pink-900': '#881369',
  '--neutral-neutral-25': '#F7F7F7',
  '--neutral-neutral-50': '#F2F2F2',
  '--neutral-neutral-75': '#EDEDED',
  '--neutral-neutral-100': '#E6E6E6',
  '--neutral-neutral-150': '#D9D9D9',
  '--neutral-neutral-200': '#CCCCCC',
  '--neutral-neutral-250': '#BFBFBF',
  '--neutral-neutral-300': '#B2B2B2',
  '--neutral-neutral-400': '#999999',
  '--neutral-neutral-500': '#808080',
  '--neutral-neutral-600': '#666666',
  '--neutral-neutral-700': '#4D4D4D',
  '--neutral-neutral-800': '#333333',
  '--neutral-neutral-820': '#2E2E2E',
  '--neutral-neutral-850': '#262626',
  '--neutral-neutral-880': '#1F1F1F',
  '--neutral-neutral-900': '#1A1A1A',
  '--neutral-neutral-920': '#141414',
  '--neutral-neutral-950': '#0D0D0D',
};

export function convertToCSSVariables() {
  const newDump = data.collections3.find(
    (e) => e.name === '_primitives ( Colors )',
  );
  let newdata = {};
  newDump?.modes[0].variables.forEach((color) => {
    // Split the name and take the relevant parts
    const parts = color.name.split('/');
    const variableName = parts.slice(1).join('-').toLowerCase();

    // Return the CSS variable format
    newdata = {
      ...newdata,
      [`--${variableName.replace('//', '--')}`]: color.value,
    };
  });
  writeFileSync('colors.json', JSON.stringify(newdata));
  console.log(newdata);
}
