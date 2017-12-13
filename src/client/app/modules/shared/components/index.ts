import { NavbarComponent } from './navbar/navbar.component';
import { AdminNavbarComponent } from './admin.navbar/admin.navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const SHARED_COMPONENTS: any[] = [
  NavbarComponent,
  AdminNavbarComponent,
  ToolbarComponent
];

export * from './navbar/navbar.component';
export * from './admin.navbar/admin.navbar.component';
export * from './toolbar/toolbar.component';
