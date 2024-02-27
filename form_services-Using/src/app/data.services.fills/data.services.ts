import { Injectable } from "@angular/core";
import { from } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class Dataservices{
    // nameData:string[] = [];
    // genderData:string[] = [];
    // favorateFood:string[] = [];
    // dropdownDistrict:string[] = [];
    // calenderData:string[] = [];
    // gmailData:string[] = [];
    // phoneNumberData:number[] = [];
    // commandSection:string[] = [];

    // nameData:string[] = [];
    // gender:string = '';
    // favorite:string = '';
    // district:string = '';
    // date:string = '';
    // gmail:string = '';
    // phNum:number = 0;
    // command=null;
  
    fromDateRecived:any[] = [];

    // reciveFormData(name:string):any{
    //     this.nameData.push(name)
    // }
    // onItemChange(value:string){
    //     this.gender = value;
    // }


    formDataValue(value:any){
     this.fromDateRecived.push(value);
        console.log(value);
        console.log(this.fromDateRecived);
    }

    // updateList(value:any){
    //     this.fromDateRecived.push(value);
    //     console.log(value);
    //     console.log(this.fromDateRecived);
    // }
    
}