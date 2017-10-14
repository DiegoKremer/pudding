import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('First Test Recipe', 
                   'Just a test recipe', 
                   'https://www.justonecookbook.com/wp-content/uploads/2016/09/Japanese-Pudding-600x400.jpg'),
        new Recipe('Second Test Recipe', 
                   'Just a test recipe and it is basically the same as before, so Im going to add a very big description now', 
                   'http://www.thepuddingshop.co.uk/44/icky-sticky-toffee-steamed-pudding.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}