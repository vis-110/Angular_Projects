import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.services';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  events:any[] = [];
  constructor(private _eventServices:EventService){}

  ngOnInit(): void {
      this.events = this._eventServices.getEvents()
  }


}
