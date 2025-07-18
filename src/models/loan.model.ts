import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import { LoanStatus } from '../enums/loanStatus.enum';

interface LoanAttributes {
  id: number;
  userId: number;
  amount: number;
  interestRate?: number;
  durationMonths?: number;
  monthlyRepayment?: number;
  status: LoanStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

interface LoanCreationAttributes extends Optional<LoanAttributes, 'id' | 'status'> {}

export class Loan extends Model<LoanAttributes, LoanCreationAttributes> implements LoanAttributes {
  public id!: number;
  public userId!: number;
  public amount!: number;
  public interestRate?: number;
  public durationMonths?: number;
  public monthlyRepayment?: number;
  public status!: LoanStatus;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Loan.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  interestRate: DataTypes.FLOAT,
  durationMonths: DataTypes.INTEGER,
  monthlyRepayment: DataTypes.FLOAT,
  status: {
    type: DataTypes.ENUM(...Object.values(LoanStatus)),
    defaultValue: LoanStatus.PENDING,
  },
}, {
  sequelize,
  tableName: 'loans',
});