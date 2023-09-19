import express from 'express';
import * as http from 'http';
import cors from 'cors';

import authenticationRouter from '@backend/routes/authentication.route';

export class Server {
  private readonly express: express.Express;

  private readonly port: number;

  private httpServer?: http.Server;

  constructor(port: number) {
    this.port = port;
    this.express = express();
    this.express.use(cors());
    this.loadRoutes();
  }

  private loadRoutes(): void {
    this.express.use('/auth', authenticationRouter);
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      const env = this.express.get('env') as string;
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`  Backend App is running at http://localhost:${this.port} in ${env} mode`);
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer(): Server['httpServer'] {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            reject(error);

            return;
          }

          resolve();
        });
      }

      resolve();
    });
  }
}