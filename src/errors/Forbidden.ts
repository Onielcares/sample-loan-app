import { StatusCodes } from 'http-status-codes';
import { config } from '../config';

export class ForbiddenError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = config.ErrorNames.FORBIDDENERROR;
    this.statusCode = StatusCodes.FORBIDDEN;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createForbiddenError = (message: string): ForbiddenError => {
  return new ForbiddenError(message);
};