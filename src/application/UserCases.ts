import User from '@user/User';
import UserRepository from '@user/contracts/UserRepository';

export default class UserCaser {
  readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async create({ name, email, password }: Omit<User, 'id'>): Promise<User> {
    const user = new User({ name, email, password });

    return this.repository.create(user);
  }
}
