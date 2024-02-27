import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jcoop-task2';
  formArray:any;
  constructor(private _http:HttpClient){}
  onClici(){
    this._http.get('http://universities.hipolabs.com/search?country=United+States').subscribe(res=>{
      this.formArray = res;
    })
  }
}
