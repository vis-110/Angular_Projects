import { Component } from '@angular/core';
import { EventService } from '../event.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent {
  event:any;
  id:any;
  constructor(private _eventServicesget:EventService,private activatedRoute:ActivatedRoute){}

  // ngOnInit() {
  //   this.event = this._eventServicesget.getEvent(+this.activatedRoute.snapshot.params['Id'])
  // }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('Id');
      this.event = this._eventServicesget.getEvent(+this.id);
    });
  }
}
