import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';

export const AccountRoutes: Array<any> = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }
];
