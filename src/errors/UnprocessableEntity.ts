import { StatusCodes } from 'http-status-codes';
import { config } from '../config';

export class UnprocessableEntityError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = config.ErrorNames.UNPROCESSABLEENTITYERROR;
    this.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createUnprocessableEntityError = (message: string): UnprocessableEntityError => {
  return new UnprocessableEntityError(message);
};