import Server from './server';
// import { loadDependencyContainer } from './dependecy-injection';

export class RocketProjectBackendApp {
  server?: Server;

  async start(): Promise<void> {
    // await loadDependencyContainer();
    const port = Number(process.env.PORT || 0);
    this.server = new Server(port);
    await this.server.loadRoutes();
    return this.server.listen();
  }

  get httpServer(): Server['httpServer'] | undefined {
    return this.server?.getHTTPServer();
  }

  async stop(): Promise<void> {
    return this.server?.stop();
  }
}
