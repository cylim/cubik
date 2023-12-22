/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createComponentNames,
  generateSemantic,
} from './src/color/generateCSS';
import { convertToCSSVariables } from './src/color/primitive';
// import { moveDataDevDB } from './src/data-move/move-dev-db';
import {
  seedFakeComments,
  seedFakeContributions,
  seedFakeEvents,
  seedFakeJoinEvents,
  seedFakeProjects,
  seedFakeUsers,
} from './src/seedfakedata';
import { replaceSvgWithBackup } from './src/svgDetect';

// generateSemantic();
// createComponentNames();
// replaceSvgWithBackup();
// convertToCSSVariables();
// moveDataDevDB();

seedFakeUsers();
seedFakeProjects();
seedFakeComments();
seedFakeEvents();
seedFakeJoinEvents();
seedFakeContributions();
