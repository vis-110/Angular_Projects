import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {

  styleCol: string = 'boldLetter letterStyle';
  corRoung: boolean = true;
  fontSize: number = 30;

  addStyle() {
    let styles = {
      'color' : 'red',
      'width':'50%'
    }
    return styles
  }
}
