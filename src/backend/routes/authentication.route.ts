import { Router } from 'express';
import AuthenticationController from '../controllers/authentication';
import container from '../dependecy-injection';

const router = Router();
const controller = container.get<AuthenticationController>('controllers.AuthenticationController');

router.post('/register', controller.register);

router.post('/login', controller.login);

export default router;
