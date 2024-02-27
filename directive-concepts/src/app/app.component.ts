import { AfterContentChecked, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'Directive-concepts';
  severName = "lion";
  conditionTag = false;
  toggleValue = false;
  listOfValue = ['manikandan', 'manogar'];
  log: number[] = [];

  // @ViewChild ('furuitname') furuitname!:ElementRef
  furuit_names!:string;


ngOnChanges(value:any): void {
    this.furuit_names = value;
    console.log(this.furuit_names);
}

  outputValue() {
    this.conditionTag = true;
    this.listOfValue.push(this.severName)

  }
  incresingValue() {
    this.log.push(this.log.length + 1);
    console.log(this.log.length);
  }
}
