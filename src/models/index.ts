import sequelize from '../config/db';
import { User } from './user.model';
import { Loan } from './loan.model';

User.hasMany(Loan, { foreignKey: 'userId' });
Loan.belongsTo(User, { foreignKey: 'userId' });

export { sequelize, User, Loan };