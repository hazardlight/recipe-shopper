import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model' ;
import {ShoppingListService} from '../../services/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  // ingredients: Ingredient[] = [
  //   new Ingredient("Avocados", 99),
  //   new Ingredient("Mangos", 2)
  // ];

  ingredients: Ingredient[];

  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {this.ingredients = ingredients}
    );
  }
  onItemEdit(index: number){
    this.shoppingListService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  // addIngredient(ingredient:{name:string, quantity: number}){
  //   this.ingredients.push(new Ingredient(ingredient.name, ingredient.quantity));
  // }
  // addIngredient(newIngredient: Ingredient){
  //   this.ingredients.push(newIngredient);
  // }
}
