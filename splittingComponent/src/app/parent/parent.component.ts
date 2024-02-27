import { Component, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CustomerServicesService } from '../_services/customer-services.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // providers:[CustomerServicesService]
})
export class ParentComponent {
  // parent to child data transwer
  _parentcom: number = 0;

  @ViewChild('box') clearBox: any;

  constructor(public _servicesFile: CustomerServicesService) { }


  addBtn(name: string) {
    this._servicesFile.add(name);
    this.clearBox.nativeElement.value = "";
  }


  // @Input() set parentcom(value: number) {
  //   console.log("the value is" + value);
  //   this._parentcom = value;
  // }
  // get parentcom() {
  //   return this._parentcom;
  // }

  // // child to parent data transwer
  // // inga input mulama app value i kondu vanthrukon ethu vendam anil
  // @Input('counter') parentcomt: any = 0;
  // // direct aaga parentcom value i    parentcom:number = 0; ena sollalam rondum onnu than

  // @Output() parentValue: EventEmitter<number> = new EventEmitter();

  // parentBtnIncrement() {
  //   this.parentcom++;
  //   // this.parentValue.emit(this.parentcom)

  // }
  // parentBtnDecrement() {
  //   this.parentcom--;
  //   // this.parentValue.emit(this.parentcom)
  // }



}
