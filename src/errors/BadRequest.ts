import { StatusCodes } from 'http-status-codes';
import { config } from '../config';

export class BadRequestError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = config.ErrorNames.BADREQUEST;
    this.statusCode = StatusCodes.BAD_REQUEST;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createBadRequestError = (message: string): BadRequestError => {
  return new BadRequestError(message);
};
