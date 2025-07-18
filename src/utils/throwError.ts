import { ReasonPhrases } from 'http-status-codes';
import { ErrorNames } from '../constants/errorNames';
import {
  createBadRequestError,
  createConflictError,
  createForbiddenError,
  createMethodNotAllowedError,
  createNotAcceptableError,
  createNotFoundError,
  createUnauthorizedError,
  createUnprocessableEntityError,
  CustomError,
} from '../errors';

export const throwBadRequestError = (message: string): never => {
  throw createBadRequestError(message);
};

export const throwConflictError = (message: string): never => {
  throw createConflictError(message);
};

export const throwMethodNotAllowedError = (message: string): never => {
  throw createMethodNotAllowedError(message);
};

export const throwNotFoundError = (message: string): never => {
  throw createNotFoundError(message);
};

export const throwUnauthorizedError = (message?: string): never => {
  throw createUnauthorizedError(message || 'Unauthorized access.');
};

export const throwUnprocessableEntityError = (message: string): never => {
  throw createUnprocessableEntityError(message);
};

export const throwForbiddenError = (message: string): never => {
  throw createForbiddenError(message);
};

export const throwNotAcceptableError = (message: string): never => {
  throw createNotAcceptableError(message);
};

export const throwServerError = (message?: string): never => {
  throw new CustomError(`${message || ReasonPhrases.INTERNAL_SERVER_ERROR}:${ErrorNames.SERVERERROR}`);
};