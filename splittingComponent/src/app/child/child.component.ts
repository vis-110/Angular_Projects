import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerServicesService } from '../_services/customer-services.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [`p{
    color:blue;
    background-color:black;
    height:300px
  }`],
  // providers:[CustomerServicesService],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChildComponent{
  parentCompo() {
  throw new Error('Method not implemented.');
  }

    @Input('childComp') element!: { status: string, name: string, Content: string };
    // @Input() title1!:string;

    @Output() special = new EventEmitter<any>();

    childclick(){
      this.special.emit('fjlkfjdsfjsdkfjdslkfjlkfjdlkfjsdlkfjlkfjsdlkfjlk');
    }

  // parentBtnIncrement() {
  //   this.childcom++;
  //   // this.parentValue.emit(this.parentcom)

  // }
  // parentBtnDecrement() {
  //   this.childcom--;
  //   // this.parentValue.emit(this.parentcom)
  // }

  customers:Customer[] = [];


  constructor( public _customerSer:CustomerServicesService){

  }

  ngAfterContentChecked():void{
    this.customers =  this._customerSer.get()
    console.log(this.customers);
  }

  increment():any{
   this._customerSer.increment()
  }



  childComAddName(value:string){
    // this.getInfodetains2.push(value);
    this._customerSer.addName(value);
  }

}
