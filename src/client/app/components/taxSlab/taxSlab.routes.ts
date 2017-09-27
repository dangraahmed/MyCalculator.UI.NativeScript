import { TaxSlabViewComponent } from './view/taxSlab.view.component';
import { TaxSlabViewDetailComponent } from './viewDetail/taxSlab.detail.view.component';

export const TaxSlabRoutes: Array<any> = [
  {
    path: 'taxSlab',
    children: [
      { path: 'view', component: TaxSlabViewComponent },
      { path: 'viewDetail', component: TaxSlabViewDetailComponent }
    ]
  }
];
