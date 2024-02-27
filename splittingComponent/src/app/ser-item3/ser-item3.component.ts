import { Component } from '@angular/core';
import { CustomerServicesService } from '../_services/customer-services.service';

@Component({
  selector: 'app-ser-item3',
  templateUrl: './ser-item3.component.html',
  styleUrls: ['./ser-item3.component.css'],
  providers:[CustomerServicesService]
})
export class SerItem3Component {
  getInfodetains1!:any;

  constructor(private _customerServices: CustomerServicesService){}


getInfodetainsfun1():any{
 this.getInfodetains1 =  this._customerServices.getInfo1()
// this.getInfodetains1 =  this._customerServices.getAddName;

}
}
