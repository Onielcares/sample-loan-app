import express from 'express';
import authRoutes from './routes/auth.route';
import loanRoutes from './routes/loan.route';
import { errorHandler } from './middlewares/error.middleware';

const app = express();
const API_PREFIX = '/api/v1';

app.use(express.json());

app.use(`${API_PREFIX}/auth`, authRoutes);
app.use(`${API_PREFIX}/loans`, loanRoutes);

app.use(errorHandler);

export default app;