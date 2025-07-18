import { StatusCodes } from 'http-status-codes';
import { config } from '../config';

export class NotAcceptableError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = config.ErrorNames.NOTACCEPTABLEERROR;
    this.statusCode = StatusCodes.NOT_ACCEPTABLE;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createNotAcceptableError = (message: string): NotAcceptableError => {
  return new NotAcceptableError(message);
};