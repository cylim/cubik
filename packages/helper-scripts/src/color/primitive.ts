import { writeFileSync } from 'fs';

import { convertToCSS, data } from '../..';

export function convertToCSSVariables() {
  const newDump = data.collections3.find(
    (e) => e.name === '_primitives ( Colors )',
  );
  let newdata = {};
  newDump?.modes[0].variables.forEach((color) => {
    // Split the name and take the relevant parts
    const parts = color.name.split('/');
    const variableName = parts.slice(1).join('-').toLowerCase();
    if (!variableName) {
      return (newdata = {
        ...newdata,
        [`--color-${parts[0].toLowerCase()}`]: color.value,
      });
    }
    // Return the CSS variable format
    const vn = `${variableName.replace('\\', '-')}`;
    const finalVN = vn.split('-').slice(1, vn.split('-').length).join('-');
    newdata = {
      ...newdata,
      [`--color-${finalVN}`]: color.value,
    };
  });
  writeFileSync('colors.json', convertToCSS(newdata));
  console.log(newdata);
}
