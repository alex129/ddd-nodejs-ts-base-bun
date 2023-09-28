import { Router } from 'express';
import { sync } from 'glob';

const register = async (routePath: string, router: Router) => {
  const { registerToRouter } = await import(routePath) as { registerToRouter: (router: Router) => void };
  registerToRouter(router);
};

export const registerRoutes = async (router: Router) => {
  const routes = sync(`${__dirname}/**/*.route.{js,ts}`);
  await Promise.all(routes.map((route) => register(route, router)))
};
