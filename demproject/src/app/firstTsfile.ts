

// export class Sample {
//     firstName:string;
//     constructor(firstName:string){
//         this.firstName = firstName;
//     }   

// import { count } from "rxjs";

//     getFullName():string {
//         return `${this.firstName}`;
//     }
// }
// export class Sample{
//     x:number = 10;
//     y:number = 10;
//     retureFuction():any{
//         return `${this.x} ${this.y}`;
//     }
// }

// export class Sample {
//     x: number;
//     y: number;

//     // Normal signature with defaults
//     constructor(x = 100, y = 0) {
//         this.x = x;
//         this.y = y;
//     }
// }


// export class Sample {
//     message: string;

//     // Normal signature with defaults
//     constructor(message: string) {
//         this.message = message;
//     }
//      raiseError( message: string) {
//         this.message = message;
//     }
// }

// export class Sample {

//     public itemCount: number;
//     public discount!: number;

//     constructor(itemCount:number) {
//         this.itemCount = itemCount;
//         // this.discount = discount;
//     }

//    getFullName(){
//     if(this.itemCount > 0 && this.itemCount <= 5) {
//     this.discount = 5;
//     } 
//     else if (this.itemCount > 5 && this.itemCount <= 10) {
//     this.discount = 10;
//     }  
//     else {
//     this.discount = 15;
//     }

// console.log(`You got ${this.discount}% discount. `);
// }
// }
// how to find prime number

// export class Sample{
//     valueNumber: number;
//     numberLength!:number;
//     count:number=0;

//     constructor(valueNumber:number){
//         this.valueNumber = valueNumber;
//     }
//     primeNumber():any{
//         for(this.numberLength = 1;this.numberLength<=this.valueNumber;this.numberLength++){
//             if((this.valueNumber%this.numberLength) == 0){
//                 this.count++;
//             }
//         }
//         if(this.count == 2){
//             console.log(`This ${this.valueNumber} value is a Prime Number`);
//         }
//         else{
//             console.log(`This ${this.valueNumber} value is Not a Prime Number`);

//         }
//     }
// }

// export class Sample {
//     valueNumber: number;
//     numberLength!: number;
//     count: number = 0;
//     remainder!:number;
//     quotient!:number;

//     constructor(valueNumber: number) {
//         this.valueNumber = valueNumber;
//     }

//     getFullAmount(){
//     let arrCollection = [2000,500,200,100,50,20,10,5,2,1];

//     for(this.numberLength = this.valueNumber;this.numberLength != 0;this.numberLength
//          = (this.numberLength%(arrCollection[this.count]))){
//         this.count++;
//         this.remainder = this.numberLength%(arrCollection[this.count]);
//         this.quotient = this.numberLength/(arrCollection[this.count]);
//         this.quotient = Math.round(this.quotient);
//         if(this.quotient <= 0){
//             this.quotient = 0;
//             console.log(`${arrCollection[this.count]} -- ${this.quotient}`);

//         }
//         console.log(`${arrCollection[this.count]} - ${this.quotient}`);
//     }
// }
// }

// export class Sample{
//     valueOne:string | undefined;
//     valueTwo:number | undefined;
//     valueThree:boolean | undefined;

//     constructor();
//     constructor(valueOne:string, valueTwo:number, valueThree:boolean);
//     constructor(valueOne:string, valueTwo?:number);
//     constructor(valueOne?:string, valueTwo?:number, valueThree?:boolean){
//         this.valueOne = valueOne;
//         this.valueTwo = valueTwo;   
//         this.valueThree = valueThree;
//     }

//     getFullValue():void{
//         console.log(`valueONe is ${this.valueOne} valueTwo is ${this.valueTwo}
//          valueThree is ${this.valueThree}`);
//     }


// }

// export class Sample{
//     getFullValue(variable:number):void;
//     getFullValue(variable:string):void;
//     getFullValue(variable:any):void{
//         console.log(`the value is ${variable}`);
//     }
// }

// export class Sample{
//     getFullValue(variable1:number,variable2:string,variable3?:boolean):void;
//     getFullValue(variable1?:number,variable2?:string,variable3?:boolean):void;
//     getFullValue(variable1:any,variable2:any,variable3:any):void{
//         console.log(`the value is ${variable1} ${variable2} ${variable3}`);
//     }
// }

// export class Sample{
//     getNumber(vishnu:string,...numbers: number[]) {
//         console.log(`one string ${vishnu} another are numbers ${numbers}`);
//     }
// }

// class Sample {
//   firstName: string = "";
//   lastName: string = "";

//   getName(): string {
//     return this.firstName + " " + this.lastName
//   }
// }


// export class Employee extends Sample {
//     designation: string = "";
//   constructor(designation: string) {
//     super();
//     this.designation = designation;
//   }
//   fulName() {
//     console.log(`${this.firstName} - ${this.lastName} - ${this.designation}`);
//   }

// }


// class Sample {
//   firstName: string = "";
//   lastName: string = "";
//   designation: string = "";
//   constructor(firstName: string,lastName: string, designation: string){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.designation = designation;
//   }
//   getName(): string {
//     return this.firstName + " " + this.lastName + " " + this.designation
//   }
// }


// export class Employee extends Sample {
//   // override designation: string = "";
//   constructor(firstName: string,lastName: string, designation: string) {
//     super(firstName,lastName,designation);
//   }
//   fulName() {
//     console.log(`${this.firstName} - ${this.lastName} - ${this.designation}`);
//   }
//   childClass():string{
//     return super.getName() + `this is designation ${this.designation}`
//   }
// }

// class Sample {
//   firstName: string = "";
//   lastName: string = "";
//   // designation: string = "";
//   constructor(firstName: string,lastName: string){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getName(): string {
//     return this.firstName + " " + this.lastName
//   }
// }


// export class Employee extends Sample {
//   designation: string = "";
//   constructor(firstName: string,lastName: string,  designation: string) {
//     super(firstName, lastName);
//     this.designation = designation;
//   }
//   fulName() {
//     console.log(`${this.firstName} - ${this.lastName} - ${this.designation}`);
//   }
//   childClass():string{
//     return super.getName() + `this is designation ${this.designation}`
//   }
// }

// export class Employee {
//   static headcount: number = 0;

//   constructor(
//       private firstName: string,
//       private lastName: string,
//       private jobTitle: string) {

//       Employee.headcount++;
//   }
//   getEmplyeeDetails(){
//     return `this name ${this.firstName} ${this.lastName} job position ${this.jobTitle}`
//   }
// }

export class Employee {
   static realcount: number = 0;

  constructor(
      private firstName: string,
      private lastName: string,
      private jobTitle: string) {

      Employee.realcount++;
  }

  public static realCorrectCount(){
     return Employee.realcount;
  }

  getEmplyeeDetails(){
    return `this name ${this.firstName} ${this.lastName} job position ${this.jobTitle}`
  }
}


class Product  {
  name:string
  readonly price:number
  constructor(name:string, price:number) {
    this.name=name
    this.price=price
  }

}


export class ITProduct extends Product {
  override price:number

  constructor(name:string, price:number) {
    super(name,price)
    this.price=price
  }
  readFunction(price:number){
    this.price = price;
  }
}






// class Animal {
//   // public name;
//   constructor(public name:string) {
//     this.name = name;
//   }
//   move(meters: string | number | undefined):void {
//     alert(this.name + " moved " + meters + "m.");
//   }
// }

// export class Snake extends Animal {
//   constructor(public override name:string) {
//     super(name);
//   }
//   override move() {
//     alert("Slithering...");
//     super.move(5);
//   }
// }

// export class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   override move() {
//     alert(super.name + " is Galloping...");
//     super.move(45);
//   }
// }


 
 

