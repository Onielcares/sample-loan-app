import { StatusCodes } from 'http-status-codes';
import { config } from '../config';

export class NotFoundError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = config.ErrorNames.RESOURCENOTFOUND;
    this.statusCode = StatusCodes.NOT_FOUND;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createNotFoundError = (message: string): NotFoundError => {
  return new NotFoundError(message);
};