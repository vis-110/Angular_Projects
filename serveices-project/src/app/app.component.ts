import { Component } from '@angular/core';
import { Userservies } from './userServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Userservies]

})
export class AppComponent {
  title = 'Services-Projects';
}
