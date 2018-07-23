import {EventEmitter} from "@angular/core";
import { Recipe } from '../recipes/recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      0,
      "Super Burger",
      "I am salty and delicious!",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
      [
        new Ingredient('Super Buns', 1),
        new Ingredient('Super Meat', 2)
      ]
    ),
    new Recipe(
      1,
      "Ultra BURGER",
      "The most wonderful lipid!",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
      [
        new Ingredient('Ultimate Butter Bread', 1),
        new Ingredient('Ultimate Meat', 20)
      ]
    )
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }
}
