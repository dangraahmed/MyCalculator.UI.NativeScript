// app
import { HomeRoutes } from './home/home.routes';
// import { HomeComponent } from './home/home.component';
import { AdminRoutes } from './admin/admin.routes';
import { AccountRoutes } from './account/account.routes';

export const routes: Array<any> = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: '',
    redirectTo: '/admin/taxSlab/view',
    pathMatch: 'full'
  },
  ...HomeRoutes,
  ...AdminRoutes,
  ...AccountRoutes
];
