// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// app
import { SharedModule } from '../shared/index';
import { TAX_SLAB_PROVIDERS } from './services/index';
import { MultilingualModule } from '../i18n/multilingual.module';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    SharedModule,
    MultilingualModule,
  ],
  providers: [
    ...TAX_SLAB_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    SharedModule
  ]
})
export class TaxSlabModule {

  constructor(@Optional() @SkipSelf() parentModule: TaxSlabModule) {
    if (parentModule) {
      throw new Error('TaxSlabModule already loaded; Import in root module only.');
    }
  }
}
