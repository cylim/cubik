import type { NextRequest } from 'next/server';
import { Logger } from 'next-axiom';
import { LogLevel } from 'next-axiom/dist/logger';

import { AuthPayload } from '@cubik/common-types';
import { AuthPayload as AdminAuthPayload } from '@cubik/common-types/src/admin';

const createLogger = (source: string) => {
  return new Logger({
    logLevel: LogLevel.info,
    source,
  });
};

export const log = (
  message: string,
  data?: string | object | number | undefined | null,
) => {
  if (data) {
    // eslint-disable-next-line no-console
    return console.log(message, data);
  }

  // eslint-disable-next-line no-console
  return console.log(message);
};
export const logError = (
  message: string | number | object,
  error?: unknown,
  logFullError = false,
) => {
  const errorMessage = error instanceof Error ? error?.message : error;

  // eslint-disable-next-line no-console
  return console.error(message, logFullError ? error : errorMessage);
};
export const logApi = (
  {
    logId,
    level = 'info',
    error = null,
    body,
    message,
    user,
    req,
    statusCode = null,
    source,
  }: {
    logId: `${string}-${string}-${string}-${string}-${string}`;
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

  if (error) {
    logError(logMessage, error);
  } else {
    log(logMessage, logData);
  }

  return logger[logLevel](logMessage, logData);
};
