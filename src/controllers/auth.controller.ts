import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AuthService } from '../services/auth.service';
import { sendSuccessResponse } from '../utils/success-response';
import { logger } from '../utils/logger';

const authService = new AuthService();

export class AuthController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    logger.info('[AuthController] Register User');

    try {
      const result = await authService.registerUser(req.body);

      return sendSuccessResponse(res, {
        message: 'User registered successfully',
        data: result,
      }, StatusCodes.CREATED);
    } catch (error) {
      return next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    logger.info('[AuthController] Login User');

    try {
      const result = await authService.loginUser(req.body);

      return sendSuccessResponse(res, {
        message: 'User logged in successfully',
        data: result,
      }, StatusCodes.OK);
    } catch (error) {
      return next(error);
    }
  }
}