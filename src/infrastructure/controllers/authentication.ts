import { Request, Response } from 'express';
import UserCreator from '../../application/UserCases';

export default class AuthenticationController {
  userCreator: UserCreator;

  constructor(userCreator: UserCreator) {
    this.userCreator = userCreator;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register(req: Request, res: Response) {
    console.log('Request from controller register', req.body);
    const user = await this.userCreator.create(req.body);
    res.send({ data: user });
  }

  login(req: Request, res: Response) {
    console.log('Request from controller login', req.body);
    res.send({ data: 'login' });
  }
}
