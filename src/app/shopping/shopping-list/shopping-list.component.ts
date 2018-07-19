import { Component, OnInit } from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model' ;
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // ingredients: Ingredient[] = [
  //   new Ingredient("Avocados", 99),
  //   new Ingredient("Mangos", 2)
  // ];

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {this.ingredients = ingredients}
    );
  }
  // addIngredient(ingredient:{name:string, quantity: number}){
  //   this.ingredients.push(new Ingredient(ingredient.name, ingredient.quantity));
  // }
  // addIngredient(newIngredient: Ingredient){
  //   this.ingredients.push(newIngredient);
  // }
}
