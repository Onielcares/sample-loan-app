import { Loan } from '../models/loan.model';
import { LoanStatus } from '../enums/loanStatus.enum';

export class LoanRepository {
  async applyLoan(userId: number, amount: number) {
    return await Loan.create({ userId, amount });
  }

  async approveLoan(id: number, status: LoanStatus) {
    const loan = await Loan.findByPk(id);
    if (!loan) return null;
    loan.status = status;
    return await loan.save();
  }

  async getLoanStatus(id: number) {
    return await Loan.findByPk(id);
  }
}