import { AfterContentChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
// import { Datasharing } from '../services/exportData';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormDataComponent implements AfterContentChecked {
  @Output('submitaction') buttonSubmit = new EventEmitter();

  formDetails: FormGroup;
  formDetailCollection: any;
  selectedimage: File | null = null;
  formArray: any[] = [];
  // formDiv: boolean = true;

  constructor(public fb: FormBuilder, private formDatapass: Datasharing, private router:Router) {
    this.formDetails = this.fb.group({
      firstname: ['',],
      lastname: ['',],
      email: ['',],
      dob: ['',],
      phonenumber: ['',],
      gender: ['',],
      cityName: ['',],
      fileupload: [null],
      termcon: ['',],
      password: ['',],
      conformpassword: ['',],
    })

    this.formDetails.addValidators(
      this.matchValidator(this.formDetails.get(['password']), this.formDetails.get('conformpassword'))
    );
  }

  matchValidator(control: AbstractControl, controlTwo: AbstractControl): ValidatorFn {
    return () => {
      if (control.value !== controlTwo.value)
        return { match_error: 'Value does not match' };
      return null;
    };
  }

  // ngOnInit(): void {
  //  this.formDetailCollection = this.formDatapass.getUpdateData;
  //  console.log(this.formDatapass.getUpdateData);
   
  // }

  ngAfterContentChecked(): void {
      this.formDatapass.getUpdateData();
  }

  imgfileUpload(event: any) {
    this.selectedimage = event.target.files[0]
  }

  tableSubmit() {
    this.formDetailCollection = this.formDetails.value;
    console.log(this.formDetailCollection);

    if (this.selectedimage) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.formDetailCollection.fileupload = event.target.result;
        console.log(this.formDetailCollection);

        // this.formArray.push(this.formDetailCollection);
        // console.log(this.formArray);
        this.formDatapass.tableSubmit(this.formDetailCollection);

      }
      reader.readAsDataURL(this.selectedimage);
      this.router.navigate(['table']);

    }
    else {
      this.formArray.push(this.formDetailCollection);
    }
    this.formDetails.reset();
    console.log(this.formArray);
    this.buttonSubmit.emit(false);


    // // this.tableDiv = true;
    // this.formDiv = this.formDatapass.formDiv
    // console.log(this.formDatapass.formDiv);
    // this.formDiv = false;
    // this.formDatapass.tableDiv
    // this.formDatapass.tableSubmit(this.formArray);
  }





  City: string[] = ['Chennai', 'Madurai', 'Selam', 'Tricy', 'Tirunelveli']

  changeCity(e: any) {
    this.formDatapass.changeCity(e);
  }

}
