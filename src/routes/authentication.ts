import { Router } from 'express';
import { AuthenticationController } from '../controllers/authentication';

const router = Router();
const controller = new AuthenticationController();

router.post('/register', controller.register);

router.post('/login', controller.login);

export default router;
