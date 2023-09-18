import User from '../domain/User';
import UserRepository from '../domain/UserRepository';

export default class MysqlUserRepository implements UserRepository {
  async create(user: User): Promise<void> {
    console.log('User created', user);
    return Promise.resolve();
  }
}
