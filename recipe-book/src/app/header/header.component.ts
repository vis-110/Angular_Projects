import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
})


export class HeaderComponent{
    @Output() componentSelect = new EventEmitter<string>();



    findRecipe(getName:string){
        this.componentSelect.emit(getName);
    }
}