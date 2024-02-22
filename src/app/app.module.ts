import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import {ScriptLoaderModule} from "ngx-script-loader";
import {QlikWrapperModule} from "./qlik-wrapper/qlik-wrapper.module";
import { HeaderComponent } from './header/header.component';
import { SalesComponent } from './sales/sales.component';
import { TravelComponent } from './travel/travel.component';

// Next steps:
  // create facotry module:
  // read the qlik-embed attributes from a json
  // figure out what tenant and client id the user needs
  // inject ngx for qlik-embed (( look into @qlik/embed-runtime to replace the ngx appraoch ))
  // import it in here and add as app initializer https://angular.io/api/core/APP_INITIALIZER


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    HeaderComponent,
    SalesComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScriptLoaderModule,
    QlikWrapperModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
