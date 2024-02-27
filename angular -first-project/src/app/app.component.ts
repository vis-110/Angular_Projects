import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // (or) another Method
  // template: `
  // <app-servers></app-servers>
  // <app-servers></app-servers>`,


  styles: [`
  h3{
    color:yellow;
  }`]
})
export class AppComponent {
  letterType = '';
  pTag = "false"

  onClickValue(){
    this.pTag = "true"
  }


  
}
