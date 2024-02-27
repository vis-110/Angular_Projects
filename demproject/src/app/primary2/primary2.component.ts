import { Component } from '@angular/core';

@Component({
  selector: 'app-primary2',
  templateUrl: './primary2.component.html',
  styleUrls: ['./primary2.component.css']
})
export class Primary2Component {
  smallprimary2 = 'red';
  smallNextprimary2 = 'green';
  primary1Result!:string;
  primary2Result!:string;

  array = [0,1,2,3,4,5,6];
}
