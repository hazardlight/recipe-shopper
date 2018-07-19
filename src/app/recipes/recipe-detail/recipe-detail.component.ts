import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipeName: string;
  // @Input() recipeDescription: string;

  @Input() recipe: Recipe;

  // recipeName: string = this.recipe.name;
  // recipeDescription: string = this.recipe.description;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  toShoppingList(){
    //this will work, however apparently we emit one event for every iteration of the loop, which can be a problem if you have a lot of
    //items to loop through.
    //Also, it's better to place this kind of logic on the Service??
    // for(var i = 0; i<this.recipe.ingredients.length; i++){
    //   this.shoppingListService.addIngredient(this.recipe.ingredients[i]);
    // }

    this.shoppingListService.addIngredients(this.recipe.ingredients);

  }
}
