import { AfterContentChecked, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { CustomerServicesService } from '../_services/customer-services.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css'],
  // providers:[CustomerServicesService]
})
export class ChildChildComponent implements AfterContentChecked{
  vishnu:number = 10000;
//   user = [{name:'vishnu',emplyeeId :'11',age:'25'},
//   {name:'darsh',emplyeeId :'12',age:'23'},
//   {name:'venkat',emplyeeId :'13',age:'24'},
//   {name:'bala',emplyeeId :'14',age:'21'},];


// getVarious(){
//   this.user = [{name:'vishnu',emplyeeId :'11',age:'25'},
//   {name:'darsh',emplyeeId :'12',age:'23'},
//   {name:'venkat',emplyeeId :'13',age:'24'},
//   {name:'bala',emplyeeId :'14',age:'21'},
//   {name:'balakumaran',emplyeeId :'15',age:'26'},
//   {name:'kumaran',emplyeeId :'15',age:'28'}];
// }
// employeeId(index:number,user:any){
//   return user.employeeId
// }
 
childAge!:number;

customers:Customer[] = [];

constructor(private _customerServices: CustomerServicesService){

}

ngDoCheck(){

  this.childAge = this._customerServices.customers.length
}

// resetCount(){
//   this.childAge =  this.childAge++
//   console.log(this.childAge);
// }



ngAfterContentChecked(){
}

}