import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    // hiddenShowForm:boolean = true;
    // hiddenShowTable:boolean = false
//     getonSubmitForm(data:any){
//       this.hiddenShowTable = data;
//   }

//   getontable(data:any){
//     this.hiddenShowForm = data;
// }


//   formDetails: FormGroup;
//   formDetailCollection: any;
//   fileToUpload: any[] = [];
//   selectedimage: File | null = null;
//   formArray: any[] = [];
//   ExportDataValue: any[] = [];
//   ExportArray: any[] = [];
//   ExportDiv: boolean = false;
//   tableDiv: boolean = false;
//   formDiv: boolean = true;

//   constructor(public fb: FormBuilder) {
//     this.formDetails = this.fb.group({
//       firstname: ['',],
//       lastname: ['',],
//       email: ['',],
//       dob: ['',],
//       phonenumber: ['',],
//       gender: ['',],
//       cityName: ['',],
//       fileupload: [null],
//       termcon: ['',],
//       password: ['',],
//       conformpassword: ['',],
//     })

//     this.formDetails.addValidators(
//       this.matchValidator(this.formDetails.get(['password']), this.formDetails.get('conformpassword'))
//     );
//   }

//   matchValidator(control: AbstractControl, controlTwo: AbstractControl): ValidatorFn {
//     return () => {
//       if (control.value !== controlTwo.value)
//         return { match_error: 'Value does not match' };
//       return null;
//     };
//   }

  ngOnInit(): void { }

//   tableSubmit() {
//     this.formDetailCollection = this.formDetails.value;
//     this.tableDiv = true;
//     this.formDiv = false;

//     if (this.selectedimage) {
//       const reader = new FileReader();
//       reader.onload = (event: any) => {
//         this.formDetailCollection.fileupload = event.target.result;
//         this.formArray.push(this.formDetailCollection);
//       }
//       reader.readAsDataURL(this.selectedimage);
//     }
//     else {
//       this.formArray.push(this.formDetailCollection);
//     }
//     this.formDetails.reset();
//   }

//   imgfileUpload(event: any) {
//     this.selectedimage = event.target.files[0]
//   }

//   updateData(item: any, index: number) {
//     this.formDiv = true;
//     this.tableDiv = false;

//     this.formDetails.setValue({
//       firstname: item.firstname,
//       lastname: item.lastname,
//       email: item.email,
//       dob: item.dob,
//       phonenumber: item.phonenumber,
//       gender: item.gender,
//       cityName: item.cityName,
//       fileupload: item.fileupload,
//       termcon: item.termcon,
//       password: item.password,
//       conformpassword: item.conformpassword,
//     })
//     this.formArray.splice(index, 1);
//   }

//   City: string[] = ['Chennai', 'Madurai', 'Selam', 'Tricy', 'Tirunelveli']

//   changeCity(e: any) {
//     this.formDetails.patchValue({
//       cityName: e.target.value
//     })
//   }

//   addNewRecord() {
//     this.formDiv = true;
//     this.tableDiv = false;
//   }

//   deleteRecord(index: number) {
//     this.formArray.splice(index, 1);
//   }


  //   ExportDataButton() {
//     if (Object.keys(this.ExportDataValue).length !== 0) {

//       this.ExportArray = this.ExportDataValue;

//       this.ExportDiv = true;
//     }
        
//   }

//   ExportDataCheckBox(e:any, index:number):any {
//     if (e.target.checked == true) {
//       console.log(this.ExportDataValue);
//       this.ExportDataValue.push(this.formArray[index]);
//     }
//     else {
//       this.ExportDataValue.splice(index,1);
      
//       // this.ExportArray.splice(index,1);
//     }
// }



//   ClearExportData(){
//     this.ExportArray.length = 0
//   }
}


  // ExportDataButton(event:any) {
    
  //   if (Object.keys(this.ExportDataValue).length !== 0) {


  //     console.log(this.ExportArray);
  //     console.log(this.ExportDataValue);

  //     this.ExportArray = this.ExportDataValue;

  //     this.ExportDiv = true;
  //   }
  // }

