import { StatusCodes } from 'http-status-codes';
import { config } from '../config';

export class ConflictError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = config.ErrorNames.RESOURCECONFLICTERROR;
    this.statusCode = StatusCodes.CONFLICT;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createConflictError = (message: string): ConflictError => {
  return new ConflictError(message);
};