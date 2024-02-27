import { AfterContentChecked, Component, DoCheck } from '@angular/core';
import { CustomerServicesService } from '../_services/customer-services.service';

@Component({
  selector: 'app-ser-item2',
  templateUrl: './ser-item2.component.html',
  styleUrls: ['./ser-item2.component.css'],
  providers: [CustomerServicesService]
})
export class SerItem2Component  implements AfterContentChecked{

  getInfodetains2: string[] = [];

  constructor(public _customerSer: CustomerServicesService) {}


    getInfodetainsfun2(){
      this.getInfodetains2 = this._customerSer.getInfo2();
      console.log(this._customerSer.getInfo2());
    }

    childComAddName(value:string){
        this._customerSer.addName(value)
    }

    ngAfterContentChecked(): void {
    this.getInfodetains2 =  this._customerSer.getAddName()
    }
    

  }
