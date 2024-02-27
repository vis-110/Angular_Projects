import { AfterContentChecked, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit, AfterContentChecked,DoCheck {
  stringVariable:string = 'Many example solve';
  firstName:string = 'vishnu';
  defaultName : string = 'Persen Name'
  lastName: string = 'R';
  mathMark:number = 78;
  socialMark:number = 83;
  salary :number = 20000;
  personVariable!:string;

  isDisable:boolean = true;

  imgPath:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXxbpp8TOPUaMEjX7hoxPwSNFznAJ_ws1NA&usqp=CAU'

  ngOnInit(): string {
      return this.firstName + " " + this.lastName + ' Salary is = ' + this.salary
  }

  persons:object= {Name:'maharaja',age:21, place:'madurai'};

  ngAfterContentChecked(): void {
    // inthe murai use panni value i get pannikalam
      console.log((this.persons as any).place);
  }
      
  ngDoCheck(): void {
      this.personVariable = JSON.stringify(this.persons);
  }

  getFullName(){
    return this.firstName + " " + this.lastName
  }

}
