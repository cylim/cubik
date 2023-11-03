import { generateSlug } from '@scripts/data-move/generate_slug';
import { config } from 'dotenv';

console.log('Helper Script Started');

config();

generateSlug();
