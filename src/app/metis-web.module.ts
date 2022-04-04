import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MetisWebComponent} from './metis-web.component';
import {BasisModule} from './basis/basis.module';
import {RouterModule} from '@angular/router';
import {SRT_WEBAPP_ROUTES} from './basis/routes';
import {MatIconRegistry} from '@angular/material';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(SRT_WEBAPP_ROUTES),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    FormsModule,
    ReactiveFormsModule,
    BasisModule,
  ],
  declarations: [
    MetisWebComponent
  ],
  providers: [
    MatIconRegistry,
  ],
  bootstrap: [
    MetisWebComponent
  ],
  exports: [TranslateModule]
})
export class MetisWebModule {
}
