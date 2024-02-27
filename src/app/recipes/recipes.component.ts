import { Component } from '@angular/core';
import { Recipes } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectRecipe:Recipes;
}
