import { NextFunction, Request, Response } from 'express';

import HttpException from '../exceptions/httpException';

function errorMiddleware(
  err: HttpException,
  _request: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
}

export default errorMiddleware;
