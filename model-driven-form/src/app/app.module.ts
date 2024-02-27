import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableDataComponent } from './table-data/table-data.component';
import { FormDataComponent } from './form-data/form-data.component';
// import { CheckboxTableComponent } from './checkbox-table/checkbox-table.component';
import { Datasharing } from './services/exportData';
import { ExportDataComponent } from './export-data/export-data.component';
import { AppRoutingModule } from './app.routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    FormDataComponent,
    // CheckboxTableComponent,
    ExportDataComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Datasharing],
  bootstrap: [AppComponent]
})
export class AppModule { }
