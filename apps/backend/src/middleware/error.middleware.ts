import { Request, Response } from 'express';
import HttpException from '../exceptions/httpException';

function errorMiddleware(
  error: HttpException,
  _request: Request,
  response: Response,
) {
  const status = error.status ?? 500;
  const message = error.message ?? 'Something went wrong';
  return response.status(status).send({
    message,
    status,
  });
}

export default errorMiddleware;
