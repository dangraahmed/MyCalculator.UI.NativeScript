import { AdminComponent } from './admin.component';
import { AboutRoutes } from '../about/about.routes';
import { TaxSlabRoutes } from '../taxSlab/taxSlab.routes';

export const AdminRoutes: Array<any> = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      ...AboutRoutes,
      ...TaxSlabRoutes
    ]
  }
];
