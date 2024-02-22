import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { QlikComponentWrapperComponent } from './qlik-component-wrapper/qlik-component-wrapper.component';
import {ScriptLoaderModule} from "ngx-script-loader";
@NgModule({
  declarations: [ QlikComponentWrapperComponent],
  imports: [
    CommonModule,
    ScriptLoaderModule
  ],
  exports: [QlikComponentWrapperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QlikWrapperModule { }
