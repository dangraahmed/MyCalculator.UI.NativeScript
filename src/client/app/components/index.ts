import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { TaxSlabComponent } from './taxSlab/taxSlab.component';
import { LoginComponent } from './account/login.component';


export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent,
  AdminComponent,
  AccountComponent,
  TaxSlabComponent,
  LoginComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
export * from './admin/admin.component';
export * from './account/account.component';
export * from './taxSlab/taxSlab.component';
