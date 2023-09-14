import { Request, Response } from 'express';

export class AuthenticationController {
  public register(req: Request, res: Response) {
    console.log('Request from controller register', req.body);
    res.send({ data: 'Register' });
  }

  public login(req: Request, res: Response) {
    console.log('Request from controller login', req.body);
    res.send({ data: 'login' });
  }
}
