import { Component } from '@angular/core';

@Component({
  selector: 'app-default-pipe-methods',
  templateUrl: './default-pipe-methods.component.html',
  styleUrls: ['./default-pipe-methods.component.css']
})
export class DefaultPipeMethodsComponent {
  dates = new Date();
  letters:string = 'The Particular Area '
}
