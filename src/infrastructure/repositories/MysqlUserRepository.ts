import User from '@user/User';
import UserRepository from '@user/contracts/UserRepository';

export default class MysqlUserRepository implements UserRepository {
  async create(user: User): Promise<void> {
    console.log('User created', user);
    return Promise.resolve();
  }
}
