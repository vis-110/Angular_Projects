import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Datasharing } from '../services/exportData';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements AfterContentInit {
  @Output('submitaction') buttonSubmit = new EventEmitter();

  formDetails: FormGroup;
  formDetailCollection: any;
  editId: number;
  newRouteObject: any;
  selectedimage: File | null = null;
  formArray: any[] = [];

  constructor(public fb: FormBuilder,
    private formDatapass: Datasharing, private router: Router,
    private _route: ActivatedRoute) {

    this.formDetails = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      dob: ['', Validators.required],
      phonenumber: ['', Validators.required,],
      gender: [''],
      cityName: ['',],
      fileupload: [null],
      termcon: ['',],
      password: ['', [Validators.required]],
      conformpassword: ['', [Validators.required]],
      id: ['-1']
    })

    this.formDetails.addValidators(
      this.matchValidator(this.formDetails.get(['password']), this.formDetails.get('conformpassword'))
    );

  }

  get fControl() {
    return this.formDetails.controls;
  }

  matchValidator(control: AbstractControl, controlTwo: AbstractControl): ValidatorFn {
    return () => {
      if (control.value !== controlTwo.value)
        return { match_error: 'Value does not match' };
      return null;
    };
  }

  // ngAfterContentChanged() {
  //   // this._route.params.subscribe((params) => {
  //   // var recordName = params["name"];
  //   //load record data
  //   // });

  //   // this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['eventId'])
  //   //  this.newRouteObject = this.formDatapass.getFormArrayValueret(+this._route.snapshot.params['i']);
  //   this.newRouteObject = this._route.snapshot.params['item'];
  //   console.log(this.newRouteObject);
  //     this.formDetails.setValue({
  //       firstname: this.newRouteObject.firstname,
  //       lastname: this.newRouteObject.lastname,
  //       email: this.newRouteObject.email,
  //       dob: this.newRouteObject.dob,
  //       phonenumber: this.newRouteObject.phonenumber,
  //       gender: this.newRouteObject.gender,
  //       cityName: this.newRouteObject.cityName,
  //       fileupload: this.newRouteObject.fileupload,
  //       termcon: this.newRouteObject.termcon,
  //       password: this.newRouteObject.password,
  //       conformpassword: this.newRouteObject.conformpassword,
  //     })
  // }

  ngAfterContentInit(): void {

    this.formDatapass.getUpdateData();

    this.editId = this._route.snapshot.params['i'];
    // this.newRouteObject = JSON.parse(this.formDetailCollection);

    //  this.newRouteObject = this.formDatapass.getFormArrayValueret(+this._route.snapshot.params['i']);
    // console.log(this.editId);
    this.newRouteObject = this.formDatapass.getFormArrayValueret(this.editId);
    // console.log(this.newRouteObject);

    this.formDetails.setValue({
      firstname: this.newRouteObject.firstname,
      lastname: this.newRouteObject.lastname,
      email: this.newRouteObject.email,
      dob: this.newRouteObject.dob,
      phonenumber: this.newRouteObject.phonenumber,
      gender: this.newRouteObject.gender,
      cityName: this.newRouteObject.cityName,
      fileupload: this.newRouteObject.fileupload,
      termcon: this.newRouteObject.termcon,
      password: this.newRouteObject.password,
      conformpassword: this.newRouteObject.conformpassword,
      id: this.editId,

    })

  }

  imgfileUpload(event: any) {
    this.selectedimage = event.target.files[0]
  }

  tableSubmit() {

    this.formDetailCollection = this.formDetails.value;
    // console.log(this.formDetailCollection);
    // console.log(Number(this.formDetailCollection.id));

    if (this.selectedimage) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.formDetailCollection.fileupload = event.target.result;
        // console.log(this.formDetailCollection);
      }
      reader.readAsDataURL(this.selectedimage);
    }
    else {
      this.formArray.push(this.formDetailCollection);
    }
    this.formDatapass.tableSubmit(this.formDetailCollection);
    this.router.navigate(['table']);
    this.formDetails.reset();
    // console.log(this.formArray);
  }

  City: string[] = ['Chennai', 'Madurai', 'Selam', 'Tricy', 'Tirunelveli']

  changeCity(e: any) {
    this.formDatapass.changeCity(e);
  }
}