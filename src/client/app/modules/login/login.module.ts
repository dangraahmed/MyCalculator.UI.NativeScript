// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// app
import { SharedModule } from '../shared/index';
import { LOGIN_PROVIDERS } from './services/index';
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
    ...LOGIN_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    SharedModule
  ]
})
export class LoginModule {

  constructor(@Optional() @SkipSelf() parentModule: LoginModule) {
    if (parentModule) {
      throw new Error('Login already loaded; Import in root module only.');
    }
  }
}
