/* eslint-disable @typescript-eslint/no-unused-vars */
// import { prisma } from '@cubik/database';

// import { uploadURLsToCloudflare } from '../helper-scripts/utils/uploadToCloudflare';
import {
  createComponentNames,
  generateSemantic,
} from './src/color/generateCSS';
import { convertToCSSVariables } from './src/color/primitive';
import { moveTeamData } from './src/migration/moveTeam';

// import { moveDataDevDB } from './src/data-move/move-dev-db';
// import { replaceSvgWithBackup } from './src/svgDetect';

// generateSemantic();
// createComponentNames();
// replaceSvgWithBackup();
convertToCSSVariables();

// moveTeamData().catch((e) => {
//   console.error(e);
// });
