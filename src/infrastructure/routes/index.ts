import { Router } from 'express';
import { sync } from 'glob';

const register = (routePath: string, router: Router) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { registerToRouter } = require(routePath) as { registerToRouter: (router: Router) => void };
  registerToRouter(router);
};

export const registerRoutes = (router: Router) => {
  const routes = sync(`${__dirname}/**/*.route.*`);
  routes.map((route) => register(route, router));
};
