import { Component,ViewChild,AfterViewInit, Input } from '@angular/core';
import { ChildChildComponent } from './child-child/child-child.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  age!:number;
  stored = [{status:'fjdklj', name:'ttttt', Content:'uireuir'}];
  element = "There are parent component";
  parentCompo(event:any){
    console.log(event);
  }
  
  // 
  parentBtnIncrement(){
    this.appcom++;
  }
  parentBtnDecrement(){
    this.appcom-- ;
  }

  appcom:number=0;

  appGetValue(value:number){
    this.appcom = value;
  }

    constructor(private router:Router){

    }

  childcom:number=20;
  @ViewChild(ChildChildComponent) childdata!: ChildChildComponent;

  ngAfterViewInit():void{
    this.childcom = this.childdata.vishnu
  }

  // routerUsingChild():void{
  //   this.router.navigateByUrl('child');
  // }

  // routerUsingChildChild():void{
  //   this.router.navigateByUrl('child-child/'+ this.age);
  // }



  // below are start game properties

  
  addValueNumbers:number[] = [];
  evenValueNumbers:number[] = []


  startGamelopVariable(value:number){
    if((value%2) == 0){
      this.addValueNumbers.push(value);
    }
    else{
      this.evenValueNumbers.push(value);
    }
  }


}
