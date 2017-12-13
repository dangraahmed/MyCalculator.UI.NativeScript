import { AppComponent } from './app.component';
import { HOME_COMPONENTS } from './home/index';
import { ADMIN_COMPONENTS } from './admin/index';
import { ACCOUNT_COMPONENTS } from './account/index';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  ...HOME_COMPONENTS,
  ...ADMIN_COMPONENTS,
  ...ACCOUNT_COMPONENTS
];

export * from './app.component';
export * from './home/home.component';
export * from './admin/admin.component';
export * from './account/index';
