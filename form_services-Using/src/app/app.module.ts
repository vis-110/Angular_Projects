import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { FormsModule } from '@angular/forms';
import { Dataservices } from './data.services.fills/data.services';
import { FormSecondModelComponent } from './form-second-model/form-second-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    TableComponentComponent,
    FormSecondModelComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Dataservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
