import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredients } from 'src/app/shared/Incrediets.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
//  @ViewChild('nameInput') nameInputRef : ElementRef;
//  @ViewChild('numberInput') numberInputRef : ElementRef;

@Output() ingredientAdded = new EventEmitter<Ingredients>();


  onAddItem(form:NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmout = this.numberInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredients(value.name,value.amount);

    this.ingredientAdded.emit(newIngredient);
  }
  
}
