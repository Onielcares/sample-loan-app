import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { logger } from '../utils/logger';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false,
  }
);

export const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Database connected successfully');
    await sequelize.sync(); // or .sync({ alter: true }) if you want auto updates
    logger.info('All Models and Table Accessed');
  } catch (error) {
    logger.error(`DB connection failed: ${error}`);
    process.exit(1);
  }
};

export default sequelize;