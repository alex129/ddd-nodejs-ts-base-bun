import AuthenticationController from '@contollers/authentication';
import { Router } from 'express';
import container from '@src/dependecy-injection';

export const registerToRouter = (router: Router): void => {
  const controller = container.get<AuthenticationController>('controllers.AuthenticationController');

  router.post('/auth/register', controller.register);

  router.post('/auth/login', controller.login);
};
