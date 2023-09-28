import { RocketProjectBackendApp } from '@src/RocketProjectBackendApp';
import prisma from '@src/libs/__mocks__/prisma';
import request from 'supertest';

vi.mock('@src/libs/prisma');

describe('Authentication endpoints', () => {
  let application: RocketProjectBackendApp;
  beforeAll(async () => {
    application = new RocketProjectBackendApp();
    await application.start();
  });
  test('Register a new user should return 200', async () => {
    const newUser = {
      name: 'test',
      email: 'test@test.com',
      password: 'test',
    };
    prisma.user.create.mockResolvedValue({ ...newUser, id: 1, createdAt: new Date(), role: 'USER'});
    const response = await request(application.httpServer).post('/api/auth/register').send(newUser);

    expect(response.status).toBe(200);
  });
});
