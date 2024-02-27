import { Component } from '@angular/core';
import { CustomerServicesService } from '../_services/customer-services.service';

@Component({
  selector: 'app-ser-item1',
  templateUrl: './ser-item1.component.html',
  styleUrls: ['./ser-item1.component.css'],
  providers:[CustomerServicesService]
})
export class SerItem1Component {

  constructor(public _servicesFile: CustomerServicesService) { }


  getInfodetains3:string[] = [];

  getInfodetainsfun3(){
    this.getInfodetains3 = this._servicesFile.getInfo3();
  }

}
