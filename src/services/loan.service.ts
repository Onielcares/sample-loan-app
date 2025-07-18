import { logger } from '../utils/logger';
import { loanApplicationSchema, loanApprovalSchema } from '../validators/loan.validator';
import { LoanRepository } from '../repositories/loan.repository';
import { throwBadRequestError, throwNotFoundError } from '../utils/throwError';
import { LoanStatus } from '../enums/loanStatus.enum';

export class LoanService {
  private loanRepository = new LoanRepository();

  async applyForLoan(userId: number, payload: { amount: number }) {
    logger.info(`[LoanService] Validating loan application`);
    const { error } = loanApplicationSchema.validate(payload);
    if (error) throwBadRequestError(error.details[0].message);

    logger.info(`[LoanService] Creating loan for userId: ${userId}`);
    return await this.loanRepository.applyLoan(userId, payload.amount);
  }

  async approveLoan(loanId: number, payload: { status: LoanStatus }) {
    logger.info(`[LoanService] Validating approval payload`);
    const { error } = loanApprovalSchema.validate(payload);
    if (error) throwBadRequestError(error.details[0].message);

    logger.info(`[LoanService] Approving loan with ID: ${loanId}`);
    const loan = await this.loanRepository.approveLoan(loanId, payload.status);
    if (!loan) throwNotFoundError('Loan not found');

    return loan;
  }

  async getLoanStatus(loanId: number) {
    logger.info(`[LoanService] Fetching status for loan ID: ${loanId}`);
    const loan = await this.loanRepository.getLoanStatus(loanId);
    if (!loan) throwNotFoundError('Loan not found');
    return loan;
  }
}