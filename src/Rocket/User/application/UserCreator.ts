import User from '@user/domain/User';
import UserRepository from '@user/domain/UserRepository';

export default class UserCreator {
  readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run(name: string, email: string, password: string): Promise<void> {
    const user = new User({ name, email, password });

    return this.repository.create(user);
  }
}
