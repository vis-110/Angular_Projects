export class Userservies{
    firstSetUp:string[] =['Camara','Content','Location'] ;
    secondSetUp:string[] = ['Microphone','Tap','Call Log'];

    activeSectionClick(id:number){
        this.secondSetUp.push(this.firstSetUp[id]);
        this.firstSetUp.splice(id,1);
    }

    inactiveSectionClick(id:number){
        this.firstSetUp.push(this.secondSetUp[id]);
        this.secondSetUp.splice(id,1);
    }


}



