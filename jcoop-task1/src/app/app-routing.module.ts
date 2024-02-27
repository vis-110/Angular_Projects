import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

const routes: Routes = [
  {path:'',component:EventlistComponent},
  {path:'event/:Id',component:EventdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
