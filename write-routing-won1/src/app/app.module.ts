import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ContackComponent } from './contack/contack.component';
import { AboutComponent } from './about/about.component';
import { PageNotComponent } from './page-not/page-not.component';
import { NgMethodsComponent } from './ng-methods/ng-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrierComponent,
    ContackComponent,
    AboutComponent,
    PageNotComponent,
    NgMethodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
