import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ResponseData {
  [key: string]: any;
}

export const sendSuccessResponse = (
  res: Response,
  data: ResponseData = {},
  status: number = StatusCodes.OK
): void => {
  res.status(status).json({
    success: true,
    status,
    ...data,
    timestamp: new Date().toISOString(),
  });
};