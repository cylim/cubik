import type { NextRequest } from 'next/server';
import { Logger } from 'next-axiom';
import { LogLevel } from 'next-axiom/dist/logger';
import { ILogObj, Logger as TsLogger } from 'tslog';
import { v4 as uuidV4 } from 'uuid';

import { AuthPayload } from '@cubik/common-types';
import { AuthPayload as AdminAuthPayload } from '@cubik/common-types/src/admin';

const tslog: TsLogger<ILogObj> = new TsLogger();

const createLogger = (source: string) => {
  return new Logger({
    logLevel: LogLevel.info,
    source,
    autoFlush: true,
  });
};

export const log = (
  message: string,
  data?: string | object | number | undefined | null,
) => {
  if (data) {
    return tslog.info(message, data);
  }

  return tslog.info(message);
};
export const logError = (
  message: string | number | object,
  error?: unknown,
  logFullError = false,
) => {
  const errorMessage = error instanceof Error ? error?.message : error;

  // eslint-disable-next-line no-console
  return tslog.error(message, logFullError ? error : errorMessage);
};

export const logApi = (
  {
    level = 'info',
    error = null,
    body,
    message,
    user,
    req,
    statusCode = null,
    source,
  }: {
    level?: 'info' | 'error' | 'debug';
    error?: string | null | unknown;
    body?: object;
    message: string;
    user?: AuthPayload | AdminAuthPayload | null;
    req?: NextRequest;
    statusCode?: 200 | 201 | 400 | 401 | 500 | null;
    source?: string;
  },
  data?: object,
) => {
  const logId = uuidV4();
  let reqData: object | null = null;
  const logger = createLogger(source ?? 'default');

  if (req?.nextUrl) {
    const { host, hostname, origin, pathname } = req.nextUrl;

    reqData = {
      ip: req?.ip ?? '127.0.0.1',
      method: req?.method ?? null,
      url: req?.url ?? null,
      geo: req?.geo ?? null,
      'user-agent': req?.headers?.get('user-agent') ?? null,
      host,
      hostname,
      origin,
      pathname,
    };
  }

  const logData = {
    logId,
    user: user
      ? {
          wallet: user.mainWallet,
        }
      : null,
    request: reqData,
    error: error instanceof Error ? error.message : error,
    response: {
      statusCode,
    },
    body: [body ?? null],
    data: [data ?? null],
  };

  const logLevel = error ? 'error' : level;

  const logMessage = `${logId} - ${message}`;

  // if (error) {
  //   logError(logMessage, error);
  // } else {
  //   log(logMessage, logData);
  // }

  return logger[logLevel](logMessage, logData);
};
