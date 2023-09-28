import User from '@user/User';
import UserRepository from '@user/contracts/UserRepository';
import prisma from '@src/libs/prisma';

export default class MysqlUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const userCreated = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    return {
      id: userCreated.id,
      name: userCreated.name,
      email: userCreated.email,
      password: userCreated.password,
    };
  }
}
