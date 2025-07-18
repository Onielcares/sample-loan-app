import express from 'express';
import authRoutes from './routes/auth.route';
import loanRoutes from './routes/loan.route';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/loans', loanRoutes);

app.use(errorHandler);

export default app;