import bcrypt from 'bcrypt';
import { logger } from '../utils/logger';
import { UserRepository } from '../repositories/user.repository';
import { registerSchema, loginSchema } from '../validators/auth.validator';
import { throwBadRequestError, throwUnauthorizedError } from '../utils/throwError';
import { generateToken } from '../utils/jwt';

export class AuthService {
  private userRepository = new UserRepository();

  async registerUser(payload: { email: string; password: string }) {
    logger.info(`[AuthService] Creating user with email: ${payload.email}`);

    logger.info('[AuthService] Validating registration payload');
    const { error } = registerSchema.validate(payload);
    if (error) throwBadRequestError(error.details[0].message);

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    logger.info('[AuthService] Saving user to database');
    const user = await this.userRepository.createUser(payload.email, hashedPassword);

    return { id: user.id, email: user.email };
  }

  async loginUser(payload: { email: string; password: string }) {
    logger.info(`[AuthService] Attempting login for email: ${payload.email}`);

    logger.info('[AuthService] Validating login payload');
    const { error } = loginSchema.validate(payload);
    if (error) throwBadRequestError(error.details[0].message);

    const user = await this.userRepository.findByEmail(payload.email);
    if (!user) throwUnauthorizedError('Invalid credentials');

    const isValid = await bcrypt.compare(payload.password, user!.password);
    if (!isValid) throwUnauthorizedError('Invalid credentials');

    const token = generateToken({ id: user!.id, email: user!.email });

    return { token };
  }
}