import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './aggrid/aggrid.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    AgGridComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowser().bootstrapModule(AppModule);
