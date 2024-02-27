import { Component } from '@angular/core';
import { Dataservices } from '../data.services.fills/data.services';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  constructor(private getDataServices: Dataservices) { }

  fromDataShow:boolean= true;

  // fromData: any = {

  // };

  submit(value:any) {
    console.log(value)
   this.getDataServices.formDataValue(value);
  }

  getCheckBox(event:any) {
    // console.log(event.target.name);
    // console.log(event.target.name,event.target.checked);
    if(event.target.value == event.target.value.checked){
      console.log(event.target.value);

    }
    else console.log('else'+event.target.value);
    let checkedValue = event.target.name + event.target.checked;
    // console.log(checkedValue);
  }

  radioBtnVal(value:string){
    console.log(value);
  }

  // value: string = '';

  // onItemChange(male: string, female: string, other: string) {
  //   // this.getDataServices.onItemChange(value);
  //   console.log(male, female, other);
  // }

  // sendFormData(name: string) {
  //   this.getDataServices.reciveFormData(name);

  // }

}
