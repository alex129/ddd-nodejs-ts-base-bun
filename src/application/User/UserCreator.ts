import User from '@user/User';
import UserRepository from '@user/contracts/UserRepository';

export default class UserCreator {
  readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run({ name, email, password }: Omit<User, 'id'>): Promise<void> {
    const user = new User({ name, email, password });

    return this.repository.create(user);
  }
}
