import { User } from '../models/user.model';

export class UserRepository {
  async createUser(email: string, password: string) {
    return await User.create({ email, password });
  }

  async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  async findById(id: number) {
    return await User.findByPk(id);
  }
}