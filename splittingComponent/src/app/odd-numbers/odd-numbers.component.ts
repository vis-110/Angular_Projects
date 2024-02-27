import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-numbers',
  templateUrl: './odd-numbers.component.html',
  styleUrls: ['./odd-numbers.component.css']
})
export class OddNumbersComponent {
  @Input() number:number|any; 
}
