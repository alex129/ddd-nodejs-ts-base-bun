import UserRepository from '@user/domain/UserRepository';
import { Request, Response } from 'express';

export default class AuthenticationController {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    console.log('AuthenticationController');
    this.repository = repository;
  }

  public async register(req: Request, res: Response) {
    console.log('Request from controller register', req.body);
    res.send({ data: 'Register' });
  }

  public login(req: Request, res: Response) {
    console.log('Request from controller login', req.body);
    res.send({ data: 'login' });
  }
}
