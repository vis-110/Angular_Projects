import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  getDatailsValue: object = {};
  // tabelDataParent: any;

  cars: any = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7,
      "isEnabled": false
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5,
      "isEnabled": false
    },
    {
      "color": "yellow",
      "type": "star wagon",
      "registration": new Date('2018-08-19'),
      "capacity": 8,
      "isEnabled": false
    },
    {
      "color": "gray",
      "type": "city plus",
      "registration": new Date('2018-10-27'),
      "capacity": 9,
      "isEnabled": false
    },

  ]

  getRowValue(i: number, getDetails: any) {
    this.getDatailsValue = getDetails;
    // this.tabelDataParent = JSON.stringify(getDetails);

    const openPop = document.getElementById('PopModal');
    if (openPop != null) {
      openPop.style.display = 'block';

      // this.colorVar = this.cars[i].color;
      // this.typeVar = this.cars[i].type;

    }
  }

  deleteFunction(index: any) {

    // let deleteRow = eventGrantParent.parentNode;
    // this.checkBoxClick = deleteRow
    // deleteRow.remove();

    this.cars.splice(index, 1);
  }

  checkBoxClicked(i: number) {
    // if (this.cars[i].isEnabled) {
    //   this.cars[i].isEnabled = false;
    // }
    // else {
    //   this.cars[i].isEnabled = true;
    // }

    (this.cars[i].isEnabled) ? this.cars[i].isEnabled = false : this.cars[i].isEnabled = true;
  }


  @ViewChild(PopUpComponent,{static:false})various: PopUpComponent | any ;

  ngOnInit(): void {
    console.log('OnInit' + " - " + this.various.parentViewchildUsing);
  }

  ngDoCheck(): void {
    console.log('DoCheck' + " - " + this.various.parentViewchildUsing);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange' + " - " + this.various.parentViewchildUsing);

  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit' + " - " + this.various.parentViewchildUsing);

  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked' + " - " + this.various.parentViewchildUsing);

  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit' + " - " + this.various.parentViewchildUsing);

  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked' + " - " + this.various.parentViewchildUsing);

  }

}
