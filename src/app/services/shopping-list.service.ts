// import {EventEmitter} from "@angular/core";
import {Subject} from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Avocados", 99),
    new Ingredient("Mangos", 2)
  ];

  getIngredient(index: number){
    return this.ingredients[index];
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]){
    // '...' is called the spread operator, which converts an array of objects into a list of objects allowing the push() function
    //to add all the ingredients before emitting any events.
    this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
