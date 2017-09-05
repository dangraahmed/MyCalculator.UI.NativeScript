import { TaxSlabViewComponent } from './view/taxSlab.view.component';

export const TaxSlabRoutes: Array<any> = [
  {
    path: 'taxSlab',
    children: [
      { path: 'view', component: TaxSlabViewComponent }
    ]
  }
];
