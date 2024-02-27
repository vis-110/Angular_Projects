import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveComponent } from './active-inactive-project/active/active.component';
import { InactiveComponent } from './active-inactive-project/inactive/inactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    InactiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
