import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Japanese Pudding', 
                   'A japanese pudding!', 
                   'https://www.justonecookbook.com/wp-content/uploads/2016/09/Japanese-Pudding-600x400.jpg',
                    [
                        new Ingredient('Milk', 2),
                        new Ingredient('Eggs', 6)
                    ]),
        new Recipe('Toffee Steamed Pudding', 
                   'Pudding and Coffee? What else needs to be said?', 
                   'http://www.thepuddingshop.co.uk/44/icky-sticky-toffee-steamed-pudding.jpg',
                    [
                        new Ingredient('Coffee', 1),
                        new Ingredient('Milk', 2),
                        new Ingredient('Sugar', 2)
                    ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}