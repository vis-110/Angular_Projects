import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChildChildComponent } from './child-child/child-child.component';
import { FormsModule } from '@angular/forms';
import { StartGameComponent } from './start-game/start-game.component';
import { OddNumbersComponent } from './odd-numbers/odd-numbers.component';
import { EvenNumbersComponent } from './even-numbers/even-numbers.component';
import { SerItem1Component } from './ser-item1/ser-item1.component';
import { SerItem2Component } from './ser-item2/ser-item2.component';
import { SerItem3Component } from './ser-item3/ser-item3.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ChildChildComponent,
    StartGameComponent,
    OddNumbersComponent,
    EvenNumbersComponent,
    SerItem1Component,
    SerItem2Component,
    SerItem3Component
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
