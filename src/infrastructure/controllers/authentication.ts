import { Request, Response } from 'express';
import UserUseCases from '@src/application/UserUseCases';

export default class AuthenticationController {
  userUseCase: UserUseCases;

  constructor(userUseCase: UserUseCases) {
    this.userUseCase = userUseCase;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register(req: Request, res: Response) {
    console.log('Request from controller register', req.body);
    const user = await this.userUseCase.create(req.body);
    res.send({ data: user });
  }

  login(req: Request, res: Response) {
    console.log('Request from controller login', req.body);
    res.send({ data: 'login' });
  }
}
