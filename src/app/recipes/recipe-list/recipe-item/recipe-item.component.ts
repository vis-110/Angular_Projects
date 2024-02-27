import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipes } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Output() selectItemPass = new EventEmitter<void>();
  @Input() recipe:Recipes;


  recipeItemClick(){
    this.selectItemPass.emit();
  }
}
