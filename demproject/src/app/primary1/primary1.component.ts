import { Component } from '@angular/core';

@Component({
  selector: 'app-primary1',
  templateUrl: './primary1.component.html',
  styleUrls: ['./primary1.component.css']
})
export class Primary1Component {
  small = 'red';
  smallNext = 'green';
  primary1Result!:string;
  primary2Result!:string;

  array = [0,1,2,3,4,5,6];

  vish:boolean = true;

  primary1(){
    this.vish = !this.vish;
  }
}
