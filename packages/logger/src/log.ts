import { WinstonTransport as AxiomTransport } from '@axiomhq/winston';
import winston, { format } from 'winston';

const { errors } = winston.format;

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

interface Logger {
  level: 'info' | 'error' | 'debug';
  dataset: string;
  token: string;
}
export const createLogger = ({ level, dataset, token }: Logger) => {
  const axiomTransport = new AxiomTransport({
    dataset: dataset || 'backend',
    token: token || (process.env.AXIOM_TOKEN as string),
  });

  // Don't enable slack in testing
  const transports: winston.transport[] = [axiomTransport];

  const logger = winston.createLogger({
    levels: winston.config.npm.levels,
    level: level || 'info',
    format: alignedWithColorsAndTime,
    transports: [
      new winston.transports.Console(options.console),
      ...transports,
    ],
    exceptionHandlers: [axiomTransport],
    rejectionHandlers: [axiomTransport],
    exitOnError: false,
  });

  return logger;
};
