import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { TableDataComponent } from "./table-data/table-data.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FormDataComponent } from "./form-data/form-data.component";
import { ExportDataComponent } from "./export-data/export-data.component";

const routes:Routes = [
    {path:'home',component:HomePageComponent},
    {path:'table',component:TableDataComponent, children:[{path:'export',component:ExportDataComponent}]},
    {path:'tableEdit/:i',component:FormDataComponent,pathMatch:'full'},
    {path:'form',component:FormDataComponent},
    {path:'home/:id/:name',component:HomePageComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}