import express, { Request, Response } from 'express';
import cors from 'cors';
import authenticationRouter from './Backend/routes/authentication.route';

const PORT = Number(process.env.PORT || 3000);
const app = express();

app.use(cors());

app.use('/auth', authenticationRouter);

app.get('/', function (req: Request, res: Response) {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
