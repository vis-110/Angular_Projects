import { Component, OnInit } from '@angular/core';
import { Userservies } from 'src/app/userServices';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
  
})
export class ActiveComponent implements OnInit{
  firstSetUp:string[] = [];

  constructor(private activeUserData:Userservies){}

  ngOnInit(): void {
    this.firstSetUp = this.activeUserData.firstSetUp
  }

  clickActivesection(index:number){
    this.activeUserData.activeSectionClick(index)
  }
  
}
