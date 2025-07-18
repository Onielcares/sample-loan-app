import { StatusCodes } from 'http-status-codes';
import { config } from '../config';

export class MethodNotAllowedError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = config.ErrorNames.METHODNOTALLOWEDERROR;
    this.statusCode = StatusCodes.METHOD_NOT_ALLOWED;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createMethodNotAllowedError = (message: string): MethodNotAllowedError => {
  return new MethodNotAllowedError(message);
};