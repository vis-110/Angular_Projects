import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ChildChildComponent } from './child-child/child-child.component';

const routes: Routes = [
  {path:'child', component:ChildComponent},
  {path:'child-child/:age', component:ChildChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
