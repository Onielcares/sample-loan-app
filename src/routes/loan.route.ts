import { Router } from 'express';
import { LoanController } from '../controllers/loan.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { logger } from '../utils/logger';

const loanRoute = Router();
const loanController = new LoanController();

logger.info('Accessing all Loan Routes');

loanRoute.post('/apply', authenticate, (req, res, next) =>
  loanController.applyForLoan(req, res, next)
);

loanRoute.patch('/:id/approve', authenticate, (req, res, next) =>
  loanController.approveLoan(req, res, next)
);

loanRoute.get('/:id/status', authenticate, (req, res, next) =>
  loanController.getLoanStatus(req, res, next)
);

export default loanRoute;