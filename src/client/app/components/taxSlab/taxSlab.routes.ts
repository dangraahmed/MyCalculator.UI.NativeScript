import { TaxSlabViewComponent } from './view/taxSlab.view.component';
import { TaxSlabViewDetailComponent } from './viewDetail/taxSlab.detail.view.component';
import { TaxSlabAddEditComponent } from './addEdit/taxSlab.add.edit.component';

export const TaxSlabRoutes: Array<any> = [
  {
    path: 'taxSlab',
    children: [
      { path: 'view', component: TaxSlabViewComponent },
      { path: 'viewDetail', component: TaxSlabViewDetailComponent },
      { path: 'addEdit', component: TaxSlabAddEditComponent }
    ]
  }
];
