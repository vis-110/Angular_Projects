import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HiComponent } from './hi/hi.component';
import { HelloComponent } from './hello/hello.component';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloChildComponent } from './hello-child/hello-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    HelloComponent,
    TestComponent,
    PageNotFoundComponent,
    HelloChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
