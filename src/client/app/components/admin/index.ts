import { AdminComponent } from './admin.component';
import { AboutComponent } from '../about/about.component';
import { TAX_SLAB_COMPONENTS } from '../taxSlab/index';

export const ADMIN_COMPONENTS: any[] = [
    AdminComponent,
    AboutComponent,
    ...TAX_SLAB_COMPONENTS,
];
