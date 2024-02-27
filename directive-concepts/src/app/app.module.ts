import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { serverComponent } from './server/server.component';
import { SecondserverComponent } from './secondserver/secondserver.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { OnchangePracticsComponent } from './onchange-practics/onchange-practics.component';
import { DefaultPipeMethodsComponent } from './default-pipe-methods/default-pipe-methods.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    SecondserverComponent,
    StringInterpolationComponent,
    CustomPipePipe,
    OnchangePracticsComponent,
    DefaultPipeMethodsComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
