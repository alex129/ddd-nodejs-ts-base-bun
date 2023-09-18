import User from '@user/domain/User';
import UserRepository from '../../Rocket/User/domain/UserRepository';
import { Request, Response } from 'express';

export default class AuthenticationController {
  readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  register(req: Request, res: Response) {
    console.log('Request from controller register', req.body);
    const user = new User({
      name: 'Jhon Doe',
      email: '',
      password: '123456',
    });
    this.repository.create(user);
    res.send({ data: 'Register' });
  }

  login(req: Request, res: Response) {
    console.log('Request from controller login', req.body);
    res.send({ data: 'login' });
  }
}
