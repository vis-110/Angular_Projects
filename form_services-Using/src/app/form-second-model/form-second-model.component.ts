import { Component, Output, EventEmitter } from '@angular/core';
import { Dataservices } from '../data.services.fills/data.services';

@Component({
  selector: 'app-form-second-model',
  templateUrl: './form-second-model.component.html',
  styleUrls: ['./form-second-model.component.css']
})

export class FormSecondModelComponent {

  @Output('submitaction') submitTrig = new EventEmitter();


  favorateFood: any = [];

  constructor(private service: Dataservices) { }


  fromData = {
    name: '',
    gender: '',
    email: '',
    date: '',
    dropdown: '',
    phoneNumber: '',
    favourite: '',
    message: '',
  }



  getFavFood(event: any) {
    this.favorateFood.push(event.target.value);
    console.log(event.target.value);
    // this.fromData.favourite.push((event.target as HTMLInputElement).checked);
    // console.log((event.target as HTMLInputElement).checked);
  }

  submit(value: any) {
    this.submitTrig.emit(false);
    value.favourite = this.favorateFood;
    this.service.formDataValue(value);
    // this.fromData.favourite.push(this.favorateFood);
    console.log(this.favorateFood);
    // console.log(this.fromData.favourite);
  }

}