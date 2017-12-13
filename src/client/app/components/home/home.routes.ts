import { HomeComponent } from './home.component';
import { AboutRoutes } from '../about/about.routes';

export const HomeRoutes: Array<any> = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      ...AboutRoutes
    ]
  }
];
