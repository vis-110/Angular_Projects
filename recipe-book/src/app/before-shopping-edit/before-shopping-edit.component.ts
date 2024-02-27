import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/Incrediets.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
 @ViewChild('nameInput') nameInputRef : ElementRef;
 @ViewChild('numberInput') numberInputRef : ElementRef;

@Output() ingredientAdded = new EventEmitter<Ingredients>();


  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.numberInputRef.nativeElement.value;
    
    const newIngredient = new Ingredients(ingName,ingAmout);

    this.ingredientAdded.emit(newIngredient);
  }
}

