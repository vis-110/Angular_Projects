import { Component } from '@angular/core';
import { Demo } from './test';
// import { Horse,Snake} from './firstTsfile';
import { ITProduct} from './firstTsfile';
import { Employee} from './firstTsfile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demoproject';
  primary1Result!:string;
  primary2Result!:string;

  array = [0,1,2,2,4,5,6];



  vishnu=  [{name:'bala'},{name:'balakumaran'},{name:'bala'},{name:'balasaravanan'}]
bg: any;


//   primary1(){
//     this.primary1Result = !this.primary1Result
//   }

//   primary2(){
//     this.primary2Result = !this.primary2Result
//   }
// }

// let demo=new Demo("janaki");
// demo.getDemo();
// let parent = new Demo('the','first','steps');
// console.log(parent.getFullName());

// let sample =new Sample('the');
// console.log(sample.firstName);

// let sample = new Sample();
// console.log(sample.x);

// let getDate = new Demo(new Date(1899,3,13));
// console.log(getDate.dateIdentify());
// getDate.appDate = new Date(1989,9,25);


// let getDate = new Demo(new Date(1456,5,23));
// console.log(getDate.dateIdentify());


// let getDate = new Demo("correct");
// console.log(getDate.dateIdentify());
// getDate.appDate = "variables";

// let sample = new Sample(22);
// console.log( sample.primeNumber()); 
// let demo = document.getElementById("prime");

// demo = sample.primeNumber();


// let sample = new Sample();
// console.log( sample.getNumber('\"Best Numbers\"',10,89,14,56,75)); 


// let sample = new Sample();
// console.log( sample.getNumber("Best Numbers" ,10,89,14,56,75)); 

// let inheritance = new Employee("padappai");
// inheritance.firstName = "the";
// inheritance.lastName= "correct";
// inheritance.designation = "vellor"; 
// console.log(inheritance.fulName());
// console.log(inheritance.getName());


// let inheritance = new Employee("padappai","kanchipuram","chennai");
// console.log(inheritance.fulName());
// console.log(inheritance.childClass());

// let counter = new Employee('sri','raman','web developer');
// let counter2 = new Employee('sri','raman','prodect');

// console.log(`the corret range is ${Employee.headcount} ${counter.getEmplyeeDetails()}`);


// let counter = new Employee('sri','raman','web developer');
// let counter2 = new Employee('sri','raman','prodect');

// console.log(`the corret range is ${Employee.realCorrectCount()} ${counter.getEmplyeeDetails()}`);
// console.log(Employee.realcount);


// let p = new ITProduct("Computer",1000)
// p.price=2000 ;
// console.log(p.price);
// p.readFunction(200);
// console.log(p.price);
}
