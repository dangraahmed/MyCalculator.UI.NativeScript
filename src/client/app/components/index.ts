import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ACCOUNT_COMPONENTS } from './account/index';
import { TAX_SLAB_COMPONENTS } from './taxSlab/index';


export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent,
  AdminComponent,
  ...ACCOUNT_COMPONENTS,
  ...TAX_SLAB_COMPONENTS
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
export * from './admin/admin.component';
