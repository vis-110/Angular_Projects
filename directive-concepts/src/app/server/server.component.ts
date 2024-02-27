import { Component } from "@angular/core";


@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
    .online{
        color:white;
        border : 3px solid orange;
    } `]
})

export class serverComponent{
serverId:number = 100;
serverName:string = 'varavendum';
serverStatus:string = 'offline';
randomValue:number = Math.random();
constructor(){

    this.serverStatus = this.randomValue > 0.5 ? 'online' : 'offline';
    console.log(this.randomValue)
    console.log(this.serverStatus)
}
getCollectName(){
    return this.serverName;

}
getBaColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
}
}