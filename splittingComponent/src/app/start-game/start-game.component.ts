import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent {

  @Output () lopVariable = new EventEmitter<number>();
  loopCount:any;
  loopVarible:number = 0;
  gameLoopstart(){
    this.loopCount= setInterval(()=>{
     this.lopVariable.emit(this.loopVarible +1);
     this.loopVarible++;
     },1000);

  }

  gameLoopPause(){
    clearInterval(this.loopCount);
  }

}
