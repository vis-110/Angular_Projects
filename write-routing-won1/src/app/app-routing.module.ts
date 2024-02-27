import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ContackComponent } from './contack/contack.component';
import { AboutComponent } from './about/about.component';
import { PageNotComponent } from './page-not/page-not.component';

const routes: Routes = [
  { path: 'carrier', component: CarrierComponent },
  {
    path: 'contact', component: ContackComponent,
    children: [{ path: 'pageNot', component: PageNotComponent },
    { path: ' ', redirectTo: "/home", pathMatch: 'full' },]
  },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
