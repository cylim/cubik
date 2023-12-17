/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createComponentNames,
  generateSemantic,
} from './src/color/generateCSS';
import { convertToCSSVariables } from './src/color/primitive';
import { replaceSvgWithBackup } from './src/svgDetect';

generateSemantic();
createComponentNames();
replaceSvgWithBackup();
convertToCSSVariables();
