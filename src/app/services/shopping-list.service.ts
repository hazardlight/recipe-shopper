import {EventEmitter} from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Avocados", 99),
    new Ingredient("Mangos", 2)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // '...' is called the spread operator, which converts an array of objects into a list of objects allowing the push() function
    //to add all the ingredients before emitting any events.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
