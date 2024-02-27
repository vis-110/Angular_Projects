import { Component, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() itemParentToPass = new EventEmitter<Recipes>()
  recipes : Recipes[] = [
    new Recipes('A Test Recipe','This is a simple text','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/25/0/FNK_Chana-Masala_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1614271965516.jpeg'),
    new Recipes('A TestCharge Recipe','This is a simple text','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/25/0/FNK_Chana-Masala_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1614271965516.jpeg'),

  ];

  constructor(){

  }

  ngOnInit(){

  }
  
  listToPassData(recipeEle:Recipes){
    this.itemParentToPass.emit(recipeEle);
  }

}
