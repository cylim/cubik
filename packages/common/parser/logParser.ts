import { BorshCoder, EventParser, web3 } from '@coral-xyz/anchor';

import { IDL } from '../IDL';

const PROGRAM_ID = new web3.PublicKey(
  'J7h267SDTYrgjieYQELW5NU3U2YUU1EqnEnXc8friHnZ',
);

const eventParser = new EventParser(PROGRAM_ID, new BorshCoder(IDL));

export const logParser = (logs: string[]) => eventParser.parseLogs(logs);
