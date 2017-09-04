// app
import { HomeRoutes } from './home/home.routes';
import { AdminRoutes } from './admin/admin.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AdminRoutes,
];
