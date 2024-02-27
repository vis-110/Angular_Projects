import { Injectable, Output, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class Datasharing {



  formDetailCollection: any = {};
  fileToUpload: any[] = [];
  selectedimage: File | null = null;
  formArray: any[] = [];
  ExportDataValue: any[] = [];
  ExportArray: any[] = [];
  tableDiv: boolean = false;
  CheckedTrue: any;
  checked: any;
  inDex: any;

  constructor(private _httpClient: HttpClient) { }

  imgfileUpload(event: any) {
    this.selectedimage = event.target.files[0]
  }

  tableSubmit(formDetail: any) {
    if (Number(formDetail.id) >= 0) {
      this.formArray[Number(formDetail.id)] = formDetail;

    } else {
      this.formArray.push(formDetail);
      this.formDetailCollection = formDetail;
      this._httpClient.post("https://angular-http-demo1-66cff-default-rtdb.firebaseio.com/data.json", this.formArray).subscribe(res => {
        console.log("Data post is done")
      },
      );
    }
    this.CheckedTrue =   this._httpClient.get("https://angular-http-demo1-66cff-default-rtdb.firebaseio.com/data.json").subscribe(res => {
      console.log(res);
    })
    console.log(this.CheckedTrue)
  }

  getTableData() {
    return this.formArray;
  }

  getFormArrayValueret(i: number) {
    return this.formArray[i];
  }

  getUpdateData() {
    return this.formDetailCollection
  }

  City: string[] = ['Chennai', 'Madurai', 'Selam', 'Tricy', 'Tirunelveli']

  changeCity(e: any) {
    this.formDetailCollection.patchValue({
      cityName: e.target.value
    })
  }

  addNewRecord() {
    this.tableDiv = false;
  }

  deleteRecord(index: number) {
    this.formArray.splice(index, 1);
  }

  ExportDataCheckBox(e: any, list: any, index: number): any {
    if (e.target.checked == true) {
      this.ExportDataValue.push(list);
    }
    else {
      this.ExportDataValue.splice(index, 1);
    }
  }

  ExportDataButton() {
    this.ExportArray.length = 0;
    this.ExportDataValue.map(item => {
      if (item.isChecked) {
        this.ExportArray.push(item);
      }
    })

  }

}