import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-book';

  isTrue:boolean=true;
  colspanVar:number = 2;
  selectCom:string = 'recipe'

  recipeChoose(valuee:string){
    this.selectCom = valuee;
    console.log(this.selectCom);
    
  }

  
}
