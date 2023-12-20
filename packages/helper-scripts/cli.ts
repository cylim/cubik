/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createComponentNames,
  generateSemantic,
} from './src/color/generateCSS';
import { convertToCSSVariables } from './src/color/primitive';
// import { moveDataDevDB } from './src/data-move/move-dev-db';
import { seedFakeJoinEvents } from './src/seedfakedata';
import { replaceSvgWithBackup } from './src/svgDetect';

// generateSemantic();
// createComponentNames();
// replaceSvgWithBackup();
// convertToCSSVariables();
// moveDataDevDB();

seedFakeJoinEvents();
