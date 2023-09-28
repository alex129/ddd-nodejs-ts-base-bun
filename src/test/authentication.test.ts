import { RocketProjectBackendApp } from '@src/RocketProjectBackendApp';
import request from 'supertest';

vi.mock('../../prisma/prisma')

describe('Authentication endpoints', () => {
  let application: RocketProjectBackendApp;
  beforeAll(async () => {
    application = new RocketProjectBackendApp();
    await application.start();
  });
  test('Register a new user should return 200', async () => {
    const response = await request(application.httpServer).post('/api/auth/register').send({
      name: 'test',
      email: 'test@test.com',
      password: 'test',
    });

    expect(response.status).toBe(200);
  });
});
