import { Component } from '@angular/core';

@Component({
  selector: 'app-success-aleart',
  templateUrl: './success-aleart.component.html',
  styleUrls: ['./success-aleart.component.css']
})
export class SuccessAleartComponent {
  successId:number = 145;
  sucessStatus:string = 'successfully';
  disableTime = false;
  onFinditvariable = "the bus contector";
  inputValue = "Lion";
  ngIfUsing = 'false';
  constructor(){
    setTimeout(()=>{
      this.disableTime= true;
    },2000);
  }

  getStatusResult(){
    return this.sucessStatus
  }

  onFindit(){
    this.ngIfUsing = 'true';
    this.onFinditvariable = "there are not a bus contector" + this.inputValue;
  }

  inputValueFind(event:any){
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
}
