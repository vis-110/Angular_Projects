import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { Datasharing } from '../services/exportData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements AfterContentChecked {
  tableDiv: boolean = true;
  formArray: any[];
  constructor(private exportData: Datasharing, private _router: Router) {
    console.log('insert constructor');
    this.formArray = this.exportData.getTableData();
    console.log(this.formArray);
    console.log(this.exportData.getTableData());

    console.log('table data value constractor varutha');
  }

  ngAfterContentChecked(): void {
    console.log('insert');

    this.formArray = this.exportData.getTableData();
    console.log(this.formArray);
    console.log(this.exportData.getTableData());

    console.log('table data value ng after contenct changed varutha');
  }
  deleteRecord(i: number) {
    this.exportData.deleteRecord(i);
  }

  ExportDataCheckBox(e: any, item: any,index:number): any {
    this.exportData.ExportDataCheckBox(e, item,index)
  }

  ExportDataButton() {
    this.exportData.ExportDataButton();
    this._router.navigate(['table/export']);
  }

  addNewRecord() {
    this.exportData.addNewRecord();
    this._router.navigate(['form']);
  }

  editFormData(i: number) {
    this._router.navigateByUrl('tableEdit/' + i);
  }

}
