import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent {

check:boolean= false;

oddNums:number[] = [1,3,5,7];

evenNums:number[] = [2,4,6,8];


}
