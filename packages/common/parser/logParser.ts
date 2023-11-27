import { BorshCoder, EventParser, web3 } from '@coral-xyz/anchor';

import { IDL } from '../IDL';

const PROGRAM_ID = new web3.PublicKey(process.env.PROGRAM_ID as string);

const eventParser = new EventParser(PROGRAM_ID, new BorshCoder(IDL));

export const logParser = (logs: string[]) => eventParser.parseLogs(logs);
