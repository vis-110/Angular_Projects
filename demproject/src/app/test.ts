// export class Demo{
//     name: string;

//     constructor(name:string){
//         this.name=name;
//     }
//     public getDemo():void
//     {
//         console.log(this.name);
//     }
// }

//  export class Demo {
//    public ssn!:string;
//    public firstName:string;
//    public lastName:string;

//     constructor( firstName:string, lastName:string) {
//         // this.ssn = ssn;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName():string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// export class Demo{
//     private readonly appDate:Date;
//     constructor(appDate:Date){
//      this.appDate = appDate;
//     }
//     dateIdentify(){
//         return this.appDate
//     }
// }

// export class Demo{
//     private readonly appDate:Date = new Date(1899,3,13);
    
//     constructor(otherName:Date){
//         this.appDate = otherName;
//     }

//     dateIdentify( ){
//         return this.appDate
//     }
// }

export class Demo{
    public readonly appDate:string;
    
    constructor(otherName:string){
        this.appDate = otherName;
    }
    dateIdentify( ){
        return this.appDate
    }
    
}


