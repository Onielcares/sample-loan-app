import { StatusCodes } from 'http-status-codes';
import { config } from '../config';

export class UnauthorizedError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = config.ErrorNames.UNAUTHORIZEDERROR;
    this.statusCode = StatusCodes.UNAUTHORIZED;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createUnauthorizedError = (message: string): UnauthorizedError => {
  return new UnauthorizedError(message);
};