import { Component } from '@angular/core';
import { Ingredients } from '../shared/Incrediets.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredients[] = [
    new Ingredients('Apples',5),
    new Ingredients('Tomatos',5),
  ];

  onIngredientAdded(value:Ingredients){
    this.ingredients.push(value)
  }
}
