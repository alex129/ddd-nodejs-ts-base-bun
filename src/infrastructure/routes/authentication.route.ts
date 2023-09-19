import AuthenticationController from '@contollers/authentication';
import { Router } from 'express';
import container from '@src/dependecy-injection';

const router = Router();
const controller = container.get<AuthenticationController>('controllers.AuthenticationController');

router.post('/register', controller.register);

router.post('/login', controller.login);

export default router;
