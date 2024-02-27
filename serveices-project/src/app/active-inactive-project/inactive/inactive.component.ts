import { Component, OnInit } from '@angular/core';
import { Userservies } from 'src/app/userServices';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css'],
  
})
export class InactiveComponent implements OnInit{
  secondSetUp:string[] = [];

  constructor(private inActiveUserData:Userservies){}

  ngOnInit():void{
    this.secondSetUp = this.inActiveUserData.secondSetUp
  }

  clickInactivesection(index:number){
    this.inActiveUserData.inactiveSectionClick(index);
  }
}
