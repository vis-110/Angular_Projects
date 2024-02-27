import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    EventlistComponent,
    EventdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
