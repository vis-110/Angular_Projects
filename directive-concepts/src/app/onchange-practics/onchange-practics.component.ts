import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchange-practics',
  templateUrl: './onchange-practics.component.html',
  styleUrls: ['./onchange-practics.component.css']
})
export class OnchangePracticsComponent {
  furuit_name!:string;

onChanges(value: any): any {
    this.furuit_name = value.target.  value
}
}
