import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServeService } from '../services/data-serve.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  registerForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private _serviceShar:DataServeService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            id:['',Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phonenumber: ['', Validators.required],
            date: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this._serviceShar.submitData(this.registerForm.value);
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}




