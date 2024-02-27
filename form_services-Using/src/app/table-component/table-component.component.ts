import { AfterContentChecked, Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Dataservices } from '../data.services.fills/data.services';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements AfterContentChecked {

  @Output('formenable') formEnableTrig = new EventEmitter();

  constructor(private service:Dataservices){}

  tableHide:boolean = false;

  // nameData:string[] = [];
  // gender:string = '';
  // favorite:string = '';
  // district:string = '';
  // date:string = '';
  // gmail:string = '';
  // phNum:number = 0;
  // command=null;

   submitValue:any;

  ngAfterContentChecked(): void {
    // this.nameData =  this.getDataServices.nameData
    // this.gender = this.getDataServices.gender;
    // console.log(this.gender);
    // console.log(this.nameData);
    // this.submitValue.push(this.getDataServices.fromDateRecived);
    // console.log('This is ngOnInit');
    // console.log(this.getDataServices.fromDateRecived);
    this.submitValue = this.service.fromDateRecived;
    // console.log(this.submitValue);
  }

  addRecord(){
    this.formEnableTrig.emit(true);
  }

}
