import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component';
import { UpdataDataComponent } from './updata-data/updata-data.component';
import { AddDataComponent } from './add-data/add-data.component';

const routes: Routes = [
  {path:'add', component:AddDataComponent},
  {path:'show', component:ShowDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
