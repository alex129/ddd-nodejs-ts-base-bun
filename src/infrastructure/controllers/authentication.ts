import { Request, Response } from 'express';
import UserCreator from '../../application/UserCreator';

export default class AuthenticationController {
  userCreator: UserCreator;

  constructor(userCreator: UserCreator) {
    this.userCreator = userCreator;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register(req: Request, res: Response) {
    console.log('Request from controller register', req.body);
    await this.userCreator.run('test', 'test', '1234');
    res.send({ data: 'Register' });
  }

  login(req: Request, res: Response) {
    console.log('Request from controller login', req.body);
    res.send({ data: 'login' });
  }
}
