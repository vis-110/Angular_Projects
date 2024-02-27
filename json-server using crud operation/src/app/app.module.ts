import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { UpdataDataComponent } from './updata-data/updata-data.component';
import { DataServeService } from './services/data-serve.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    ShowDataComponent,
    UpdataDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
