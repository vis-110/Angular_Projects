import { Component } from '@angular/core';
import { Dataservices } from './data.services.fills/data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Dataservices],
})
export class AppComponent {
  title = 'form_services_using';

  isFormEnable:boolean = true;

  getonSubmit(data:any){
    this.isFormEnable = data;
  }

}
