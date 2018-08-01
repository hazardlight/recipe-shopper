import {EventEmitter} from "@angular/core";
import { Recipe } from '../recipes/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Super Burger",
      "I am salty and delicious!",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
      [
        new Ingredient('Super Buns', 1),
        new Ingredient('Super Meat', 2)
      ]
    ),
    new Recipe(
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
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(id: number){
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
