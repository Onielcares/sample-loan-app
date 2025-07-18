import Joi from 'joi';

export const loanApplicationSchema = Joi.object({
  amount: Joi.number()
    .positive()
    .max(1_000_000)
    .required()
    .messages({
      'number.base': 'Loan amount must be a number',
      'number.positive': 'Loan amount must be positive',
      'number.max': 'Loan amount cannot exceed ₦1,000,000',
      'any.required': 'Loan amount is required',
    }),
});

export const loanApprovalSchema = Joi.object({
  status: Joi.string().valid('APPROVED', 'REJECTED').required(),
});