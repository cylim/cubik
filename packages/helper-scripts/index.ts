import { config } from 'dotenv';

// import { generateSlug } from './src/data-move/generate_slug';
import { getDataFromInfura, uploadToInfura } from './utils/uploadToInfura';

const apiKey = process.argv[2];
const apiKeySecret = process.argv[3];
const filePath = process.argv[4];

console.log('Helper Script Started');

config();

// generateSlug();
async function run() {
  try {
    const upResult = await uploadToInfura(apiKey, apiKeySecret, filePath);

    const getResult = await getDataFromInfura(
      apiKey,
      apiKeySecret,
      'QmVW4YdXa3FQ2z5yRvWJZj7U6y6m7Vz7xuQK5y7Z6RcYQF',
      'output.json',
    );

    console.log('File uploaded successfully:', upResult);
    console.log('File get successfully:', getResult.Data);
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

run();
