import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Datasharing } from '../services/exportData';

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements AfterContentChecked {

  constructor(private exportData: Datasharing) { };

  ExportArray: any[] = [];
  ngAfterContentChecked(): void {
    this.ExportArray = this.exportData.ExportArray
  }

  ClearExportData() {
    // this.ExportArray.length = 0;
    this.ExportArray.splice(0, this.ExportArray.length)
  }
}
