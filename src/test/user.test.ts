// test/sample.test.ts

import UserUseCases from '@src/application/UserUseCases';
import MysqlUserRepository from '@src/infrastructure/repositories/MysqlUserRepository';
import prisma from '@src/libs/__mocks__/prisma';

vi.mock('@src/libs/prisma');

describe('User use cases', () => {
  let repository: MysqlUserRepository;
  let userUseCase: UserUseCases;

  beforeAll(() => {
    repository = new MysqlUserRepository();
    userUseCase = new UserUseCases(repository);
  });

  test('Should create a new user', async () => {
    const newUser = {
      name: 'test',
      email: 'test@test.com',
      password: 'test',
    };
    prisma.user.create.mockResolvedValue({ ...newUser, id: 1, createdAt: new Date(), role: 'USER'});

    const user = await userUseCase.create(newUser);

    expect(user).toStrictEqual({
      ...newUser,
      id: 1,
    });
  });
});
