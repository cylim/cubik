import { config } from 'dotenv';

// import {
//   // seedPDAInContributionV2,
//   // seedPDAInProject,
//   // seedPDAInProjectJoinRound,
//   // seedPDAInRound,
//   // seedPDAInUser,
// } from './utils/pdaSeeder';

export * from './src/color/serializeSemantic';
export * from './src/color/generateCSS';
export * from './src/color/primitive';
export * from './src/color/data';

// import { generateSlug } from './src/data-move/generate_slug';
// import { getDataFromInfura, uploadToInfura } from './utils/uploadToInfura';

// const apiKey = process.argv[2];
// const apiKeySecret = process.argv[3];
// const filePath = process.argv[4];

console.log('Helper Script Started');

config();

// generateSlug();
async function run() {
  try {
    // const upResult = await uploadToInfura(apiKey, apiKeySecret, filePath);
    // const getResult = await getDataFromInfura(
    //   apiKey,
    //   apiKeySecret,
    //   'QmVW4YdXa3FQ2z5yRvWJZj7U6y6m7Vz7xuQK5y7Z6RcYQF',
    //   'output.json',
    // );
    // await seedPDAInUser();
    // await seedPDAInRound(); seed length error
    // await seedPDAInProject();
    // await seedPDAInProjectJoinRound(); // round data dont exist so couldn't seed
    // await seedPDAInContributionV2();
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

run();
