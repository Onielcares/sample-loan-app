// errors/index.ts

import { BadRequestError, createBadRequestError } from './BadRequest';
import { ConflictError, createConflictError } from './Conflict';
import { MethodNotAllowedError, createMethodNotAllowedError } from './MethodNotAllowed';
import { NotFoundError, createNotFoundError } from './NotFound';
import { UnauthorizedError, createUnauthorizedError } from './Unauthorized';
import { UnprocessableEntityError, createUnprocessableEntityError } from './UnprocessableEntity';
import { ForbiddenError, createForbiddenError } from './Forbidden';
import { NotAcceptableError, createNotAcceptableError } from './Unacceptable';
import { CustomError } from './CustomError';

export {
  // Error classes
  BadRequestError,
  ConflictError,
  MethodNotAllowedError,
  NotFoundError,
  UnauthorizedError,
  UnprocessableEntityError,
  ForbiddenError,
  NotAcceptableError,
  CustomError,

  // Creator functions
  createBadRequestError,
  createConflictError,
  createMethodNotAllowedError,
  createNotFoundError,
  createUnauthorizedError,
  createForbiddenError,
  createUnprocessableEntityError,
  createNotAcceptableError,
};
