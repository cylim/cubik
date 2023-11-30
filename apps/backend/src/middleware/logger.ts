import winston, { format } from 'winston';
import { WinstonTransport as AxiomTransport } from '@axiomhq/winston';
const {  errors } = winston.format;

export const prettyJSON = (data: unknown) => JSON.stringify(data, null, 2);

const alignedWithColorsAndTime = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  format.json(),
  errors({ stack: true }),
);

const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const axiomTransport = new AxiomTransport({
  dataset: 'backend',
  token: process.env.AXIOM_TOKEN as string,
  orgId: process.env.AXIOM_ORG_ID as string,
})

// Don't enable slack in testing
const transports: winston.transport[] = [
  axiomTransport,
];

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  level: 'info',
  format: alignedWithColorsAndTime,
  transports: [new winston.transports.Console(options.console), ...transports],
  exceptionHandlers: [axiomTransport],
  rejectionHandlers: [axiomTransport],
  exitOnError: false,
});

export default logger;
