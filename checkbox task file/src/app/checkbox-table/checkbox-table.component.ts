import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkbox-table',
  templateUrl: './checkbox-table.component.html',
  styleUrls: ['./checkbox-table.component.css']
})

export class CheckboxTableComponent {
  // formData:any = {
  //   checkBox1:'',
  //   checkBox2:'',  
  //   checkBox3:'',
  //   checkBox4:'',
  //   checkBox5:'',
  // }

  // checkBoxSubmit(f: NgForm) {
  //   this.arrayOfCheckboxs.push(f.value);
  //   console.log(this.arrayOfCheckboxs);
  //   this.checkBoxCopydata = f.value;
  //   f.reset();
  // }

  // checkBoxSubmit(){
  //   console.log(this.formData);
  //   this.arrayOfCheckboxs.push(this.formData);
  //   this.formData.reset();

  // }


  checkboxForm: FormGroup;
  arrayOfCheckboxs: any[] = [];
  checkBoxCopydata: any;

  constructor(public fb: FormBuilder) {
    this.checkboxForm = this.fb.group({
      checkbox1: ['',],
      checkbox2: ['',],
      checkbox3: ['',],
      checkbox4: ['',],
      checkbox5: ['',]
    })
  }

  checkboxSubmit() {
    this.checkBoxCopydata = this.checkboxForm;
    this.arrayOfCheckboxs.push(this.checkBoxCopydata.value);
    console.log(this.checkBoxCopydata);
    this.checkboxForm.reset();
  }

  updateCheckbox(e: any) {
    this.checkboxForm.setValue({
      checkbox1:e.checkbox1,
      checkbox2:e.checkbox2,
      checkbox3:e.checkbox3,
      checkbox4:e.checkbox4,
      checkbox5:e.checkbox5,

    })
  }
}
