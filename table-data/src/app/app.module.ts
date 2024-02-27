import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDataComponent } from './table-data/table-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './table-data/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
