import AuthenticationController from '@contollers/authentication';
import { Router } from 'express';
import MysqlUserRepository from '../repositories/MysqlUserRepository';
import UserUseCases from '@src/application/UserUseCases';

export const registerToRouter = (router: Router): void => {
  const repository = new MysqlUserRepository();
  const userUseCase = new UserUseCases(repository);
  const controller = new AuthenticationController(userUseCase);

  router.post('/auth/register', controller.register);

  router.post('/auth/login', controller.login);
};
