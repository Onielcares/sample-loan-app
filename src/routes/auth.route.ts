import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { logger } from '../utils/logger';

const authRoute = Router();
const authController = new AuthController();

logger.info('Accessing all Authentication Routes');

authRoute.post('/register', (req, res, next) =>
  authController.registerUser(req, res, next)
);

authRoute.post('/login', (req, res, next) =>
  authController.loginUser(req, res, next)
);

export default authRoute;