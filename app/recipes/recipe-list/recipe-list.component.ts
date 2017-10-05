import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('First Test Recipe', 
               'Just a test recipe', 
               'https://www.justonecookbook.com/wp-content/uploads/2016/09/Japanese-Pudding-600x400.jpg'),
    new Recipe('Second Test Recipe', 
               'Just a test recipe and it is basically the same as before, so Im going to add a very big description now', 
               'http://www.thepuddingshop.co.uk/44/icky-sticky-toffee-steamed-pudding.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
