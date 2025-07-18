import { Request, Response, NextFunction } from 'express';
import { LoanService } from '../services/loan.service';
import { sendSuccessResponse } from '../utils/success-response';
import { StatusCodes } from 'http-status-codes';
import { logger } from '../utils/logger';

const loanService = new LoanService();

export class LoanController {
  async applyForLoan(req: Request, res: Response, next: NextFunction) {
    logger.info('[LoanController] POST /loans/apply');
    try {
      const loan = await loanService.applyForLoan(req.user!.id, req.body);
      return sendSuccessResponse(res, {
        message: 'Loan application submitted',
        data: loan,
      }, StatusCodes.CREATED);
    } catch (error) {
      return next(error);
    }
  }

  async approveLoan(req: Request, res: Response, next: NextFunction) {
    logger.info('[LoanController] PATCH /loans/:id/approve');
    try {
      const loanId = parseInt(req.params.id);
      const loan = await loanService.approveLoan(loanId, req.body);
      return sendSuccessResponse(res, {
        message: 'Loan approval updated',
        data: loan,
      }, StatusCodes.OK);
    } catch (error) {
      return next(error);
    }
  }

  async getLoanStatus(req: Request, res: Response, next: NextFunction) {
    logger.info('[LoanController] GET /loans/:id/status');
    try {
      const loan = await loanService.getLoanStatus(parseInt(req.params.id));
      return sendSuccessResponse(res, {
        message: 'Loan status retrieved',
        data: { status: loan?.status },
      }, StatusCodes.OK);
    } catch (error) {
      return next(error);
    }
  }
}