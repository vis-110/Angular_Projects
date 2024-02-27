import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'table-data';

 cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
      "color": "yellow",
      "type": "star wagon",
      "registration": new Date('2018-08-19'),
      "capacity": 8
    },
    {
      "color": "gray",
      "type": "city plus",
      "registration": new Date('2018-10-27'),
      "capacity": 9
    },

  ]
  vishnu :string='';
  getRowValue(nr:any){
    console.log(nr);
    this.vishnu = JSON.stringify(nr);
  }
  
}
